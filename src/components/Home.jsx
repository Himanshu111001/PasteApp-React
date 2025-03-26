import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Destructure useSearchParams
  const pasteId = searchParams.get("pasteId"); // Get pasteId from the search params
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // If pasteId is present, update the paste
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");

    // Remove the pasteId from the URL after creating/updating a paste
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
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
          <h1 className="text-3xl font-bold text-gray-900 m-0">
            📄 PastesApp - Secure & Easy Text Storage
          </h1>
          <p className="text-gray-600 mt-1 m-0">
            ✍️ Store and share text snippets, notes, and code securely. 🔒
          </p>
        </header>

        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // Dynamic width based on whether pasteId is present
            className={`${
              pasteId ? "w-[80%]" : "w-[85%]"
            } text-black border border-input rounded-md p-2`}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={createPaste}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>

          {pasteId && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )}
        </div>

        <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", {
                    position: "top-right",
                  });
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          {/* TextArea */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            className="w-full p-3  focus-visible:ring-0"
            style={{
              caretColor: "#000",
            }}
            rows={20}
          />
        </div>

        <div className="flex flex-row flex-wrap place-content-evenly gap-10 mx-auto">
          {/* 🔹 How It Works */}
          <section className="">
            <h2 className="text-2xl font-semibold text-gray-800">
              🔍 How It Works
            </h2>
            <ul className=" list-inside text-gray-600 mt-2">
              <li>
                📝 <strong>Write</strong> or paste your text.
              </li>
              <li>
                🔗 <strong>Save</strong> and get a shareable link.
              </li>
              <li>
                👀 <strong>View & Edit</strong> your pastes anytime.
              </li>
            </ul>
          </section>

          {/* 🔹 Why Choose Us? */}
          <section className="">
            <h2 className="text-2xl font-semibold text-gray-800">
              🌟 Why Choose PastesApp?
            </h2>
            <div className="flex flex-col gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">🛡️ Secure & Private</h3>
                <p className="text-gray-600">
                  Your pastes are encrypted for maximum privacy.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">🚀 Fast & Simple</h3>
                <p className="text-gray-600">
                  No sign-up required—just paste and share!
                </p>
              </div>
            </div>
          </section>

          {/* 🔹 Testimonials */}
          <section className="">
            <h2 className="text-2xl font-semibold text-gray-800">
              💬 What Users Say
            </h2>
            <div className="mt-4">
              <p className="text-gray-600 italic">
                "PastesApp is my go-to tool for quick and secure text storage!"
              </p>
              <p className="text-gray-500 text-sm">- Happy User ⭐⭐⭐⭐⭐</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
