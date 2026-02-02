"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const projects = [
    {
        title: "Pendataan Keuangan",
        category: "Financial System",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive financial recording and reporting system for businesses.",
        details: "A robust platform designed to streamline financial operations. It features automated daily transaction recording, real-time profit and loss statements, and multi-user access controls to ensure data security and accuracy.",
        tags: ["Next.js", "TypeScript", "Chart.js"]
    },
    {
        title: "RetailPOS Pro",
        category: "POS System",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cloud-based Point of Sales system for multi-outlet retail chains.",
        details: "A comprehensive POS solution that manages inventory, sales, and employee shifts. Includes offline mode capabilities, thermal printing support, and detailed analytical reports for business owners to track performance.",
        tags: ["React", "FastAPI", "PostgreSQL"]
    },
    {
        title: "Glow & Glam",
        category: "Make Up Artist",
        image: "/makeup-artist.png",
        description: "Elegant portfolio and booking system for a professional make-up artist.",
        details: "A visually stunning portfolio showcasing beauty transformations. Features an integrated appointment booking system, client testimonials gallery, and a blog for beauty tips and trends.",
        tags: ["Next.js", "Framer Motion", "Calendly"]
    },
    {
        title: "EcoConstruct Profile",
        category: "Company Profile",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Modern corporate website for an eco-friendly construction firm.",
        details: "Rebranded EcoConstruct with a focus on sustainability. The site features smooth scrolling animations, extensive project galleries, and a sustainability impact calculator to demonstrate environmental commitment.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "LaunchPad SaaS",
        category: "Landing Page",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-conversion landing page for a new productivity tool.",
        details: "Designed to maximize user acquisition, this landing page achieved a 12% sign-up rate. Features include persuasive copywriting, interactive product demos, and strategic call-to-action placements.",
        tags: ["Conversion Design", "React", "Analytics"]
    },
    {
        title: "Luxe Fashion",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete overhaul of an online fashion retailer.",
        details: "A bespoke shopping experience designed to boost sales. Features include AI-driven size recommendations, shoppable video feeds, and an optimized checkout process that increased conversion rates by 40%.",
        tags: ["Shopify", "Tailwind CSS", "React"]
    }
];

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <section id="portfolio" className="section relative bg-black/40">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-neon-cyan font-bold tracking-wider uppercase text-sm mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold">
                            Digital Excellence <br /> <span className="text-gradient">Showcase.</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 flex flex-col h-full cursor-pointer"
                            onClick={() => setSelectedProject(index)}
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-neon-cyan transition-colors">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col h-[45%] justify-end">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-0.5 w-6 bg-neon-cyan"></div>
                                    <span className="text-neon-cyan text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                </div>
                                <h3 className="text-xl font-bold font-display mb-2 text-white group-hover:text-neon-cyan transition-colors duration-300">{project.title}</h3>
                                <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-medium text-white/60 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="group px-8" asChild>
                        <Link href="#">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Modal for Project Details */}
            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0f1c] border border-white/10 rounded-2xl shadow-2xl glass-card flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Image */}
                            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative">
                                <img
                                    src={projects[selectedProject].image}
                                    alt={projects[selectedProject].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0f1c]"></div>
                            </div>

                            {/* Modal Content */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-wider">
                                        {projects[selectedProject].category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold font-display mb-4 text-white">
                                    {projects[selectedProject].title}
                                </h3>

                                <p className="text-white/80 leading-relaxed mb-6">
                                    {projects[selectedProject].details}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[selectedProject].tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10 flex gap-4">
                                    <Button className="flex-1" variant="glow">
                                        Live Demo
                                    </Button>
                                    <Button className="flex-1" variant="outline" onClick={() => setSelectedProject(null)}>
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
