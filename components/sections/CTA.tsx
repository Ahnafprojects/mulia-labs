"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section id="contact" className="section relative overflow-hidden py-32">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-black to-neon-cyan/20 opacity-40"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Scale?</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                        Let's build something extraordinary together. Whether you need a new website, a complex web app, or a complete digital overhaul.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button variant="glow" size="lg" className="h-16 px-10 text-xl w-full sm:w-auto" asChild>
                            <Link href="mailto:hello@mulialabs.com">Start a Project</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-10 text-xl w-full sm:w-auto" asChild>
                            <Link href="#">Schedule a Call</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
