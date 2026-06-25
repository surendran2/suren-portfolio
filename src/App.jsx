import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Loader from "./components/UI/Loader";
import BackToTop from "./components/UI/BackToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-slate-50 dark:bg-brand-dark text-slate-800 dark:text-gray-100 flex flex-col relative"
          >
            {/* Global Decorative Radial Gradient Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute top-[30vh] left-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute bottom-[20vh] right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[150px] pointer-events-none z-0" />

            {/* Sticky Navigation Header */}
            <Navbar />

            {/* Main Sections Shell */}
            <main className="flex-grow z-10">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Services />
              <Certifications />
              <Contact />
            </main>

            {/* Main Footer */}
            <Footer />

            {/* Utility floating elements */}
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
