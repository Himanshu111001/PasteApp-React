import { NavbarData } from "../data/Navbar";
import { NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, LogIn, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "../supabase";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "../redux/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") !== "false"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      }
    });
    if (error) toast.error(error.message);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      dispatch(clearSession());
      toast.success("Logged out successfully");
    }
  };

  return (
    <nav className="w-full h-[70px] flex justify-center items-center p-4 bg-gray-800/90 dark:bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700 dark:border-gray-800 transition-all duration-300">
      <div className="w-full max-w-[1200px] flex justify-between items-center px-4 lg:px-0">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300 shadow-sm rounded-xl"
          />
          <span className="text-white font-bold text-xl md:text-2xl tracking-tight ml-1">PastesApp</span>
        </Link>

        {/* Desktop Links & Actions */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <div className="hidden md:flex items-center gap-x-6">
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

          <div className="flex items-center gap-x-2 md:gap-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 md:p-2.5 rounded-xl bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 transition shadow-lg group"
              aria-label="Toggle Dark Mode"
            >
              {dark ? (
                <Sun size={20} className="text-yellow-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={20} className="text-blue-400 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Auth Actions */}
            <div className="hidden md:flex items-center">
              {user ? (
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2 bg-gray-700 dark:bg-gray-800 px-3 py-1.5 rounded-xl border border-gray-600 dark:border-gray-700 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden">
                      {user.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="User" />
                      ) : (
                        <User size={16} />
                      )}
                    </div>
                    <span className="text-white text-sm font-medium hidden lg:block">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 transition border border-red-500/20"
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="flex items-center gap-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-500/20"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-700 dark:bg-gray-800 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gray-800 dark:bg-black border-b border-gray-700 dark:border-gray-800 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4 gap-y-4">
            {NavbarData.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold text-xl p-2 bg-gray-700/50 dark:bg-gray-900/50 rounded-lg text-center"
                    : "text-gray-300 font-medium text-xl p-2 hover:text-white text-center transition-colors"
                }
              >
                {link.title}
              </NavLink>
            ))}

            {/* Mobile Auth Button */}
            <div className="pt-4 border-t border-gray-700 dark:border-gray-800">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-x-2 p-3 rounded-xl bg-red-500/10 text-red-500 font-semibold"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full flex items-center justify-center gap-x-2 p-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  <LogIn size={20} />
                  <span>Login with Google</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




