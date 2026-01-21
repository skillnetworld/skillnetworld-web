'use client';
import React, { useEffect, useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight } from '../Home/Animation'

function HappiestClients() {
    const [slide, setSlide] = useState(0)

   const testimonials = [
    {
        name: "Shalini Yadav",
        course: "NIELIT CCC Student",
        feedback:
            "MR-1 to MR-5 notes and chapter-wise MCQs helped me clear CCC exam confidently. Practice tests were very useful.",
    },
    {
        name: "Pooja Yadav",
        course: "CCC Certified Student",
        feedback:
            "Model papers and assignments were exactly exam-oriented. The platform is simple and very helpful.",
    },
    {
        name: "Amit Yadav",
        course: "NIELIT CCC Learner",
        feedback:
            "Best place for CCC preparation. Practical skills and regular tests boosted my confidence a lot.",
    },
];

const [currentTestimonial, setCurrentTestimonial] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }, 6000) // slow change

  return () => clearInterval(interval)
}, [])



    return (
     <div className="mt-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-amber-700 rounded-xl backdrop-blur-2xl border border-slate-700/40">
    <h3 className="text-2xl font-bold text-center mb-8">
        What Our Students Say
    </h3>

    <AnimatePresence mode="wait">
  <motion.div
    key={currentTestimonial}
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -80 }}
    transition={{
      duration: 1.4,
      ease: 'easeInOut',
    }}
    className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-2xl border border-slate-700/40 shadow-xl rounded-2xl p-8 text-center"
  >
    <p className="text-gray-600 text-lg italic mb-6">
      “{testimonials[currentTestimonial].feedback}”
    </p>
    <img src='https://thumbs.dreamstime.com/b/female-university-student-beautiful-looking-camera-39097874.jpg' alt={testimonials[currentTestimonial].name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />

    <h4 className="text-xl font-semibold">
      {testimonials[currentTestimonial].name}
      
    </h4>

    <span className="text-sm text-gray-500">
      {testimonials[currentTestimonial].course}
    </span>
  </motion.div>
</AnimatePresence>

</div>

    )
}

export default HappiestClients;
