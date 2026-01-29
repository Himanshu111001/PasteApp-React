import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utils/formatDate";
import { Link, useNavigate } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-6">
        {/* Search */}
        <div className="w-full flex gap-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent text-gray-900 dark:text-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* All Pastes */}
        <div className="flex flex-col border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-6 rounded-xl shadow-lg">
          <h1 className="px-6 text-4xl font-bold border-b border-gray-300 dark:border-gray-700 pb-4 text-gray-900 dark:text-gray-100">
            All Pastes
          </h1>
          <div className="w-full px-6 pt-6 flex flex-col gap-y-6">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div
                  key={paste?._id}
                  className="border border-gray-200 dark:border-gray-700 w-full flex flex-col sm:flex-row justify-between p-4 md:p-6 rounded-xl hover:shadow-md transition-shadow gap-y-4"
                >
                  {/* heading and Description */}
                  <div className="w-full sm:w-[65%] flex flex-col space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                      {paste?.title}
                    </h2>
                    <p className="text-sm md:text-base font-normal line-clamp-3 text-gray-600 dark:text-gray-400">
                      {paste?.content}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="flex flex-col gap-y-4 sm:items-end justify-between shrink-0">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                        aria-label="Edit Paste"
                      >
                        <Link to={`/?pasteId=${paste?._id}`}>
                          <PencilLine
                            className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500"
                            size={20}
                          />
                        </Link>
                      </button>
                      <button
                        className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-pink-500 dark:hover:border-pink-500 transition-colors group"
                        onClick={() => handleDelete(paste?._id)}
                        aria-label="Delete Paste"
                      >
                        <Trash2
                          className="text-gray-600 dark:text-gray-300 group-hover:text-pink-500"
                          size={20}
                        />
                      </button>

                      <button
                        className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group"
                        aria-label="View Paste"
                      >
                        <Link to={`/pastes/${paste?._id}`}>
                          <Eye
                            className="text-gray-600 dark:text-gray-300 group-hover:text-orange-500"
                            size={20}
                          />
                        </Link>
                      </button>
                      <button
                        className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500 transition-colors group"
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("Copied to Clipboard");
                        }}
                        aria-label="Copy Content"
                      >
                        <Copy
                          className="text-gray-600 dark:text-gray-300 group-hover:text-green-500"
                          size={20}
                        />
                      </button>
                    </div>

                    <div className="gap-x-2 flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={18} />
                      {FormatDate(paste?.createdAt)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-center w-full text-chileanFire-500 py-10 font-medium">
                No Data Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Paste;
