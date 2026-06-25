import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
  animateOnScroll = true
}) {
  const cardContent = (
    <div
      className={`glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${className}`}
    >
      {/* Decorative inner gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      {children}
    </div>
  );

  if (!animateOnScroll) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {cardContent}
    </motion.div>
  );
}
