"use client";

import React, { use, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/lib/data";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaStar, FaClock, FaUser, FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnrollmentModal from "@/components/courses/EnrollmentModal";

export default function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const course = courses.find((c) => c.id === id);

    if (!course) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen text-slate-900">
            <Navbar />

            {/* Header / Hero for Course */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex gap-2 mb-4">
                            {course.tags.map(tag => (
                                <span key={tag} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-600/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-slate-900">{course.title}</h1>
                        <p className="text-xl text-slate-600 mb-6">{course.description}</p>

                        <div className="flex items-center gap-6 mb-8 text-sm">
                            <span className="flex items-center gap-2 text-yellow-500">
                                <FaStar size={18} /> <span className="text-slate-900 font-bold">{course.rating}</span>
                            </span>
                            <span className="flex items-center gap-2 text-slate-600">
                                <FaUser /> {course.students} Learners
                            </span>
                            <span className="flex items-center gap-2 text-slate-600">
                                <FaClock /> {course.duration}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="primary" size="lg" onClick={() => setIsEnrollModalOpen(true)}>
                                Enroll Now - {course.price}
                            </Button>
                            <span className="text-slate-500 text-sm">30-Day Money-Back Guarantee</span>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                <FaPlayCircle size={40} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20 container mx-auto px-6 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">What You'll Learn</h2>
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <ul className="grid md:grid-cols-2 gap-4">
                            {course.curriculum?.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Instructor</h2>
                        <div className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-3xl">
                                👨‍🏫
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{course.instructor}</h3>
                                <p className="text-slate-500">Expert Instructor & Mentor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
                        <h3 className="text-xl font-bold mb-4 text-slate-900">Course Features</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex justify-between text-slate-500 border-b border-slate-100 pb-2">
                                <span>Duration</span>
                                <span className="text-slate-900 font-medium">{course.duration}</span>
                            </li>
                            <li className="flex justify-between text-slate-500 border-b border-slate-100 pb-2">
                                <span>Lectures</span>
                                <span className="text-slate-900 font-medium">120+</span>
                            </li>
                            <li className="flex justify-between text-slate-500 border-b border-slate-100 pb-2">
                                <span>Skill Level</span>
                                <span className="text-slate-900 font-medium">Beginner to Pro</span>
                            </li>
                            <li className="flex justify-between text-slate-500 border-b border-slate-100 pb-2">
                                <span>Certificate</span>
                                <span className="text-slate-900 font-medium">Yes</span>
                            </li>
                        </ul>
                        <Button variant="primary" className="w-full mb-4" onClick={() => setIsEnrollModalOpen(true)}>
                            Enroll Now
                        </Button>
                        <Button variant="outline" className="w-full">Download Syllabus</Button>
                    </div>
                </div>
            </section>

            <EnrollmentModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseTitle={course.title}
                coursePrice={course.price}
            />

            <Footer />
        </main>
    );
}
