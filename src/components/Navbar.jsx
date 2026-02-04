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
  const [activeDropdown, setActiveDropdown] = useState(null);
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
            <div className="hidden md:flex items-center relative gap-x-4">
              {user ? (
                // Logged In: User Profile Avatar -> Dropdown
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === "user" ? null : "user")}
                    className={`flex items-center gap-x-2 p-1 rounded-full border transition-all ${activeDropdown === "user" ? "border-blue-500 ring-2 ring-blue-500/20" : "border-transparent hover:border-gray-600"
                      }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden shadow-sm border border-gray-600">
                      {user.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="User" />
                      ) : (
                        <User size={18} />
                      )}
                    </div>
                  </button>

                  {/* User Dropdown */}
                  {activeDropdown === "user" && (
                    <div className="absolute right-0 top-full pt-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-1">
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <p className="text-sm text-gray-900 dark:text-white font-semibold truncate">
                            {user.user_metadata?.full_name || "User"}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            handleLogout();
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 flex items-center gap-2 transition-colors"
                        >
                          <LogOut size={16} />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Logged Out: User Icon (No Text) -> Dropdown
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === "login" ? null : "login")}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${activeDropdown === "login"
                        ? "bg-gray-700 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    title="Sign In"
                  >
                    <User size={22} />
                  </button>

                  {/* Login Dropdown */}
                  {activeDropdown === "login" && (
                    <div className="absolute right-0 top-full pt-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
                        <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1 text-center">
                          Sign In
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs text-center mb-4">
                          Log in to save and sync your pastes.
                        </p>

                        <button
                          onClick={handleLogin}
                          className="w-full flex items-center justify-center gap-x-3 px-4 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-all shadow-sm active:scale-95"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              fill="#4285F4"
                            />
                            <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fill="#EA4335"
                            />
                          </svg>
                          <span>Sign in with Google</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
                  className="w-full flex items-center justify-center gap-x-3 p-3.5 rounded-xl bg-white text-gray-700 font-semibold shadow-lg active:scale-95 transition-transform"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span>Continue with Google</span>
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




