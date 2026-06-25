import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";
import { FiCpu, FiServer, FiMonitor, FiKey, FiDatabase } from "react-icons/fi";

const iconsMap = {
  FiCpu: FiCpu,
  FiServer: FiServer,
  FiMonitor: FiMonitor,
  FiKey: FiKey,
  FiDatabase: FiDatabase
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden px-6">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Services Offered
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => {
            const Icon = iconsMap[service.icon] || FiCpu;

            return (
              <GlassCard
                key={service.title}
                delay={index * 0.1}
                className="group flex flex-col justify-between p-8 relative min-h-[250px] border border-slate-200 dark:border-white/5"
              >
                {/* Visual glow indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-purple/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Icon Panel */}
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-accent-blue group-hover:to-accent-purple group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-extrabold text-slate-800 dark:text-white group-hover:text-accent-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom line marker */}
                <div className="w-8 h-1 bg-slate-300 dark:bg-gray-800 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple mt-6 transition-all duration-500 rounded-full"></div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
