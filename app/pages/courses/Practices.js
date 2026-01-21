import React from 'react'
import { ArrowRight } from "@deemlol/next-icons";
import Link from 'next/link';

function Practices() {
   
    const Practicecourses = [
       
       
      
        {
            title: 'Data Entry Operator',
            desc: 'Typing, MS Word, Excel, and office tools.',
            price: '₹699',
            duration: '2 Months',
            level: 'Beginner',
        },
        {
            title: 'Digital Marketing and Desktop Publishing',
            desc: 'SEO, Social Media, Ads, and Analytics.',
            price: '₹2,499',
            duration: '3 Months',
            level: 'Intermediate',
        },
        {
            title: 'Certification in Computer Applications (CCA)',
            desc: 'Formulas, dashboards, and data analysis.',
            price: '₹1,299',
            duration: '1.5 Months',
            level: 'Intermediate',
        },
        {
            title: 'Certification in Financial Accounting (CFA)',
            desc: 'Logic building and core programming concepts.',
            price: '₹1,099',
            duration: '2 Months',
            level: 'Beginner',
        },
    ]

    return (
        <section className="bg-slate-900 backdrop-blur-2xl border border-slate-700/40 py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-amber-700">
                Practices Test
            </h2>
            <p className="text-center text-amber-600 mb-8 ">
                Regularly attempted chapter-wise practice tests and MCQs to strengthen conceptual understanding.
                Solved model papers and mock tests based on the latest NIELIT CCC exam <strong className='text-sky-600'>pattern,Improved accuracy, speed, and exam confidence </strong>.
                through continuous test practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Practicecourses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-black">
                            {course.title}
                        </h3>

                        <p className="text-black mt-2 flex-grow">
                            {course.desc}
                        </p>

                        <div className="mt-4 space-y-1 text-sm">
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <p><strong>Level:</strong> {course.level}</p>
                            <p className="text-lg font-bold text-green-600">
                                {course.price}
                            </p>
                        </div>

                        <Link href="/pages/courses/auth-enroll" className="mt-5 flex bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition justify-center items-center">
                            Click Here <ArrowRight size={24} color="#FFFFFF" />
                        </Link>

                      
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Practices
