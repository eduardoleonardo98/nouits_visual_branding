import { motion } from 'framer-motion';
import { MessageSquare, Instagram, Twitter, Facebook, MessageCircle, Star } from 'lucide-react';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

const platforms = [
  { id: 'google', icon: Star, angle: -90 },
  { id: 'forums', icon: MessageSquare, angle: -30 },
  { id: 'instagram', icon: Instagram, angle: 30 },
  { id: 'twitter', icon: Twitter, angle: 90 },
  { id: 'facebook', icon: Facebook, angle: 150 },
  { id: 'reddit', icon: MessageCircle, angle: 210 },
];

export function Scene4() {
  const radius = 180;
  
  const positions = platforms.map(p => ({
    x: radius * Math.cos((p.angle * Math.PI) / 180),
    y: radius * Math.sin((p.angle * Math.PI) / 180)
  }));

  return (
    <motion.div 
      className="absolute inset-0 bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: EASING } }}
    >
      <div className="relative w-[clamp(200px,60vw,600px)] h-[clamp(150px,40vh,400px)] flex flex-col items-center justify-center mb-[clamp(3vh,5vh,8vh)]">
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ transform: 'translate(50%, 50%)', left: '0', top: '0' }}>
          {positions.map((pos, idx) => (
            <motion.line
              key={`line-${idx}`}
              x1={pos.x}
              y1={pos.y}
              x2={0}
              y2={0}
              stroke="#6F6BFF"
              strokeWidth="1.5"
              strokeOpacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 + (idx * 0.2), ease: EASING }}
            />
          ))}
          {/* Particles */}
          {positions.map((pos, idx) => (
            <motion.circle
              key={`particle-${idx}`}
              r={2.5}
              fill="#6F6BFF"
              initial={{ cx: pos.x, cy: pos.y, opacity: 0 }}
              animate={{ 
                cx: 0, 
                cy: 0, 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: 1.5, 
                delay: 4.5 + (idx * 0.1),
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: EASING 
              }}
            />
          ))}
        </svg>

        {/* Center Logo */}
        <div className="absolute z-10 w-[80px] h-[80px] flex items-center justify-center">
          <motion.div
            className="absolute z-0 w-[140px] h-[140px] bg-[#E8E7FF] rounded-full blur-[15px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0.6], scale: [0.5, 1.2, 1] }}
            transition={{ duration: 2, ease: EASING }}
          />
          <motion.img
            src="/nouits_logo.png"
            alt="Nouits"
            className="w-full h-full object-contain relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASING }}
          />
        </div>

        {/* Platform Icons */}
        {platforms.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              className="absolute z-20 w-[40px] h-[40px] bg-[#2D3142] rounded-[10px] flex items-center justify-center"
              style={{
                left: `calc(50% + ${positions[i].x}px - 20px)`,
                top: `calc(50% + ${positions[i].y}px - 20px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 + (i * 0.3), ease: EASING }}
            >
              <Icon className="text-white w-5 h-5" strokeWidth={2} />
            </motion.div>
          );
        })}
      </div>

      {/* Text Below */}
      <motion.div 
        className="flex flex-col items-center px-[4vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 5.5, ease: EASING }}
      >
        <h2 className="text-[#202124] text-[clamp(28px,5vw,48px)] font-[700] leading-tight text-center">
          Listen where people
        </h2>
        <h2 className="text-[#6F6BFF] text-[clamp(28px,5vw,48px)] font-[700] leading-tight text-center">
          actually speak.
        </h2>
      </motion.div>

    </motion.div>
  );
}
