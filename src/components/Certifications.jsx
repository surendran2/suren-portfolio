import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";
import { FiAward, FiBookOpen, FiZap } from "react-icons/fi";

const typeIcons = {
  Degree: FiBookOpen,
  Technical: FiAward,
  Innovation: FiZap
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden px-6 bg-slate-50/50 dark:bg-black/10">
      {/* Background Accent */}
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            Credentials & Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Education & Certifications
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => {
            const Icon = typeIcons[cert.type] || FiAward;
            
            return (
              <GlassCard
                key={cert.title}
                delay={index * 0.1}
                className="flex gap-5 items-start p-6 md:p-8 border border-slate-200 dark:border-white/5 h-full relative"
              >
                {/* Left side: Icon bubble */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Right side: Credentials */}
                <div className="space-y-3.5 flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-blue/10 text-accent-blue px-2.5 py-1 rounded-md">
                      {cert.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 dark:text-gray-500 font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-slate-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-accent-purple text-xs md:text-sm font-semibold">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-slate-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
