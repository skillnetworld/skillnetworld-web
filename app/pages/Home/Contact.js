'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070')",
      }}
    >
   
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Have questions about NIELIT CCC / O Level / A Level courses?
            We’re here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/40 backdrop-blur-2xl border border-slate-950/40 border-black rounded-2xl p-8 text-white space-y-6"
          >
            <h2 className="text-2xl text-blue-200 font-bold mb-4">Get in Touch</h2>

            <div className="flex items-start gap-4">
              <FiPhone className="text-blue-200 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-blue-200">Phone</p>
                <p className="text-blue-200">+91-8404827541</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-blue-300 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-blue-300">Email</p>
                <p className="text-blue-300">aksir@nielitportal.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-blue-300 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-blue-300">Address</p>
                <p className="text-blue-300">
                  NIELIT Training Center<br />
                  India
                </p>
              </div>
            </div>

            <div className="pt-4 text-blue-300 text-sm">
              Available: Mon - Sat (9:00 AM - 8:00 PM)
            </div>
          </motion.div>

         
<motion.form
  variants={fadeUp}
  initial="hidden"
  animate="visible"
    whileInView="visible"   
  transition={{ delay: 0.4 }}
  className="bg-slate-900/40 backdrop-blur-2xl border border-slate-950/40 border-black rounded-2xl p-8 shadow-xl space-y-6"
>
  <h2 className="text-2xl font-extrabold text-blue-300 mb-4">
    Send Us a Message
  </h2>

  <div>
    <label className="block text-sm font-bold text-blue-300 mb-1">
      Full Name
    </label>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full border-1 border-blue-200 text-red-300 rounded-lg px-4 py-2 
      focus:outline-none "
    />
  </div>

  <div>
    <label className="block text-sm font-bold text-blue-300 mb-1">
      Email Address
    </label>
    <input
      type="email"
      placeholder="E-mail"
      className="w-full border-1 border-blue-200 text-red-200 rounded-lg px-4 py-2 
      focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  <div>
    <label className="block text-sm font-bold text-blue-300 mb-1">
      Message
    </label>
    <textarea
      rows="4"
      placeholder="Write your message..."
      className="w-full border-2 border-blue-200 text-red-300 rounded-lg px-4 py-2 
      focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 
    bg-[radial-gradient(circle_at_20%_20%,_#6366f140,_transparent_40%),radial-gradient(circle_at_80%_80%,_#22d3ee30,_transparent_40%)] bg-[#020617] text-blue-200 font-semibold py-3 rounded-lg 
    hover:bg-black hover:scale-[1.02] transition"
  >
    <FiSend /> Send Message
  </button>
</motion.form>

        </div>

        
      </div>
    </div>
  )
}
