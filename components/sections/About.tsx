"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="section bg-gray-50/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 12}`} alt="Avatar" className="w-full h-full rounded-full" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Expert Team</p>
                                        <p className="text-xs text-gray-500">Dedicated to your success</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent opacity-50 -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <h2 className="text-black font-bold tracking-wider uppercase text-sm mb-4">About Us</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                                We Build Digital <br />
                                <span className="text-gray-400">Masterpieces.</span>
                            </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Mulia Labs is a digital innovation agency based in Jakarta. We believe that great design is not just about how it looks, but how it works. Our mission is to help forward-thinking companies build products that matter.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Strategic Design Thinking",
                                "Full-Stack Development Excellence",
                                "Performance & CEO Optimization",
                                "Ongoing Support & Growth"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-black w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
