"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Button from "./Button";

interface ConsultationSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
}

export default function ConsultationSuccessModal({
    isOpen,
    onClose,
    title = "Request Received!",
    message = "Thanks for reaching out! Our team has received your consultation request and will get back to you within 24 hours."
}: ConsultationSuccessModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-sm text-center p-8 relative overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <FaCheckCircle className="text-green-500 text-4xl" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 mb-6">
                        {message}
                    </p>

                    <Button variant="primary" className="w-full" onClick={onClose}>
                        Got it, thanks!
                    </Button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
