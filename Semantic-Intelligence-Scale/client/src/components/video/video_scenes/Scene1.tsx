import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

const BACKGROUND_WORDS = [
  "insight", "pulse", "opinion", "review", "comment", "feedback", 
  "complaint", "praise", "trending", "viral", "brand", "reputation", 
  "sentiment", "emotion", "trust", "anger", "joy", "frustration", 
  "loyalty", "churn"
];

export function Scene1() {
  const [phase, setPhase] = useState(0);

  // Generate random stable properties for the background words
  const words = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      text: BACKGROUND_WORDS[Math.floor(Math.random() * BACKGROUND_WORDS.length)],
      x: Math.random() * 90 + 5, // 5% to 95%
      y: Math.random() * 90 + 5,
      size: Math.floor(Math.random() * 8) + 14, // 14px to 22px
      opacityBase: Math.random() * 0.2 + 0.3, // 0.3 to 0.5
      durationX: 15 + Math.random() * 15,
      durationY: 15 + Math.random() * 15,
      moveX: (Math.random() - 0.5) * 60,
      moveY: (Math.random() - 0.5) * 60,
      pulseDuration: 3 + Math.random() * 2
    }));
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 5000); // 0-5s: phase 0 (in & hold)
    const t2 = setTimeout(() => setPhase(2), 7000); // 5-7s: phase 1 (fade to next)
    const t3 = setTimeout(() => setPhase(3), 9000); // 7-9s: phase 2 (hold)
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 1, ease: EASING } }}
    >
      {/* Background Words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {words.map((word) => (
          <motion.div
            key={word.id}
            className="absolute text-[#D1D5DB] font-[300] whitespace-nowrap"
            style={{ 
              fontSize: `${word.size}px`,
              left: `${word.x}%`,
              top: `${word.y}%`
            }}
            initial={{ opacity: word.opacityBase }}
            animate={{ 
              x: [0, word.moveX],
              y: [0, word.moveY],
              opacity: [word.opacityBase, word.opacityBase + 0.15, word.opacityBase]
            }}
            transition={{ 
              x: { duration: word.durationX, ease: "linear", repeat: Infinity, repeatType: "reverse" },
              y: { duration: word.durationY, ease: "linear", repeat: Infinity, repeatType: "reverse" },
              opacity: { duration: word.pulseDuration, ease: "easeInOut", repeat: Infinity }
            }}
          >
            {word.text}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-[#9FA8FF] text-[12px] uppercase tracking-[3px] font-bold absolute top-12 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASING }}
      >
        INSIGHT
      </motion.div>

      <div className="relative w-full max-w-[90vw] flex items-center justify-center z-10">
        <motion.div
          className="absolute text-center flex flex-col items-center gap-2 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: phase < 1 ? 1 : 0, 
            y: phase < 1 ? 0 : -20 
          }}
          transition={{ duration: 0.8, ease: EASING }}
        >
          <span className="text-[#202124] text-[clamp(36px,8vw,72px)] font-[700] leading-tight">
            Millions of conversations happen
          </span>
          <span className="text-[#6F6BFF] text-[clamp(36px,8vw,72px)] font-[700] leading-tight">
            every day
          </span>
        </motion.div>

        <motion.div
          className="absolute text-center flex flex-col items-center gap-2 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: phase >= 1 && phase < 3 ? 1 : 0, 
            y: phase >= 1 && phase < 3 ? 0 : (phase >= 3 ? -20 : 30) 
          }}
          transition={{ duration: 0.8, ease: EASING }}
        >
          <span className="text-[#202124] text-[clamp(36px,8vw,72px)] font-[700] leading-tight">
            But what are they
          </span>
          <span className="text-[#6F6BFF] text-[clamp(36px,8vw,72px)] font-[700] leading-tight">
            really saying?
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
