import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 dark:bg-black/90 py-6 mt-auto border-t border-gray-700 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-y-4">
                {/* Left Side: Developer Name */}
                <div className="text-gray-300 dark:text-gray-400 text-sm font-medium text-center md:text-left">
                    © {new Date().getFullYear()} <span className="text-blue-500 dark:text-blue-400">PastesApp</span>.
                    Built with ❤️ by <span className="text-white">Himanshu</span>
                </div>

                {/* Right Side: Social Links */}
                <div className="flex items-center gap-x-6">
                    <a
                        href="https://github.com/Himanshu111001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/himanshu-shishodiaa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
