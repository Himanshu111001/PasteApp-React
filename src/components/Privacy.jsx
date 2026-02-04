import React from 'react';

const Privacy = () => {
    return (
        <div className="w-full max-w-[800px] mx-auto p-8 mt-10 mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Privacy Policy</h1>
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p className="mb-4">
                Welcome to PastesApp ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://pastes.in.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Log Data:</strong> We may collect info sent by your browser (IP address, browser type, pages visited).</li>
                <li><strong>Authentication Data:</strong> If you sign in with Google, we store your email and profile name to manage your account.</li>
                <li><strong>Content:</strong> The text snippets ("pastes") you create are stored securely in our database.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
            <p className="mb-4">
                We use your information to provide and improve the Service, manage your account, and ensure security. We do not sell your personal data to third parties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
            <p className="mb-4">
                We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
            <p>
                If you have questions about this Privacy Policy, please contact us.
            </p>
        </div>
    );
};

export default Privacy;
