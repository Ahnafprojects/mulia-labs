"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function Process() {
    const steps = [
        {
            icon: Search,
            title: "Discovery",
            description: "We dive deep into your business goals, target audience, and market landscape to build a solid foundation."
        },
        {
            icon: PenTool,
            title: "Design",
            description: "Our creative team crafts stunning, user-centric interfaces that align with your brand identity."
        },
        {
            icon: Code2,
            title: "Development",
            description: "We bring designs to life using cutting-edge technologies like Next.js, ensuring speed and scalability."
        },
        {
            icon: Rocket,
            title: "Launch & Grow",
            description: "Rigorous testing followed by a smooth launch. We stick around to help you scale and optimize."
        }
    ];

    return (
        <section id="process" className="section relative bg-white border-y border-gray-100">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h2 className="text-black font-bold tracking-wider uppercase text-sm">How We Work</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                        From Concept to <span className="text-gray-400">Reality.</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden lg:block -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group text-center bg-white"
                            >
                                <div className="relative inline-block mb-8">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-white border border-gray-100 flex items-center justify-center relative z-10 shadow-lg shadow-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="text-black w-8 h-8" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center border-4 border-white z-20">
                                        {index + 1}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold font-display mb-3 text-gray-900">{step.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
