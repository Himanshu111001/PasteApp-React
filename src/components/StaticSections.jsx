const StaticSections = () => {
    return (
        <div className="flex flex-row flex-wrap place-content-evenly gap-10 mx-auto mt-10">
            {/* 🔹 How It Works */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    🔍 How It Works
                </h2>
                <ul className="list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-2">
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
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    🌟 Why Choose PastesApp?
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                            🛡️ Secure & Private
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your pastes are encrypted for maximum privacy.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                            🚀 Fast & Simple
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            No sign-up required—just paste and share!
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔹 Testimonials */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    💬 What Users Say
                </h2>
                <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-400 italic">
                        "PastesApp is my go-to tool for quick and secure text storage!"
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                        - Happy User ⭐⭐⭐⭐⭐
                    </p>
                </div>
            </section>
        </div>
    );
};

export default StaticSections;
