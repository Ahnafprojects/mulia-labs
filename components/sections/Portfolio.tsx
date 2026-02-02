"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const projects = [
    {
        title: "Financial Data Management",
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
        details: "A comprehensive POS solution that manages inventory, sales, and employee shifts. Includes offline mode capabilities, thermal printing support, and detailed analytical reports for business owners.",
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
        details: "Successfully rebranded EcoConstruct with a focus on sustainability. The site features smooth screw-scrolling animations, project galleries, and a sustainability impact calculator.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "LaunchPad SaaS",
        category: "Landing Page",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-conversion landing page for a new productivity tool.",
        details: "Designed to maximize conversions, this landing page achieved a 12% sign-up rate. Features include A/B tested copy, interactive product demos, and fast load times under 0.8s.",
        tags: ["Conversion Design", "React", "Analytics"]
    },
    {
        title: "Luxe Fashion",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complete overhaul of an online fashion retailer.",
        details: "A headless Shopify implementation providing a bespoke shopping experience. Features include AI-driven size recommendations, shoppable video feeds, and 40% faster checkout process.",
        tags: ["Shopify", "Tailwind CSS", "React"]
    }
];

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <section id="portfolio" className="section relative bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-black font-bold tracking-wider uppercase text-sm mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                            Digital Excellence <br /> <span className="text-gray-400">Showcase.</span>
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
                            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-pointer"
                            onClick={() => setSelectedProject(index)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-0.5 w-6 bg-black"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{project.category}</span>
                                </div>
                                <h3 className="text-xl font-bold font-display mb-2 text-gray-900 group-hover:text-gray-600 transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="group px-8 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-full" asChild>
                        <a href="#">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-gray-100 rounded-2xl shadow-2xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-black transition-colors bg-white/80 hover:bg-white rounded-full cursor-pointer shadow-sm"
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
                            </div>

                            {/* Modal Content */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col bg-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider">
                                        {projects[selectedProject].category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold font-display mb-4 text-gray-900">
                                    {projects[selectedProject].title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {projects[selectedProject].details}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {/* Tags removed as per user request */}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
                                    <Button className="flex-1 bg-black text-white hover:bg-gray-800" variant="default">
                                        Live Demo
                                    </Button>
                                    <Button className="flex-1 border-gray-200 text-gray-900 hover:bg-gray-50" variant="outline" onClick={() => setSelectedProject(null)}>
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
