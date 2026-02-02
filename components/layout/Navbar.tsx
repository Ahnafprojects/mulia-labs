"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Process", href: "#process" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass" : "py-6 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-display tracking-tight z-50 relative group text-foreground">
                    Mulia<span className="text-secondary">Labs</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="outline" size="sm" asChild className="ml-4 border-gray-200 hover:bg-gray-50 text-black">
                        <a href="https://wa.me/6281252961135" target="_blank" rel="noopener noreferrer">Let's Talk</a>
                    </Button>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden z-50 flex flex-col items-center justify-center gap-1.5 focus:outline-none w-10 h-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#000" }}
                        className="w-6 h-0.5 bg-black block transition-all"
                    ></motion.span>
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#000" }}
                        className="w-6 h-0.5 bg-black block transition-all"
                    ></motion.span>
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: "#000" }}
                        className="w-6 h-0.5 bg-black block transition-all"
                    ></motion.span>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 bg-white z-40 flex flex-col md:hidden pt-24 px-6"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-display font-medium text-black hover:text-gray-500 transition-colors border-b border-gray-100 pb-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button variant="default" size="lg" className="mt-4 w-full bg-black text-white hover:bg-gray-800" onClick={() => setIsMobileMenuOpen(false)} asChild>
                                    <Link href="#contact">
                                        Start Project <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
