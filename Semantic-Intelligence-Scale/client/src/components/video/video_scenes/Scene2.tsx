import { motion } from 'framer-motion';
import { Heart, Activity, Hash, Target, Users } from 'lucide-react';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

const pills = [
  { id: 'sentiment', label: 'Sentiment', icon: Heart },
  { id: 'emotion', label: 'Emotion', icon: Activity },
  { id: 'topics', label: 'Topics', icon: Hash },
  { id: 'driver', label: 'Driver', icon: Target },
  { id: 'intent', label: 'Intent', icon: Users },
];

export function Scene2() {
  return (
    <motion.div 
      className="absolute inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: EASING } }}
    >
      <div className="flex flex-col items-center w-full h-full max-w-[90vw] justify-between py-[5vh] overflow-hidden">
        
        {/* TOP SECTION */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-[60px] h-[60px] flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASING }}
          >
            <motion.div
              className="absolute inset-0 bg-[#6F6BFF] rounded-full blur-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0.1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <div 
              className="w-full h-full bg-[#6F6BFF] relative z-10"
              style={{
                WebkitMaskImage: 'url(/nouits_logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: 'url(/nouits_logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
            />
          </motion.div>
          <motion.img
            src="/nouits_wordmark.png"
            alt="nouits"
            className="h-[24px] object-contain mt-[16px] opacity-80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASING }}
          />
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col items-center">
          <motion.h2 
            className="text-[#202124] text-[clamp(32px,5vw,56px)] font-[700] leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2, ease: EASING }}
          >
            Semantic Intelligence
          </motion.h2>
          <motion.p
            className="text-[#5F6368] text-[clamp(16px,2vw,22px)] font-[400] mt-[8px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4, ease: EASING }}
          >
            in 5 Dimensions
          </motion.p>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative flex items-center justify-center w-full">
          {/* Connecting Line */}
          <motion.div
            className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-[#E8EAED] z-0"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 8, ease: EASING }}
          />
          
          <div className="flex flex-wrap justify-center gap-[16px] relative z-10 px-[20px]">
            {pills.map((pill, i) => {
              const Icon = pill.icon;
              return (
                <motion.div
                  key={pill.id}
                  className="bg-[#F3F2FF] border-[1.5px] border-[#6F6BFF] rounded-full px-[24px] py-[10px] flex items-center gap-[8px] relative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 5 + (i * 0.2), ease: EASING }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#6F6BFF] rounded-full blur-[15px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 0.6, delay: 5 + (i * 0.2), ease: "easeOut" }}
                  />
                  <Icon className="w-[20px] h-[20px] text-[#6F6BFF] relative z-10" />
                  <span className="text-[#202124] text-[15px] font-[600] whitespace-nowrap relative z-10">
                    {pill.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
