import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullName = "SURENDRAN I  //  FULL STACK ENGINEER";

  useEffect(() => {
    // Typing text animation
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setText((prev) => prev + fullName[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 45);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Increment progress incrementally
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-brand-dark flex flex-col items-center justify-center z-50 px-4">
      <div className="max-w-md w-full text-left font-mono">
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-gray-500 text-xs ml-2">guest@surendran-i: ~</span>
        </div>

        {/* Command Box */}
        <div className="border border-white/5 bg-black/40 backdrop-blur-md rounded-lg p-5">
          <div className="flex text-purple-400 text-sm md:text-base font-semibold mb-2">
            <span className="text-green-400 mr-2">$</span>
            <span>npm run dev --init-portfolio</span>
          </div>

          <div className="text-gray-300 text-sm min-h-[24px] mb-4">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-purple-500 ml-1"
            ></motion.span>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></motion.div>
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>Loading assets...</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
