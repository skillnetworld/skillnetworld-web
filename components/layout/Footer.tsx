"use client";

import React from "react";
import Link from "next/link";
import { FaRocket, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Button from "../ui/Button";

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-white rounded-lg px-2 py-1">
                                <img src="/logo.png" alt="SkillNetWorld" className="h-8 w-auto object-contain" />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering the next generation of learners with cutting-edge skills and a community of experts.
                        </p>
                        <div className="flex space-x-4">
                            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Platform</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/courses" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Browse Courses</Link>
                            </li>
                            <li>
                                <Link href="/mentorship" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Mentorship</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/business" className="text-slate-600 hover:text-red-600 text-sm transition-colors">For Business</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/community" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Community</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/documentation" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Documentation</Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-slate-600 hover:text-red-600 text-sm transition-colors">Support Center</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-6">Stay Updated</h3>
                        <p className="text-slate-600 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 text-sm focus:outline-none focus:border-red-500 transition-colors"
                            />
                            <Button variant="primary" size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm">© 2024 SkillNetWorld. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-slate-500 hover:text-red-500 text-sm">Privacy Policy</Link>
                        <Link href="/terms" className="text-slate-500 hover:text-red-500 text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
