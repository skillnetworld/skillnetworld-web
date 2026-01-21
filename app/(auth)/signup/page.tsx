"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Signup = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 backdrop-blur-md shadow-2xl"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-slate-400">Join thousands of learners today</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm password"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                </div>

                <Button variant="gradient" className="w-full mt-2" size="lg">Create Account</Button>
            </form>

            <div className="mt-6 mb-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-900 text-slate-500">Or sign up with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-700 transition-colors">
                    <FaGoogle /> Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-700 transition-colors">
                    <FaGithub /> GitHub
                </button>
            </div>

            <div className="mt-8 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Sign in
                </Link>
            </div>
        </motion.div>
    );
};

export default Signup;
