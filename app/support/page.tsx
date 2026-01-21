"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function SupportPage() {
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
                        Support <span className="text-red-600">Center</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Need help? We're here for you.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-slate-50 rounded-2xl border border-slate-200">
                    <h2 className="text-2xl font-bold mb-4">How can we help?</h2>
                    <p className="text-slate-600">Contact us at support@skillnetworld.com for immediate assistance.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
