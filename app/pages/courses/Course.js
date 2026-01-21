"use client"
import { Email } from '@deemlol/next-icons';
import Link from 'next/link';

function Courses(title,price) {

 
  const courses = [
    {
      title: 'IT Tools & Network Basics',
      desc: 'Learn fundamentals of IT tools, networking concepts, and usage.',
      price: '₹999',
      duration: '3 Months',
      level: 'Beginner',
    },
    {
      title: 'Computer Fundamentals',
      desc: 'Understand basics of computers, hardware, and software.',
      price: '₹799',
      duration: '2 Months',
      level: 'Beginner',
    },
    {
      title: 'Web Technologies',
      desc: 'HTML, CSS, JavaScript with real-world projects.',
      price: '₹199',
      duration: '4 Months',
      level: 'Intermediate',
    },
    {
      title: 'Python Programming',
      desc: 'Learn Python from basics to automation.',
      price: '₹149',
      duration: '3 Months',
      level: 'Beginner',
    },
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
      price: '₹499',
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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 rounded-xl py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-amber-700">
        Our Courses
      </h2>
      <p className="text-center text-amber-500 mb-8">
        Explore our wide range of courses designed to enhance your <strong className="font-bold text-blue-500">skills and knowledge</strong>.Completed <strong className='font-bold text-blue-500'>Course on Computer Concepts(CCC)</strong> (Course on Computer Concepts) covering the full syllabus from MR1 to MR5.
        Studied all modules through chapter-wise theory, assignments, and practical exercises.
        Practiced chapter-wise MCQs, model papers, and mock tests for exam readiness.
        Gained hands-on practical skills in computer fundamentals, MS Office, internet, and digital services.
        Developed a strong foundation in basic IT applications and computer operations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-black">
              {course.title}
            </h3>

            <p className="text-gray-600 mt-2 flex-grow">
              {course.desc}
            </p>

            <div className="mt-4 space-y-1 text-sm">
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Level:</strong> {course.level}</p>
              <p className="text-lg font-bold text-green-600">
                {course.price}
              </p>
            </div>
            <div className='flex mt-5 bg-black items-center justify-center text-white py-2 rounded-lg hover:bg-gray-800 transition'>
              <Link href={{pathname:'/pages/courses/auth-enroll', query:{courseTitle: course.title,coursePrice: course.price}}}>Enroll Now </Link>
            </div>
            <button className="mt-2 border border-gray-800 text-black py-2 rounded-lg hover:bg-gray-950 hover:text-white transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
