import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import CoursesGrid from "../components/sections/CoursesGrid";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-red-500/30">
      <Navbar />
      <Hero />
      <CoursesGrid />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
