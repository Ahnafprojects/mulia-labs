export default function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container-custom max-w-3xl mx-auto space-y-8 px-6 md:px-0">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gray-900">Privacy Policy</h1>

                <div className="text-gray-600 space-y-8 leading-relaxed">
                    <p className="text-sm md:text-base border-b border-gray-100 pb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                        <p className="text-sm md:text-base">
                            We collect information you provide directly to us when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and company details.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
                        <p className="text-sm md:text-base">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base marker:text-black">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Send you technical notices, updates, and support messages.</li>
                            <li>Communicate with you about products, services, and events.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Data Security</h2>
                        <p className="text-sm md:text-base">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. Contact Us</h2>
                        <p className="text-sm md:text-base">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:muhammadahnafworks@gmail.com" className="text-black font-semibold hover:underline">muhammadahnafworks@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
