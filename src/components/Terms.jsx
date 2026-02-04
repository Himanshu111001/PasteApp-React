import React from 'react';

const Terms = () => {
    return (
        <div className="w-full max-w-[800px] mx-auto p-8 mt-10 mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Terms of Service</h1>
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing and using PastesApp at https://pastes.in, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Service</h2>
            <p className="mb-4">
                You agree not to use the service for any unlawful purpose or to transmit any material that is illegal, offensive, or violates third-party rights. We reserve the right to remove any content at our discretion.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. User Accounts</h2>
            <p className="mb-4">
                You are responsible for maintaining the security of your account credentials. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
            <p className="mb-4">
                The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of those changes.
            </p>
        </div>
    );
};

export default Terms;
