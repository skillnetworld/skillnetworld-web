"use client"
import {  useEffect, useState } from 'react';
import Navbar from '../../navbar';
import { FiSend } from 'react-icons/fi';
import { useSearchParams } from 'next/navigation';





export default function page() {

   const searchParams = useSearchParams()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [Name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



 

   useEffect(() => {
    setTitle(searchParams.get("courseTitle") || "");
    setPrice(searchParams.get("coursePrice") || "");
  }, [searchParams]);


    const enrollCourses = async () => {
        const res = await fetch("/api/enroll", {
            method: "POST",
            headers: {
          "Content-Type": "application/json",
        },
            body: JSON.stringify({ email, Name, phone, title,price }),
        });

        if (res.ok) {
            alert("Enrollment successful! Email sent.");
        } else {
            alert("Something went wrong");
        }
    };
    return (
        <div className='bg-[#020617] '>
            <Navbar />
            <div className=' mx-auto justify-center bg-gradient-to-br bg-slate-400 hover:bg-slate-200 mt-5 rounded-xl items-center border-2 border-black p-5
    max-w-xl mt-0 mb-10 rounded-lg
    grid grid-cols-1 gap-6'>

                <h1 className='text-3xl font-extrabold text-center mt-6'>Students Enrollment Page</h1>
                <p className='text-center mt-3'>This is the authentication enrollment page.</p>

                <h2 className="text-2xl font-bold text-blue-700 mx-auto mb-6">
                    Send Us a Message
                </h2>

                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Course Title:
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={title}
                        
                        readOnly
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Course Fee :
                    </label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        readOnly
                        placeholder={price}
                        
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Message
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Write your message..."
                        className="w-full border-2 border-black rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    />
                </div>

                <button
                    onClick={enrollCourses}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 
            bg-black text-white font-semibold py-3 rounded-lg 
            hover:bg-gray-900 hover:scale-[1.02] transition"
                >
                    <FiSend /> Send Message
                </button>



            </div>
            </div>
        
    )
}


