"use client";

import React from "react";
import Button from "../ui/Button";

import { FaUser, FaEnvelope, FaPen } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-slate-200 shadow-xl">
                    <div className="text-center mb-10">
                        <div className="inline-block p-3 rounded-2xl bg-red-500/10 text-red-500 mb-4">
                            <FaEnvelope size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Get In Touch</h2>
                        <p className="text-slate-600">Have questions about our courses or mentorship? We&apos;d love to hear from you.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 ml-1">First Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                        <FaUser />
                                    </div>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-4 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400" placeholder="John" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 ml-1">Last Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                        <FaUser />
                                    </div>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-4 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Doe" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <FaEnvelope />
                                </div>
                                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-4 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Message</label>
                            <div className="relative">
                                <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                                    <FaPen />
                                </div>
                                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-4 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400" placeholder="How can we help you?" />
                            </div>
                        </div>

                        <Button variant="gradient" size="lg" className="w-full py-4 text-lg shadow-lg shadow-red-500/20">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
