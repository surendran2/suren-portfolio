import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Full Stack", "Mobile & Web", "React / Vite"];

  const filteredProjects = filter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(project => {
        if (filter === "Full Stack") return project.category === "Full Stack";
        if (filter === "Mobile & Web") return project.category === "Mobile & Web";
        if (filter === "React / Vite") return project.category === "React / Vite" || project.category === "Full Stack" && project.tech.includes("React.js");
        return true;
      });

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6 bg-slate-50/50 dark:bg-black/10">
      {/* Background Accent */}
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            My Creations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-accent-purple text-white shadow-[0_4px_15px_rgba(168,85,247,0.2)]"
                  : "bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full flex"
              >
                <GlassCard
                  hoverEffect={true}
                  animateOnScroll={false}
                  className="flex flex-col h-full w-full p-0 overflow-hidden group border border-slate-200 dark:border-white/5"
                >
                  {/* Project Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-accent-purple hover:text-white hover:scale-110 active:scale-95 transition-all shadow-lg"
                        aria-label="GitHub Repo"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-accent-purple hover:text-white hover:scale-110 active:scale-95 transition-all shadow-lg"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Category Label */}
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-accent-purple/80 text-white px-2.5 py-1 rounded backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Info panel */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-slate-800 dark:text-white mb-4 group-hover:text-accent-purple transition-colors">
                        {project.title}
                      </h3>

                      {/* Recruiter-friendly summary structure */}
                      <div className="space-y-3.5 mb-6 text-xs md:text-sm">
                        <div className="space-y-1">
                          <span className="font-semibold text-slate-700 dark:text-gray-300 block text-[11px] uppercase tracking-wider">
                            Problem
                          </span>
                          <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        
                        <div className="space-y-1">
                          <span className="font-semibold text-slate-700 dark:text-gray-300 block text-[11px] uppercase tracking-wider">
                            Solution
                          </span>
                          <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        {/* Outcome Highlight Box */}
                        <div className="p-2.5 rounded-lg bg-accent-blue/5 border border-accent-blue/10">
                          <span className="font-bold text-accent-blue block text-[10px] uppercase tracking-wider mb-0.5">
                            Outcome
                          </span>
                          <p className="text-[11px] md:text-xs text-slate-600 dark:text-gray-300 font-medium">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stack & Links footer */}
                    <div className="pt-4 border-t border-slate-200/50 dark:border-white/5">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-400 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold pt-1">
                        <span className="text-slate-400 dark:text-gray-500 flex items-center gap-1">
                          <FiInfo className="w-3.5 h-3.5" />
                          Hover to visit links
                        </span>
                        
                        <div className="flex gap-3 md:hidden">
                          <a href={project.github} className="text-slate-500 dark:text-gray-400 hover:text-accent-purple" aria-label="GitHub"><FiGithub className="w-4 h-4" /></a>
                          <a href={project.demo} className="text-slate-500 dark:text-gray-400 hover:text-accent-purple" aria-label="Demo"><FiExternalLink className="w-4 h-4" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
