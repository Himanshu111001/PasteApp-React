import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
    <div className="w-full h-[60px] flex justify-center items-center p-4 bg-gray-800 dark:bg-black gap-x-5 transition-colors duration-300">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl hover:text-blue-400 transition"
          }
        >
          {link.title}
        </NavLink>
      ))}

      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition ml-4"
        aria-label="Toggle Dark Mode"
      >
        {dark ? <Sun size={20} color="white" /> : <Moon size={20} color="white" />}
      </button>
    </div>
  );
};

export default Navbar;

