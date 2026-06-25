import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden px-6">
      {/* Background Accent */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Work Experience
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/5 ml-4 md:ml-8 pl-8 md:pl-16 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.company + exp.position} className="relative">
              {/* Glowing Timeline Marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                className="absolute -left-[45px] md:-left-[81px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark border-2 border-accent-purple flex items-center justify-center text-accent-purple shadow-[0_0_15px_rgba(168,85,247,0.3)] z-10"
              >
                <FiBriefcase className="w-4 h-4" />
              </motion.div>

              {/* Exp Content Wrapper */}
              <GlassCard delay={index * 0.1} hoverEffect={false} className="relative">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/50 dark:border-white/5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-800 dark:text-white">
                      {exp.position}
                    </h3>
                    <div className="text-accent-blue font-semibold text-sm md:text-base mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-400">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-400">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-heading font-bold text-slate-700 dark:text-gray-200 text-sm md:text-base">
                    Responsibilities & Duties
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-3 text-slate-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                        <span className="flex-shrink-0 p-0.5 rounded-full bg-accent-blue/10 text-accent-blue mt-0.5">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements block */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10">
                    <h4 className="font-heading font-bold text-accent-purple text-sm md:text-base mb-2">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach) => (
                        <li key={ach} className="text-slate-700 dark:text-gray-300 text-xs md:text-sm font-medium">
                          &bull; {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
