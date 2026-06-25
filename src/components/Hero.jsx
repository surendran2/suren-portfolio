import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiMessageSquare } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";

export default function Hero() {
  const { name, title, tagline, socials } = portfolioData.personalInfo;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90svh] flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Text */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs md:text-sm font-semibold text-accent-purple"
          >
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping"></span>
            Available for Senior Roles & Projects
          </motion.div>

          <div className="space-y-3">
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl font-medium text-slate-600 dark:text-white/80 font-heading"
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-slate-800 dark:text-white"
            >
              {name}
            </motion.h1>
            <motion.h2
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
            >
              {title}
            </motion.h2>
          </div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base md:text-lg text-slate-600 dark:text-white/80 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            {tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-600 dark:text-white/80 hover:text-accent-purple dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-600 dark:text-white/80 hover:text-accent-purple dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={socials.email}
              className="p-3 rounded-xl glass-panel text-slate-600 dark:text-white/80 hover:text-accent-purple dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="Email Address"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white font-semibold shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <FiMessageSquare className="w-5 h-5" />
              Contact Me
            </button>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered. Please replace resume placeholder URL in portfolioData.js with absolute path to resume!");
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Visual Graphic Representation (Glassmorphic Mockup Panel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            {/* Pulsing decorative background sphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/30 via-accent-purple/30 to-accent-cyan/30 rounded-3xl blur-2xl transform rotate-6 scale-95 animate-pulse" />
            
            <GlassCard
              hoverEffect={false}
              className="w-full h-full flex flex-col justify-between border border-white/10 shadow-2xl relative"
            >
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-gray-500 dark:text-white/60 font-mono">portfolio.config.js</span>
              </div>

              {/* Developer properties */}
              <div className="font-mono text-xs sm:text-sm space-y-4 py-6 overflow-y-auto max-h-[300px] text-slate-700 dark:text-white/75">
                <div>
                  <span className="text-pink-500 dark:text-pink-400">const</span> <span className="text-blue-500 dark:text-blue-400">developer</span> = &#123;
                  <div className="pl-4">
                    name: <span className="text-yellow-600 dark:text-yellow-300">"{name}"</span>,
                  </div>
                  <div className="pl-4">
                    experience: <span className="text-orange-500 dark:text-orange-400">"4+ Years"</span>,
                  </div>
                  <div className="pl-4">
                    mainStack: [<span className="text-yellow-600 dark:text-yellow-300">"Laravel"</span>, <span className="text-yellow-600 dark:text-yellow-300">"React"</span>, <span className="text-yellow-600 dark:text-yellow-300">"Node"</span>],
                  </div>
                  <div className="pl-4">
                    aiCapabilities: <span className="text-purple-400 dark:text-purple-300">"Prompt Engineering"</span>
                  </div>
                  &#125;;
                </div>

                <div>
                  <span className="text-pink-500 dark:text-pink-400">function</span> <span className="text-blue-500 dark:text-blue-400">solveProblem</span>(issue) &#123;
                  <div className="pl-4">
                    <span className="text-pink-500 dark:text-pink-400">return</span> analyze(issue)
                  </div>
                  <div className="pl-8 text-slate-400 dark:text-gray-500">
                    .then(writeCleanCode)
                    <br />
                    .then(optimizeSQL)
                    <br />
                    .then(automateDeploy);
                  </div>
                  &#125;
                </div>
              </div>

              {/* Tag / Tech stacks */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {["PHP", "Laravel", "React.js", "Node.js", "MySQL", "AI Prompting"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold font-mono bg-white/5 dark:bg-white/5 text-slate-600 dark:text-white/70 border border-slate-300 dark:border-white/5 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
