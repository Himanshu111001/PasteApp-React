import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <p className="text-5xl font-extrabold text-gray-900 dark:text-white">404</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">Paste Not Found</p>
        <Link
          to="/pastes"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all font-semibold"
        >
          Go Back to Pastes
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full">
          <h1 className="w-full text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 shadow-sm font-semibold">
            {paste.title}
          </h1>
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
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to Clipboard");
              }}
            >
              <Copy className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500" size={20} />
            </button>
          </div>

          <textarea
            value={paste.content}
            disabled
            placeholder="Write Your Content Here...."
            className="w-full p-4 dark:bg-gray-800 dark:text-white focus:outline-none resize-none"
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};


export default ViewPaste;
