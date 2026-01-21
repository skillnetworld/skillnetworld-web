"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                <p className="text-slate-600">Sign in to continue your learning journey</p>
            </div>

            <form className="space-y-6">
                <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                    />
                </div>
                <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-slate-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-slate-600 hover:text-slate-800 cursor-pointer">
                        <input type="checkbox" className="mr-2 rounded bg-white border-slate-300 text-red-600 focus:ring-0" />
                        Remember me
                    </label>
                    <Link href="#" className="text-red-600 hover:text-red-500 transition-colors">
                        Forgot Password?
                    </Link>
                </div>

                <Button variant="gradient" className="w-full" size="lg">Sign In</Button>
            </form>

            <div className="mt-8 mb-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 py-2.5 rounded-lg border border-slate-300 transition-colors shadow-sm">
                    <FaGoogle className="text-red-500" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 py-2.5 rounded-lg border border-slate-300 transition-colors shadow-sm">
                    <FaGithub /> GitHub
                </button>
            </div>

            <div className="mt-8 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-red-600 hover:text-red-500 font-medium transition-colors">
                    Sign up
                </Link>
            </div>
        </motion.div>
    );
};

export default Login;
