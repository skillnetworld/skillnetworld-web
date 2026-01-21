"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import Button from "../ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 top-0`}>

            <nav className={`w-full transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-lg border-b border-black/5" : "bg-transparent py-6 border-b border-black/5"
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="relative group">
                        <div className="bg-transparent rounded-lg px-2 py-1">
                            <img src="/logo.png" alt="SkillNetWorld" className="h-12 w-auto object-contain" />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
                            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">
                                Log in
                            </Link>
                            <Link href="/signup">
                                <Button variant="primary" size="sm" className="shadow-lg shadow-red-500/20">Get Started</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-600 hover:text-red-600 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 hover:text-red-600 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center text-slate-600 hover:text-red-600 py-2">
                                    Log in
                                </Link>
                                <Link href="/signup" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
