"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { courses } from "@/lib/data";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Dashboard = () => {
    // Mock user data
    const enrolledCourses = [
        { ...courses[0], progress: 75, nextLesson: "Neural Networks Backpropagation" },
        { ...courses[2], progress: 30, nextLesson: "MongoDB Schema Design" },
    ];

    return (
        <main className="bg-slate-950 min-h-screen text-white selection:bg-blue-500/30">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">My Learning Dashboard</h1>
                        <p className="text-slate-400">Welcome back, Alex! You've made great progress this week.</p>
                    </div>
                    <Button variant="primary">Browse More Courses</Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                        <h3 className="text-slate-400 text-sm font-medium mb-1">Courses in Progress</h3>
                        <p className="text-3xl font-bold">2</p>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                        <h3 className="text-slate-400 text-sm font-medium mb-1">Completed Lessons</h3>
                        <p className="text-3xl font-bold">45</p>
                    </div>
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                        <h3 className="text-slate-400 text-sm font-medium mb-1">Certificates Earned</h3>
                        <p className="text-3xl font-bold">1</p>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {enrolledCourses.map(course => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="relative w-full md:w-48 h-40 md:h-auto">
                                <Image src={course.image} alt={course.title} fill className="object-cover" />
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                                <p className="text-sm text-slate-400 mb-4">Next: {course.nextLesson}</p>

                                <div className="mb-4">
                                    <div className="flex justify-between text-xs mb-1 text-slate-400">
                                        <span>Progress</span>
                                        <span>{course.progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <Link href={`/courses/${course.id}`}>
                                    <Button variant="outline" size="sm" className="w-full">Continue Lesson</Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Dashboard;
