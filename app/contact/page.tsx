"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationSuccessModal from "@/components/ui/ConsultationSuccessModal";

export default function ContactPage() {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccessModalOpen(true);
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-red-500/30">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
                    >
                        Get in <span className="text-red-600">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Have questions about our courses or need career guidance? We're here to help you start your journey.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-full text-red-600 mt-1">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                                        <p className="text-slate-600">
                                            123 Tech Park, Sector 62,<br />
                                            Noida, Uttar Pradesh, India - 201301
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-full text-red-600 mt-1">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600">hello@skillnetworld.com</p>
                                        <p className="text-slate-600">support@skillnetworld.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-full text-red-600 mt-1">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600">+91 98765 43210</p>
                                        <p className="text-slate-600">+91 11 2345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                        >
                            <h3 className="text-xl font-bold mb-4 text-slate-900">Follow Us</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <FaTwitter size={20} />, href: "#" },
                                    { icon: <FaLinkedin size={20} />, href: "#" },
                                    { icon: <FaInstagram size={20} />, href: "#" },
                                    { icon: <FaGithub size={20} />, href: "#" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-slate-900">
                                    <option>General Inquiry</option>
                                    <option>Course Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                                ></textarea>
                            </div>
                            <Button variant="primary" className="w-full py-3" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />

            <ConsultationSuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                title="Message Sent!"
                message="Thank you for contacting us. We have received your message and will respond shortly."
            />
        </main>
    );
}
