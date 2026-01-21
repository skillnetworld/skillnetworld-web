'use client'
import React from 'react'
import Navbar from '../../navbar'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
    
      <Navbar />

   
      <section className="w-full py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-700">
          CCC NIELIT Blogs
        </h1>

        <p className="max-w-4xl mx-auto mt-6 text-gray-300 leading-relaxed">
          Welcome to our CCC NIELIT Course Blog section. Here we share useful
          articles, updates, and study tips related to the Course on Computer
          Concepts (CCC). Our blogs are designed to help students understand the
          syllabus, exam pattern, and practical computer skills in an easy way.
        </p>
      </section>

 
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <article className="space-y-6 text-gray-200 leading-relaxed">
          <p>
            You will also find the latest NIELIT exam notifications and important
            dates shared through our blog posts. We regularly publish preparation
            tips, previous year question guidance, and articles focused on
            digital literacy to help learners build confidence.
          </p>

          <p>
            Through our articles, students can understand the CCC syllabus in a
            simple and structured manner. We provide step-by-step explanations,
            practical examples, and exam-oriented guidance to support better
            performance in the online examination.
          </p>

          <p>
            Our goal is to make computer education simple, accessible, and
            useful for everyone. Stay connected with our blogs to enhance your
            computer knowledge, stay updated with official announcements, and
            prepare effectively for the CCC NIELIT examination.
          </p>
        </article>
      </section>
    </div>
  )
}
