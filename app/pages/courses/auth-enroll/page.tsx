
import { motion } from 'framer-motion'
import { use, useEffect, useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import Navbar from '../../navbar';
import { useRouter } from 'next/router';


export default function page () {
const router = useRouter()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  


useEffect(() => {
  if (!router.isReady) return;

  const titleParam = router.query.title;
  const priceParam = router.query.price;

  setTitle(typeof titleParam === "string" ? titleParam : "");
  setPrice(typeof priceParam === "string" ? priceParam : "");
}, [router.isReady, router.query]);


  const enrollCourses = async () => {
    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,Name,phone ,title }),
    });

    if (res.ok) {
      alert("Enrollment successful! Email sent.");
    } else {
      alert("Something went wrong");
    }
  };
    return (
        <>
        <Navbar/>
        <div className=' mx-auto justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 rounded-xl items-center border-2 border-black p-5
    max-w-xl mt-6 mb-10 rounded-lg
    grid grid-cols-1 gap-6'>

            <h1 className='text-3xl font-extrabold text-center mt-6'>Students Enrollment Page</h1>
            <p className='text-center mt-3'>This is the authentication enrollment page.</p>

            <h2 className="text-2xl font-bold text-black mx-auto mb-6">
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
        </>
    )
}


