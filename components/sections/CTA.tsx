"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
    return (
        <section id="contact" className="section relative overflow-hidden bg-gray-50 text-gray-900 border-t border-gray-200">
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900">
                        Ready to build the <br />
                        <span className="text-gray-400">extraordinary?</span>
                    </h2>

                    <p className="text-xl text-gray-500 leading-relaxed">
                        Let's collaborate to bring your vision to life. We are currently accepting new projects for Q2.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg bg-black text-white hover:bg-gray-800 rounded-full shadow-lg shadow-gray-200/50" asChild>
                            <Link href="mailto:muhammadahnafworks@gmail.com">
                                Start a Conversation
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-gray-200 text-gray-900 hover:bg-white hover:border-gray-300 rounded-full group bg-white" asChild>
                            <Link href="#portfolio">
                                See Our Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Minimalist Grid Overlay - Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-[0.03] pointer-events-none"></div>
        </section>
    );
}
