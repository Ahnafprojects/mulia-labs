"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/6281252961135"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </motion.a>
    );
}
