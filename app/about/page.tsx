"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-red-500/30">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 px-6 container mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                    We Are <span className="text-red-600">SkillNetWorld</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 max-w-3xl mx-auto"
                >
                    Bridging the gap between ambition and achievement in the digital age.
                </motion.p>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            SkillNetWorld was born with a simple yet powerful vision – to bridge the gap between ambition and achievement in the digital age. Situated at the crossroads of innovation and opportunity, SkillNetWorld empowers learners with industry-ready Digital Marketing and AI courses & diploma programs designed for the future.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            At SkillNetWorld, we believe skills create destiny. With expert mentors, hands-on training, and future-focused curriculum, we transform curious minds into confident professionals. Our advanced learning ecosystem blends technology, creativity, and real-world exposure to ensure uncompromising quality education.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Beyond learning, we stand as a trusted guide. SkillNetWorld provides personalized counseling and career guidance for UGC, DEC, and AICTE approved university courses, helping students make informed decisions and choose the right academic path with clarity and confidence.
                        </p>
                        <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
                            <p className="text-red-700 font-medium italic">
                                "SkillNetWorld is not just an institute – it's a launchpad where skills meet success, ideas turn into impact, and careers take shape."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-80 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team working together"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Affiliations */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Recognitions & Affiliations</h2>
                    <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-2">MDVTI New Delhi</h3>
                            <p className="text-slate-500 text-sm">Affiliated to MDVTI New Delhi</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-2">Govt. Certified</h3>
                            <p className="text-slate-500 text-sm">Reg. by Govt. of NCT Delhi (India), Ministry of HRD Govt. of India</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-2">Global Accreditation</h3>
                            <p className="text-slate-500 text-sm">IAO Accredited (Houston, USA) & ISO 9001:2008 Certified</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default About;
