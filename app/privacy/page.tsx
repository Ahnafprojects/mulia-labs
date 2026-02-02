export default function PrivacyPolicy() {
    return (
        <div className="pt-24 md:pt-32 pb-20 min-h-screen">
            <div className="container-custom max-w-3xl mx-auto space-y-8 px-6 md:px-0">
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-8 text-white">Privacy Policy</h1>

                <div className="text-white/80 space-y-8">
                    <p className="text-sm md:text-base leading-relaxed">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">1. Information We Collect</h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            We collect information you provide directly to us when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and company details.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">2. How We Use Your Information</h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base marker:text-neon-cyan">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Send you technical notices, updates, and support messages.</li>
                            <li>Communicate with you about products, services, and events.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">3. Data Security</h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">4. Contact Us</h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@mulialabs.com" className="text-neon-cyan hover:underline">privacy@mulialabs.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
