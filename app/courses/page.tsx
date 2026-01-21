"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FaSearch, FaStar, FaClock, FaUser } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/Button";

import Link from "next/link";
import { courses as allCourses } from "@/lib/data";

// Note: In Next.js App Router, metadata must be in a Server Component.
// Since these are currently Client Components, they use the root metadata.
// To override, we would need to separate the client logic from the server page shell.
// For now, these client components will inherit the robust root metadata.

const CourseCard = ({ course }: { course: typeof allCourses[0] }) => {
    return (
        <Link href={`/courses/${course.id}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md group h-full"
            >
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        {course.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-xs text-slate-900 border border-slate-200 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1 line-clamp-1">{course.title}</h3>
                            <p className="text-sm text-slate-600 flex items-center gap-1">
                                <FaUser size={12} /> {course.instructor}
                            </p>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                            <FaStar /> {course.rating}
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
                        <span className="flex items-center gap-1"><FaClock size={12} /> {course.duration}</span>
                        <span>{course.students} Students</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-600">{course.price}</span>
                        <Button variant="outline" size="sm">Enroll Now</Button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const AllCourses = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "AI", "Development", "Data", "Security", "Marketing", "Cloud", "Mobile", "DevOps", "Blockchain", "Certification", "Diploma", "Degree"];

    const filteredCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory || (selectedCategory === "Development" && course.tags.includes("Web Dev")); // Simple mapping for demo

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-red-500/30">
            <Navbar />

            <section className="pt-32 pb-10 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Explore All Courses</h1>
                <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                    Find the perfect course to upgrade your skills. Filter by category or search for specific topics.
                </p>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10 max-w-4xl mx-auto">
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-100 border border-slate-300 rounded-full pl-10 pr-6 py-3 text-slate-900 focus:outline-none focus:border-red-500 transition-colors placeholder:text-slate-500"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                ? "bg-red-600 text-white shadow-md shadow-red-500/20"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="py-20 text-center text-slate-500">
                        No courses found matching your criteria.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
};

export default AllCourses;
