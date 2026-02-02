"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

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

export function Process() {
    return (
        <section id="process" className="section relative">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-neon-purple font-bold tracking-wider uppercase text-sm mb-4">How We Work</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">
                        From Concept to <span className="text-gradient">Reality.</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group text-center"
                            >
                                <div className="relative inline-block mb-8">
                                    <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                    <div className="w-20 h-20 mx-auto rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-neon-cyan transition-colors duration-300">
                                        <step.icon className="text-white/70 w-8 h-8 group-hover:text-neon-cyan transition-colors duration-300" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-neon-purple text-[10px] font-bold flex items-center justify-center border-4 border-[#0a0f1c] z-20">
                                        {index + 1}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold font-display mb-3 group-hover:text-neon-purple transition-colors duration-300">{step.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed px-4">
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
