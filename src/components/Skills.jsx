import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";
import { FiLayout, FiServer, FiDatabase, FiCloud, FiCpu } from "react-icons/fi";

const categoryIcons = {
  Frontend: FiLayout,
  Backend: FiServer,
  Databases: FiDatabase,
  "Cloud & DevOps": FiCloud,
  "AI & Methodologies": FiCpu
};

export default function Skills() {
  const categories = Object.keys(portfolioData.skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeSkills = portfolioData.skills[activeCategory];
  const IconComponent = categoryIcons[activeCategory] || FiLayout;

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 bg-slate-50/50 dark:bg-black/10">
      {/* Background Accent */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            Technical Capability
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Core Tech Stack
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
          {categories.map((category) => {
            const CatIcon = categoryIcons[category] || FiLayout;
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? "text-white border-transparent shadow-[0_4px_15px_rgba(168,85,247,0.2)] bg-gradient-to-r from-accent-blue to-accent-purple"
                    : "text-slate-600 dark:text-gray-400 border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeSkills.map((skill, index) => (
                <GlassCard
                  key={skill.name}
                  delay={index * 0.05}
                  hoverEffect={true}
                  className="p-6 relative flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-heading font-bold text-slate-800 dark:text-white text-base md:text-lg">
                      {skill.name}
                    </span>
                    <span className="font-mono text-sm text-accent-purple font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Proficiency Bar */}
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan rounded-full"
                    ></motion.div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
