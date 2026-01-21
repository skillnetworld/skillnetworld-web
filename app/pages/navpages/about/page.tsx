'use client'
import React from 'react'
import Navbar from '../../navbar'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
    
      <Navbar />

   
      <section className="w-full py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-700">
          Welcome To About Page NIELET (CCC)
        </h1>

        <p className="max-w-4xl mx-auto mt-6 text-gray-300 leading-relaxed">
         The CCC NIELIT Blogs section is created to support students and learners who want to build strong computer fundamentals and succeed in the CCC (Course on Computer Concepts) examination.
          Through our blogs, we provide easy-to-understand explanations of the CCC syllabus, important computer concepts, and practical digital skills required in daily life.
        </p>
      </section>

 
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <article className="space-y-6 text-gray-200 leading-relaxed">
          <p>
           Our articles cover a wide range of topics including exam preparation tips, previous year question guidance, and updates related
            to NIELIT notifications and important dates. Each blog is written in simple language so that beginners, students, and working professionals can learn without confusion.
          </p>

          <p>
            Through our articles, students can understand the CCC syllabus in a
            simple and structured manner. We provide step-by-step explanations,
            practical examples, and exam-oriented guidance to support better
            performance in the online examination.
          </p>

          <p>
          We aim to keep learners informed, confident, and well-prepared by sharing accurate, relevant, and up-to-date information. By regularly
           following our blogs, students can enhance their computer knowledge, stay aware of official announcements, and prepare effectively for the CCC NIELIT examination.
          </p>
        </article>
      </section>
    </div>
  )
}
