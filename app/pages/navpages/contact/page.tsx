"use client"
import React from 'react'
import Navbar from '../../navbar'

function page() {
    return (
       <footer className="bg-[#0f172a] text-white mt-0 ">
        <Navbar/>

        <div>
            <h1 className='font-extrabold text-2xl text-blue-200 items-center justify-center mt-20 text-center'>
                Institute of Computerised Account and Taxation
            </h1>
            <i className='text-center flex flex-col m-8 text-amber-600'>Office :New Colony,Near Gurudwara, Deoria(U.P)</i>
            
        </div>
        <i className='text-center text-xl justify-center items-center ml-10'>
                For admission inquiries and course details related to the CCC (Course on Computer Concepts) by NIELIT, feel free to contact us. Our support team is available to guide you regarding eligibility,
                 syllabus, exam schedule, and certification process. You can reach us via phone or email for quick assistance. We also provide help with online registration and exam form filling. Visit our institute during working hours for in-person counseling. Your career in basic computer education starts here.
            </i>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">


        <div>
          <h2 className="text-xl font-bold mb-4">NIELET Courses</h2>
          <p className="text-gray-300 text-sm">
            Your gateway to quality education and resources. Explore courses, assignments, model papers, and much more.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">MCQs</a></li>
            <li><a href="#" className="hover:text-white">Assignments</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-4">Popular Courses</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">IT Tools & Networks</a></li>
            <li><a href="#" className="hover:text-white">Computer Fundamentals</a></li>
            <li><a href="#" className="hover:text-white">Web Development Basics</a></li>
            <li><a href="#" className="hover:text-white">React Development</a></li>
          </ul>
        </div>


        <div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 text-sm">Email:icatdeoria@gmail.com

            </p>
            <p className="text-gray-300 text-sm">Phone: 9838573904 ,7398792189</p>
          </div>
          <div className=" space-x-3 mt-3">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>


      <div className="bg-gray-900 text-center text-gray-400 text-sm py-4">
        © 2026 NIELET Courses. All Rights Reserved.
      </div>
    </footer>

    )
}

export default page