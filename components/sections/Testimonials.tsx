"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        content: "Mulia Labs transformed our outdated website into a lead-generating machine. professional, responsive, and incredibly talented.",
        author: "Sarah Johnson",
        role: "CMO, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        content: "The level of detail they put into the animations and user experience is unmatched. Our customers love the new app.",
        author: "David Chen",
        role: "Founder, StartUp Inc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        content: "Working with the Mulia Labs team was a breeze. They understood our vision immediately and delivered beyond expectations.",
        author: "Emily Davis",
        role: "Director, Creative Studio",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
];

export function Testimonials() {
    return (
        <section className="section bg-black/40 border-y border-white/5">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-neon-cyan font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">
                        Trusted by <span className="text-gradient">Leaders.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/10 w-10 h-10" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/20"
                                />
                                <div>
                                    <h4 className="font-bold font-display">{testimonial.author}</h4>
                                    <p className="text-xs text-neon-cyan">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-white/70 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
