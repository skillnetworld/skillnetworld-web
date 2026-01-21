"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 px-6 container mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    We Are <span className="text-blue-500">SkillNetWorld</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-400 max-w-3xl mx-auto"
                >
                    Bridging the gap between traditional education and the skills demanded by the modern tech industry.
                </motion.p>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-slate-400 mb-4 leading-relaxed">
                            At SkillNetWorld, we believe that education should be accessible, practical, and futuristic. We are on a mission to empower 1 million learners worldwide with the tools they need to succeed in the digital age.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Through expert mentorship, hands-on projects, and a supportive community, we unlock human potential and drive innovation.
                        </p>
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

            {/* Stats */}
            <section className="py-20 border-y border-slate-800">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Founded", value: "2023" },
                        { label: "Learners", value: "50k+" },
                        { label: "Countries", value: "120+" },
                        { label: "Partners", value: "25+" },
                    ].map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default About;
