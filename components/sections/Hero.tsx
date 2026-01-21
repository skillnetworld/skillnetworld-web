"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";
import { FaStar, FaCheckCircle, FaInfinity, FaChartLine, FaBookOpen } from "react-icons/fa";
import ConsultationSuccessModal from "../ui/ConsultationSuccessModal";
import Link from "next/link";

const slides = [
    {
        id: 1,
        badge: "The Future of Learning is Here",
        title: <>Master the Skills of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Tomorrow, Today.</span></>,
        description: "Unlock your potential with expert-led courses, real-world projects, and a community that accelerates your growth.",
        cta1: "Explore Courses",
        cta2: "View Roadmap",
        link1: "/courses",
        link2: "/contact",
        bgAccent: "bg-red-500/20"
    },
    {
        id: 2,
        badge: "Project-Based Learning",
        title: <>Build Real-World <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Portfolios that Hire.</span></>,
        description: "Don't just watch tutorials. Build scalable applications, deploy to the cloud, and showcase your work to top recruiters.",
        cta1: "Start Building",
        cta2: "See Projects",
        link1: "/courses",
        link2: "/courses",
        bgAccent: "bg-orange-500/20"
    },
    {
        id: 3,
        badge: "Expert Mentorship",
        title: <>Learn from Industry <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">Veterans & Leaders.</span></>,
        description: "Get direct feedback, attend live workshops, and network with professionals from Google, Microsoft, and Amazon.",
        cta1: "Find a Mentor",
        cta2: "Meet Instructors",
        link1: "/contact",
        link2: "/courses",
        bgAccent: "bg-red-600/20"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleConsultationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccessModalOpen(true);
        // Reset form would ideally go here or via a ref
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-32 pb-10">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 z-0 transition-colors duration-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className={`absolute inset-0 opacity-20`}
                    />
                </AnimatePresence>
                <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Text Content / Slider */}
                    <div className="text-left relative z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Trust Badge Pill */}
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 backdrop-blur-md shadow-sm">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden`}>
                                                <Image src={`https://randomuser.me/api/portraits/thumb/men/${10 + i}.jpg`} alt="User" width={24} height={24} />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-slate-600 text-sm font-medium">Trusted by 50,000+ Students</span>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-tight font-serif">
                                    {slide.title}
                                </h1>

                                <p className="text-xl text-slate-700 mb-8 max-w-xl leading-relaxed font-medium">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    <Link href={slide.link1}>
                                        <Button variant="gradient" size="lg">{slide.cta1}</Button>
                                    </Link>
                                    <Link href={slide.link2}>
                                        <Button variant="outline" size="lg">{slide.cta2}</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Trust Signals Row */}
                        <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-8 mt-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                                    <FaStar />
                                </div>
                                <div>
                                    <div className="text-slate-900 font-bold">4.9/5 Rating</div>
                                    <div className="text-xs text-slate-500">Based on 10k reviews</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <div className="text-slate-900 font-bold">Industry Certified</div>
                                    <div className="text-xs text-slate-500">Recognized globally</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                    <FaInfinity />
                                </div>
                                <div>
                                    <div className="text-slate-900 font-bold">Lifetime Access</div>
                                    <div className="text-xs text-slate-500">Learn at your pace</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Lead Gen Form & Floating Elements */}
                    <div className="relative">
                        {/* Floating Elements (Decorative) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 z-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 z-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"
                        />

                        {/* Floating Stats Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-[-56px] -right-12 z-30 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                                    <FaChartLine />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Success Rate</div>
                                    <div className="text-xl font-bold text-slate-900">95%</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stats Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-[-24px] -left-12 z-30 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-red-500/20 p-2 rounded-full text-red-400">
                                    <FaBookOpen />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Available Courses</div>
                                    <div className="text-xl font-bold text-slate-900">15+</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden z-20 top-[-34px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 -z-10" />

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Book Free Consultation</h3>
                                <p className="text-slate-500 text-sm">Get a free career roadmap & course details</p>
                            </div>

                            <form className="space-y-4" onSubmit={handleConsultationSubmit}>
                                <div>
                                    <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:bg-white transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:bg-white transition-colors" />
                                    <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <select className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 focus:outline-none focus:border-red-500 focus:bg-white transition-colors">
                                        <option>Select Interested Course</option>
                                        <option>AI & Machine Learning</option>
                                        <option>Web Development</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea placeholder="Any specific questions?" rows={3} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"></textarea>
                                </div>

                                <Button variant="gradient" className="w-full py-4 text-lg shadow-lg shadow-red-500/25" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Get Free Details"}
                                </Button>

                                <p className="text-center text-xs text-slate-500 mt-4">
                                    By joining, you agree to our Terms & Privacy Policy.
                                </p>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>

            <ConsultationSuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </section >
    );
};

export default Hero;
