"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, ShoppingBag, Database, ArrowRight, X, Monitor, Store } from "lucide-react";
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
        <section id="services" className="section relative">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-neon-purple font-bold tracking-wider uppercase text-sm">Our Services</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">
                        Solutions for Every <span className="text-gradient">Stage.</span>
                    </h3>
                    <p className="text-white/60">
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
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors duration-300 flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-cyan/30">
                                    <service.icon className="w-7 h-7 text-white group-hover:text-neon-cyan transition-colors" />
                                </div>

                                <h4 className="text-xl font-bold font-display mb-3 group-hover:text-neon-cyan transition-colors">{service.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                                <button
                                    onClick={() => setSelectedService(index)}
                                    className="mt-auto flex items-center gap-2 text-neon-cyan text-sm font-medium opacity-80 group-hover:opacity-100 hover:gap-3 transition-all duration-300 cursor-pointer"
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
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-lg bg-[#0a0f1c] border border-white/10 rounded-2xl p-8 shadow-2xl glass-card"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                                >
                                    <X size={20} />
                                </button>

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-6 border border-white/10">
                                    {(() => {
                                        const Icon = services[selectedService].icon;
                                        return <Icon className="w-8 h-8 text-neon-cyan" />;
                                    })()}
                                </div>

                                <h3 className="text-2xl font-bold font-display mb-4 text-white">
                                    {services[selectedService].title}
                                </h3>

                                <p className="text-white/70 leading-relaxed mb-6">
                                    {services[selectedService].details}
                                </p>

                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-white/10 text-white font-medium hover:from-neon-cyan/30 hover:to-neon-purple/30 transition-all cursor-pointer"
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
