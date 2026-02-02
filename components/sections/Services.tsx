"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, ShoppingBag, ArrowRight, X, Monitor, Store } from "lucide-react";
import { useState } from "react";

const services = [
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "User-centered design that delights and converts. We craft intuitive interfaces with stunning visuals.",
        details: "Our design process starts with deep user research. We create wireframes, high-fidelity prototypes, and design systems that ensure consistency and accessibility across your entire digital product."
    },
    {
        icon: Monitor,
        title: "Company Profile",
        description: "Professional websites that establish trust and showcase your brand identity to the world.",
        details: "We build impressive company profile websites that communicate your values and services effectively. Features include history timelines, team showcases, and downloadable resources."
    },
    {
        icon: ShoppingBag,
        title: "Landing Page",
        description: "High-conversion landing pages designed to turn visitors into paying customers or leads.",
        details: "Optimized for speed and conversion. We use persuasive copywriting, A/B testing friendly structures, and clear CTAs to maximize your marketing campaign results."
    },
    {
        icon: Store,
        title: "Point of Sales (POS)",
        description: "Custom web-based POS systems to manage inventory, sales, and reporting efficiently.",
        details: "Streamline your retail or F&B business with our custom POS solutions. Real-time inventory tracking, sales analytics, and multi-outlet support accessible from any device."
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        description: "Scalable online stores that drive sales. Custom solutions or Shopify/WooCommerce integrations.",
        details: "From product management to secure checkout flows. We build robust e-commerce platforms with inventory management, payment gateway integration, and customer dashboards."
    },
    {
        icon: Code,
        title: "Custom Web Apps",
        description: "Tailored web applications to automate business processes and solve complex problems.",
        details: "We develop complex web applications using Next.js and Cloud architecture. Whether it's a CRM, ERP, or a SaaS platform, we build scalable and secure solutions."
    }
];

export function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section id="services" className="section relative bg-gray-50/50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-black font-bold tracking-wider uppercase text-sm">Our Services</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                        Solutions for Every <span className="text-gray-400">Stage.</span>
                    </h3>
                    <p className="text-gray-500">
                        From simple landing pages to complex business systems, we build web solutions that drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                    <service.icon className="w-7 h-7 text-black group-hover:text-gray-700 transition-colors" />
                                </div>

                                <h4 className="text-xl font-bold font-display mb-3 text-gray-900">{service.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                                <button
                                    onClick={() => setSelectedService(index)}
                                    className="mt-auto flex items-center gap-2 text-black text-sm font-bold opacity-70 group-hover:opacity-100 hover:gap-3 transition-all duration-300 cursor-pointer"
                                >
                                    <span>Learn more</span>
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for Service Details */}
                <AnimatePresence>
                    {selectedService !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-lg bg-white border border-gray-100 rounded-2xl p-8 shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 rounded-full cursor-pointer"
                                >
                                    <X size={20} />
                                </button>

                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                                    {(() => {
                                        const Icon = services[selectedService].icon;
                                        return <Icon className="w-8 h-8 text-black" />;
                                    })()}
                                </div>

                                <h3 className="text-2xl font-bold font-display mb-4 text-gray-900">
                                    {services[selectedService].title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {services[selectedService].details}
                                </p>

                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all cursor-pointer shadow-lg shadow-gray-200"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
