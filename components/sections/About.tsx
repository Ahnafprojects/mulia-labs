"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Team Members", value: "12" },
];

export function About() {
    return (
        <section id="about" className="section relative bg-black/20">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl opacity-20 blur-lg"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl border border-white/10 max-w-xs hidden md:block">
                                <p className="text-lg font-display font-bold leading-tight">
                                    "Design is not just what it looks like and feels like. Design is how it works."
                                </p>
                                <p className="text-sm text-white/50 mt-2">— Steve Jobs</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-neon-cyan font-bold tracking-wider uppercase text-sm">About Mulia Labs</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold">
                            We Build Digital <br /> Products That <span className="text-gradient">Scale.</span>
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Mulia Labs is a full-service digital agency passionate about creating stunning, high-performance websites and applications. We combine creative design with robust engineering to deliver solutions that not only look amazing but also drive real business growth.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            Founded on the principles of innovation and excellence, we partner with startups and established brands to transform their digital presence.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {["Modern Tech Stack", "User-Centric Design", "Scalable Architecture", "24/7 Support"].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-neon-cyan w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center md:text-left">
                                    <h4 className="text-2xl md:text-3xl font-bold font-display text-white">{stat.value}</h4>
                                    <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
