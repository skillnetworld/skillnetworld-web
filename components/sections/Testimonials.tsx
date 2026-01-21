"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        content: "This platform completely changed my career path. The courses are practical and up-to-date.",
        name: "Alex Johnson",
        role: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        content: "The mentorship I received was invaluable. Highly recommend to anyone serious about tech.",
        name: "Sarah Williams",
        role: "Product Designer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        content: "Best investment I've made for my professional growth. The community is super supportive.",
        name: "David Lee",
        role: "Data Analyst",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
        id: 4,
        content: "I landed my dream job 3 months after finishing the Bootcamp. Thank you SkillNetWorld!",
        name: "Emily Chen",
        role: "Software Engineer",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[350px] bg-white p-8 rounded-2xl flex-shrink-0 mx-4 border border-slate-100 shadow-md hover:shadow-xl transition-all group">
        <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-red-400 transition-colors">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </div>
            <div>
                <h4 className="text-slate-900 font-bold group-hover:text-red-600 transition-colors">{item.name}</h4>
                <p className="text-slate-500 text-sm">{item.role}</p>
            </div>
        </div>
        <div className="mb-4 text-red-500/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
        </div>
        <p className="text-slate-600 italic leading-relaxed text-sm group-hover:text-slate-900 transition-colors">&quot;{item.content}&quot;</p>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-24 overflow-hidden bg-slate-50 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ef4444 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-bx from-white/80 via-white/40 to-white/80 pointer-events-none"></div>

            <div className="mb-16 text-center container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Happiest Students</h2>
                <p className="text-slate-600">Join thousands of satisfied learners around the globe.</p>
            </div>

            <div className="relative z-10 max-w-[1920px] mx-auto">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20" />

                <motion.div
                    className="flex"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
