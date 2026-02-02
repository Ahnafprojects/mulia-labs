import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050810] border-t border-white/5 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold font-display">
                            Mulia<span className="text-primary">Labs</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            We craft premium digital experiences that elevate brands and drive results. Built for the modern web.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {["Company Profile", "Landing Page", "POS System", "E-Commerce", "Custom Web Apps"].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#about" className="text-white/60 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-white/60 hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-white/60 hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
                        <p className="text-white/60 mb-4">Subscribe to our newsletter for the latest tech trends.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-primary/50 text-white placeholder:text-white/30 transition-all font-sans"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-md text-white hover:bg-primary/90 transition-colors cursor-pointer">
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Mulia Labs. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
