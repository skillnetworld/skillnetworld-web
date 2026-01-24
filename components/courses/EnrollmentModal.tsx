"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    coursePrice: string;
}

export default function EnrollmentModal({ isOpen, onClose, courseTitle, coursePrice }: EnrollmentModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "" });
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                    >
                        <FaTimes size={20} />
                    </button>

                    {isSuccess ? (
                        <div className="p-8 text-center py-16">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <FaCheckCircle className="text-green-500 text-4xl" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enrollment Successful!</h3>
                            <p className="text-slate-600">
                                Thank you for enrolling in <strong>{courseTitle}</strong>. We've sent a confirmation email to {formData.email}.
                            </p>
                        </div>
                    ) : (
                        <div className="p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">Enroll in Course</h2>
                                <p className="text-slate-500 text-sm">Fill in your details to secure your spot.</p>
                            </div>

                            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
                                <p className="text-sm text-slate-500 mb-1">Selected Course</p>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-slate-900 line-clamp-1 flex-1 pr-4">{courseTitle}</h3>
                                    <span className="font-bold text-red-600 whitespace-nowrap">{coursePrice}</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                                        placeholder="+91 97933 36896"
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full mt-4"
                                    size="lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Processing..." : "Confirm Enrollment"}
                                </Button>
                            </form>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
