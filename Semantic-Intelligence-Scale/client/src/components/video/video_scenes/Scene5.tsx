import { motion } from 'framer-motion';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

export function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative flex flex-col items-center justify-center max-w-[90vw]">
        {/* Halo effect */}
        <motion.div
          className="absolute rounded-full bg-[#E8E7FF]"
          style={{ width: `clamp(80px, 15vw, 150px)`, height: `clamp(80px, 15vw, 150px)` }}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 2, delay: 2, ease: EASING }}
        />

        <div className="flex flex-col items-center relative z-10">
          <motion.img
            src="/nouits_logo.png"
            alt="Nouits Isotipo"
            className="w-[clamp(80px,12vw,150px)] h-[clamp(80px,12vw,150px)] object-contain mb-[clamp(4vh,8vh,12vh)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2, ease: EASING }}
          />

          <motion.img
            src="/nouits_wordmark.png"
            alt="nouits"
            className="h-[48px] object-contain mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: EASING }}
          />

          <motion.p
            className="text-[#5F6368] text-[clamp(16px,2.2vw,24px)] font-[400]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5, ease: EASING }}
          >
            Semantic Intelligence at scale.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
