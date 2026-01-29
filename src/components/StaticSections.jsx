const StaticSections = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12 mb-10">
            {/* 🔹 How It Works */}
            <section className="flex flex-col h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    🔍 How It Works
                </h2>
                <ul className="list-inside text-gray-600 dark:text-gray-400 mt-4 space-y-4 flex-grow">
                    <li className="flex items-start gap-3">
                        <span className="text-xl">📝</span>
                        <div>
                            <strong className="block text-gray-900 dark:text-white">Write</strong>
                            <span className="text-sm">Create or paste your text snippets instantly.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-xl">🔗</span>
                        <div>
                            <strong className="block text-gray-900 dark:text-white">Save</strong>
                            <span className="text-sm">Get a unique shareable link for your content.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-xl">👀</span>
                        <div>
                            <strong className="block text-gray-900 dark:text-white">View & Edit</strong>
                            <span className="text-sm">Access and update your pastes anytime from anywhere.</span>
                        </div>
                    </li>
                </ul>
            </section>

            {/* 🔹 Why Choose Us? */}
            <section className="flex flex-col h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    🌟 Why Choice?
                </h2>
                <div className="flex flex-col gap-6 mt-6 flex-grow">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl border border-gray-100 dark:border-white/5 h-full">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            🛡️ Secure & Private
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                            Your pastes are stored with maximum privacy and modern encryption standards.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl border border-gray-100 dark:border-white/5 h-full">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            🚀 Fast & Simple
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                            No sign-up required—just paste your content and share it instantly with the world!
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Testimonials */}
            <section className="flex flex-col h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    💬 Testimonials
                </h2>
                <div className="mt-6 flex-grow">
                    <div className="h-full p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100/50 dark:border-blue-500/10 relative flex flex-col justify-between">
                        <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-lg">
                            "PastesApp is my favorite tool for quick and secure text storage. The dark mode is just amazing and the interface is incredibly fast!"
                        </p>
                        <div className="mt-8 flex items-center gap-4 border-t border-blue-100 dark:border-blue-800/50 pt-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold">
                                HS
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 dark:text-gray-100">Himanshu Shishodia</p>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                                    <p className="text-gray-500 dark:text-gray-500 text-xs">Verified User</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StaticSections;
