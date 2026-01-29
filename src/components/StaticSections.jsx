const StaticSections = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12 mb-10">
            {/* 🔹 How It Works */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    🔍 How It Works
                </h2>
                <ul className="list-inside text-gray-600 dark:text-gray-400 mt-4 space-y-3">
                    <li className="flex gap-2">
                        <span>📝</span> <strong>Write</strong> or paste your text.
                    </li>
                    <li className="flex gap-2">
                        <span>🔗</span> <strong>Save</strong> and get a shareable link.
                    </li>
                    <li className="flex gap-2">
                        <span>👀</span> <strong>View & Edit</strong> your pastes anytime.
                    </li>
                </ul>
            </section>

            {/* 🔹 Why Choose Us? */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    🌟 Why Choice?
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            🛡️ Secure & Private
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Your pastes are encrypted and stored with maximum privacy.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            🚀 Fast & Simple
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            No sign-up required—just paste your content and share it instantly!
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Testimonials */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    💬 Testimonials
                </h2>
                <div className="mt-6 p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100/50 dark:border-blue-500/10 relative">
                    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                        "PastesApp is my favorite tool for quick and secure text storage. The dark mode is just amazing!"
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                        <div>
                            <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">John Doe</p>
                            <p className="text-gray-500 dark:text-gray-500 text-xs">Verified User ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StaticSections;
