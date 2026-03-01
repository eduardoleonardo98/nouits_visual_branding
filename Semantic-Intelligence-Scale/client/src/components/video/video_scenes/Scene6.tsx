import { motion } from 'framer-motion';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

export function Scene6() {
  return (
    <motion.div 
      className="absolute inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden max-w-[100vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Static Brand Header */}
      <div className="flex flex-col items-center mb-[clamp(8vh,10vh,16vh)]">
        <img
          src="/nouits_logo.png"
          alt="Nouits Isotipo"
          className="w-[clamp(80px,12vw,150px)] h-[clamp(80px,12vw,150px)] object-contain mb-[clamp(4vh,8vh,12vh)]"
        />
        <img
          src="/nouits_wordmark.png"
          alt="nouits"
          className="h-[clamp(32px,5vw,60px)] object-contain mb-[clamp(3vh,6vh,10vh)]"
        />
        <p className="text-[#5F6368] text-[clamp(14px,2.2vw,24px)] font-[400]">
          Semantic Intelligence at scale.
        </p>
      </div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASING }}
      >
        <motion.div
          className="bg-[#6F6BFF] text-white text-[clamp(14px,2vw,20px)] font-[600] px-[clamp(2vw,3vw,5vw)] py-[clamp(0.8vh,1.2vh,2vh)] rounded-[24px] shadow-[0_2px_8px_rgba(111,107,255,0.3)]"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Book a demo
        </motion.div>
      </motion.div>

      <motion.div
        className="text-[#6F6BFF] text-[clamp(12px,1.8vw,18px)] underline mt-[clamp(1vh,1.5vh,3vh)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASING }}
      >
        www.nouits.ai
      </motion.div>

      <motion.p
        className="absolute bottom-[clamp(1vh,1.5vh,3vh)] text-[#9AA0A6] text-[clamp(10px,1.2vw,14px)] px-[2vw] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASING }}
      >
        Founded by Tec de Monterrey alumni · Querétaro, Mexico
      </motion.p>
    </motion.div>
  );
}
