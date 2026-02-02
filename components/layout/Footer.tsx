import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 text-gray-900 py-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6 col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold font-display tracking-tight flex items-center gap-2">
                            Mulia<span className="text-gray-400">Labs</span>
                        </Link>
                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Crafting premium digital experiences that elevate brands.
                            We blend strategy, design, and technology to build future-ready solutions.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/mulialabs/?utm_source=ig_web_button_share_sheet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-black">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#about" className="text-gray-500 hover:text-black transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-500 hover:text-black transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-500 hover:text-black transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-display font-bold text-lg mb-6 text-black">Newsletter</h4>
                        <p className="text-gray-500 text-sm">Subscribe to get the latest notices.</p>
                        <form className="relative max-w-sm mt-4">
                            <input
                                type="email"
                                aria-label="Email for newsletter"
                                placeholder="Enter your email"
                                className="w-full bg-transparent border-b border-gray-300 py-3 pr-12 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <ArrowRight size={20} className="text-gray-900" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Mulia Labs. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-gray-400 text-sm">Jakarta, Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
