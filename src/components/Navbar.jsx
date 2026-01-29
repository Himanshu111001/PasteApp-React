import { NavbarData } from "../data/Navbar";
import { NavLink, Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <nav className="w-full h-[70px] flex justify-center items-center p-4 bg-gray-800/90 dark:bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700 dark:border-gray-800 transition-all duration-300">
      <div className="w-full max-w-[1200px] flex justify-between items-center px-4 lg:px-0">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg group-hover:scale-110 transition-transform" />
          <span className="text-white font-bold text-2xl hidden sm:block tracking-tight">PasteApp</span>
        </Link>

        {/* Links & Actions */}
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-6">
            {NavbarData.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold text-lg"
                    : "text-gray-300 font-medium text-lg hover:text-white transition-colors"
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-xl bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 transition shadow-lg group"
            aria-label="Toggle Dark Mode"
          >
            {dark ? (
              <Sun size={20} className="text-yellow-400 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={20} className="text-blue-400 group-hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


