"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUser } from "react-icons/fa";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { courses } from "@/lib/data";

const CourseCard = ({ course }: { course: typeof courses[0] }) => {
    return (
        <Link href={`/courses/${course.id}`} className="block h-full">
            <motion.div
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
                            <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-xs text-slate-800 border border-slate-200 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1 line-clamp-1">{course.title}</h3>
                            <p className="text-sm text-slate-500 flex items-center gap-1">
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

const CoursesGrid = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(3);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
        };
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + itemsPerPage >= courses.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, courses.length - itemsPerPage) : prev - 1
        );
    };

    return (
        <section id="courses" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Popular Courses</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our highest-rated courses designed to take your skills to the next level.
                    </p>
                </div>

                <div className="relative">
                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white text-slate-700 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-md border border-slate-200"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white text-slate-700 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-md border border-slate-200"
                    >
                        &rarr;
                    </button>

                    {/* Slider Window */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="h-full">
                                        <CourseCard course={course} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/courses">
                        <Button variant="secondary" size="lg">View All Courses</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesGrid;
