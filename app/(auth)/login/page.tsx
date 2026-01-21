"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ConsultationSuccessModal from "@/components/ui/ConsultationSuccessModal";

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
            {/* Left Side - Image */}
            <div className="relative hidden w-1/2 lg:block">
                <Image
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920&auto=format&fit=crop"
                    alt="Login Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-lg opacity-90">Unlock your potential with expert-led courses and a community that accelerates your growth.</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h1>
                    <p className="text-slate-600">Enter your details to access your account</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
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
            </div>

            <ConsultationSuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Under Development"
                message="This feature is currently under development. Please check back later!"
            />
        </motion.div>
    );
};

export default Login;
