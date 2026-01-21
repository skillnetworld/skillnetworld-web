"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingContact = () => {
    return (
        <motion.a
            href="https://wa.me/1234567890" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors cursor-pointer"
        >
            <FaWhatsapp size={28} />
            <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                Chat with us
            </span>
        </motion.a>
    );
};

export default FloatingContact;
