import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";
import StaticSections from "./StaticSections";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2)),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <header className="text-left mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white m-0 tracking-tight">
            📄 PastesApp
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 m-0 text-lg">
            ✍️ Store and share text snippets, notes, and code securely. 🔒
          </p>
        </header>

        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-x-4 justify-between items-stretch md:items-center">
          <input
            type="text"
            placeholder="Enter Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow text-black dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all w-full md:w-auto"
          />
          <div className="flex flex-row gap-x-3 shrink-0">
            <button
              className="flex-grow md:flex-grow-0 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-6 py-3 transition-colors shadow-md whitespace-nowrap"
              onClick={createPaste}
            >
              {pasteId ? "Update Paste" : "Create My Paste"}
            </button>

            {pasteId && (
              <button
                className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-3 transition-colors shadow-md"
                onClick={resetPaste}
                title="Reset Field"
              >
                <PlusCircle size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col items-start relative rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
          <div className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex gap-x-2 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <button
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors group"
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to Clipboard");
              }}
            >
              <Copy className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500" size={20} />
            </button>
          </div>

          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            className="w-full p-4 dark:bg-gray-800 dark:text-white focus:outline-none resize-none"
            rows={12}
          />
        </div>

        <StaticSections />
      </div>
    </div>
  );
};

export default Home;

