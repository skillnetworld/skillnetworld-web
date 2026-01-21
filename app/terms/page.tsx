"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
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
                        Terms of <span className="text-red-600">Service</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto p-8 bg-slate-50 rounded-2xl border border-slate-200 prose prose-slate">
                    <h3 className="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
                    <p className="text-slate-600 mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h3 className="text-xl font-bold mb-2">2. Use License</h3>
                    <p className="text-slate-600 mb-6">Permission is granted to temporarily download one copy of the materials on SkillNetWorld's website for personal, non-commercial transitory viewing only.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
