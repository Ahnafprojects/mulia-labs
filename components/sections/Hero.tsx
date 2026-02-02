"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            {/* Floating Orbs */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>

            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neon-cyan mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
                        Crafting Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Experiences</span>
                        <span className="block text-gradient">That Matter.</span>
                    </h1>

                    <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                        We are Mulia Labs. A premium digital agency building future-ready websites and applications that separate you from the noise.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="glow" size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="#contact">Start Your Project</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg group" asChild>
                            <Link href="#portfolio">
                                View Our Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-white/40">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/10 border-2 border-background flex items-center justify-center text-xs font-bold text-white">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full rounded-full" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm">Trusted by 50+ Innovators</p>
                    </div>
                </motion.div>

                {/* Visual/Illustration Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[600px] hidden lg:block"
                >
                    {/* Abstract Phone/Dashboard Mockup Composition */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 w-64 h-80 glass-card rounded-2xl z-20 p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Clean Code</h3>
                                    <p className="text-xs text-white/50">Modern Architecture</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                                <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                            </div>
                            <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-white/50">Performance</span>
                                    <span className="text-xs text-neon-cyan">98/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[98%] bg-neon-cyan"></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 30, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-0 w-72 h-64 glass-card rounded-2xl z-10 p-6 border border-white/10 flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                                    <Globe size={24} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider">
                                    Live
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mt-4">+140%</h3>
                                <p className="text-sm text-white/50">Traffic Growth</p>
                            </div>
                            <div className="relative h-16 w-full mt-4">
                                {/* Simple Chart Line */}
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path d="M0 40 L20 30 L40 35 L60 15 L80 20 L100 5" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0">
                                            <stop offset="0%" stopColor="#00f2ff" />
                                            <stop offset="100%" stopColor="#bd00ff" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
