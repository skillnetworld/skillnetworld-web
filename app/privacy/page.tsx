"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-red-500/30">
            <Navbar />
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
                    >
                        Privacy <span className="text-red-600">Policy</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto p-8 bg-slate-50 rounded-2xl border border-slate-200 prose prose-slate">
                    <h3 className="text-xl font-bold mb-2">1. Introduction</h3>
                    <p className="text-slate-600 mb-6">We value your privacy and are committed to protecting your personal data.</p>

                    <h3 className="text-xl font-bold mb-2">2. Data Collection</h3>
                    <p className="text-slate-600 mb-6">We collect information to provide better services to all our users.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
