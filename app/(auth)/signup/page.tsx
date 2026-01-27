"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ConsultationSuccessModal from "@/components/ui/ConsultationSuccessModal";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save token to localStorage
                localStorage.setItem('token', data.token);
                setIsModalOpen(true); // Show success/under dev modal for now
                // Alternatively redirect: router.push('/dashboard');
            } else {
                setError(data.msg || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setError("Server error. Please try again.");
        }
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop"
                    alt="Signup Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
                    <p className="text-lg opacity-90">Start your journey with thousands of learners and industry experts.</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
                    <p className="text-slate-600">Sign up to get started with SkillNetWorld</p>
                    {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-slate-700 text-sm font-medium mb-1" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-700 text-sm font-medium mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-700 text-sm font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Create a password"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-700 text-sm font-medium mb-1" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            placeholder="Confirm password"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-slate-400"
                        />
                    </div>

                    <Button variant="gradient" className="w-full mt-2" size="lg">Create Account</Button>
                </form>

                <div className="mt-6 mb-6 relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">Or sign up with</span>
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
                    Already have an account?{" "}
                    <Link href="/login" className="text-red-600 hover:text-red-500 font-medium transition-colors">
                        Sign in
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

export default Signup;
