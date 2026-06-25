import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";
import AnimatedCounter from "./UI/AnimatedCounter";

export default function About() {
  const { bio, stats } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      {/* Visual Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            Get To Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading font-bold text-slate-800 dark:text-white leading-tight"
            >
              Architecting solutions across the complete development lifecycle.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-gray-300 leading-8 text-base md:text-lg"
            >
              {bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-gray-300 leading-8 text-base md:text-lg"
            >
              Throughout my career, I've focused on bridge-building between front-end aesthetics and backend systems. By automating workflows and optimizing SQL databases, I have successfully helped organizations reduce manual data entry work, boost checkout transaction speeds, and streamline API integrations.
            </motion.p>

            {/* Core credentials checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Clean Code Architecture",
                "Advanced Laravel MVC",
                "SPA & Mobile UI Components",
                "Database Tuning & Optimization",
                "AI Prompting Pipelines",
                "Agile Scrum Collaborations"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 text-slate-800 dark:text-gray-200 text-sm md:text-base font-medium"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-blue/10 dark:bg-accent-blue/20 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats widgets */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <GlassCard
                key={stat.label}
                delay={index * 0.1}
                wrapperClass="h-full"
                className="flex flex-col justify-center items-center text-center p-6 h-full"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent-blue to-accent-purple mb-3 drop-shadow-sm">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix || "+"} />
                </div>
                <div className="text-sm md:text-base font-semibold text-slate-700 dark:text-gray-200">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
