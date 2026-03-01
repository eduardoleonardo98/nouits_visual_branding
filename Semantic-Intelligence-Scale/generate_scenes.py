import os

scenes_dir = "client/src/components/video/video_scenes"

scene1 = """import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 3000),
      setTimeout(() => setPhase(2), 6000),
      setTimeout(() => setPhase(3), 10000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-brand-primary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-brand-soft-indigo opacity-50"
            style={{ 
              width: p.size, 
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[80vw] px-[2vw] text-center">
        <AnimatePresence mode="wait">
          {phase === 0 ? (
            <motion.div
              key="text0"
              className="flex items-center justify-center text-brand-text-dark font-bold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.span 
                className="text-brand-accent mr-[1vw]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              >_</motion.span>
              Your customers are talking about you.
            </motion.div>
          ) : phase === 1 ? (
            <motion.div
              key="text1"
              className="flex items-center justify-center text-brand-text-dark font-bold tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.span 
                className="text-brand-accent mr-[1vw]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              >_</motion.span>
              Right now.
            </motion.div>
          ) : phase === 2 ? (
            <motion.div
              key="text2"
              className="flex items-center justify-center text-brand-text-dark font-bold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.span 
                className="text-brand-accent mr-[1vw]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              >_</motion.span>
              Do you know what they're really saying?
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
"""

scene2 = """import { motion } from 'framer-motion';

const pills = ["Sentiment", "Emotion", "Topics", "Driver", "Intent"];

export default function Scene2() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-primary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex flex-col items-center mb-[4vw]">
        <motion.div
          className="relative flex items-center justify-center mb-[1vw]"
          style={{ width: 'clamp(4rem, 10vw, 8rem)', height: 'clamp(4rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div 
            className="w-full h-full bg-brand-accent"
            style={{
              maskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              WebkitMaskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 bg-brand-accent rounded-full blur-[30px] opacity-0 z-[-1]"
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div
          className="overflow-hidden"
        >
          <motion.p 
            className="text-brand-text-gray font-light tracking-wide"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            Semantic Intelligence at scale.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center mb-[4vw] w-full max-w-[80vw]">
        <motion.div 
          className="absolute h-px bg-brand-border w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
        />
        
        <div className="relative z-10 flex justify-between w-full px-[2vw]">
          {pills.map((pill, i) => (
            <motion.div
              key={pill}
              className="bg-brand-soft-indigo text-brand-accent px-[2vw] py-[0.75vw] rounded-full font-medium"
              style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.25rem)', boxShadow: '0 0 0 rgba(111,107,255,0)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: ['0 0 0 rgba(111,107,255,0)', '0 0 30px rgba(111,107,255,0.6)', '0 0 0 rgba(111,107,255,0)']
              }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5 + (i * 0.15), 
                ease: [0.4, 0, 0.2, 1],
                boxShadow: { delay: 1.5 + (i * 0.15), duration: 1 }
              }}
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.h2
        className="text-brand-text-dark font-bold tracking-tight"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.4, 0, 0.2, 1] }}
      >
        5 dimensions of understanding.
      </motion.h2>
      
      <motion.div 
        className="absolute bottom-0 w-full h-[30vh] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at bottom, var(--color-brand-soft-indigo) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </motion.div>
  );
}
"""

scene3 = """import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertCircle, FileText, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Scene3() {
  const [segment, setSegment] = useState(0);

  useEffect(() => {
    setSegment(0);
    const timers = [
      setTimeout(() => setSegment(1), 8000), // 33s in overall
      setTimeout(() => setSegment(2), 15000), // 40s in overall
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-brand-secondary text-brand-text-dark overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-full max-w-[90vw] px-[2vw] grid grid-cols-12 gap-[4vw] items-center">
        
        {/* Left Content Area (UI Mockup) */}
        <div className="col-span-7 relative flex items-center justify-center" style={{ minHeight: 'clamp(25rem, 60vh, 40rem)' }}>
          <AnimatePresence mode="wait">
            
            {/* Segment 0: Monitoring */}
            {segment === 0 && (
              <motion.div
                key="seg0"
                className="w-full space-y-[1.5vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {[
                  { tag: "Positive", color: "#34A853", text: "Incredible onboarding experience." },
                  { tag: "Joy", color: "#6F6BFF", text: "This just saved me 5 hours!" },
                  { tag: "Human", color: "#E8EAED", text: "Support team was really helpful." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-brand-primary rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] p-[1.5vw] flex items-start gap-[1vw] border border-brand-border"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 + 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="w-[3vw] h-[3vw] rounded-full bg-brand-border shrink-0" />
                    <div className="flex-1">
                      <div className="h-[1vw] w-[60%] bg-brand-border rounded mb-[1vw]" />
                      <div className="h-[0.8vw] w-[80%] bg-brand-border/50 rounded mb-[1.5vw]" />
                      <div className="inline-flex items-center px-[0.8vw] py-[0.3vw] rounded-full text-[0.8vw] font-medium" 
                           style={{ backgroundColor: `${item.color}20`, color: item.color === '#E8EAED' ? '#5f6368' : item.color }}>
                        {item.tag}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Segment 1: Competitors */}
            {segment === 1 && (
              <motion.div
                key="seg1"
                className="w-full bg-brand-primary rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] p-[2vw] border border-brand-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="space-y-[1.5vw]">
                  {[
                    { name: 'Your Brand', bg: 'bg-brand-soft-indigo', bar: 'bg-brand-accent', width: '85%', isBrand: true },
                    { name: 'Competitor A', bg: 'bg-transparent', bar: 'bg-[#E8EAED]', width: '45%', isBrand: false },
                    { name: 'Competitor B', bg: 'bg-transparent', bar: 'bg-[#E8EAED]', width: '30%', isBrand: false },
                    { name: 'Competitor C', bg: 'bg-transparent', bar: 'bg-[#E8EAED]', width: '20%', isBrand: false },
                  ].map((row, i) => (
                    <div key={row.name} className={`flex items-center gap-[1.5vw] p-[1vw] rounded-xl ${row.bg}`}>
                      <div className="w-[8vw] font-medium text-[1vw] text-brand-text-dark">{row.name}</div>
                      <div className="flex-1 h-[1vw] bg-brand-border/30 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full ${row.bar}`}
                          initial={{ width: 0 }}
                          animate={{ width: row.width }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: [0.4, 0, 0.2, 1] }}
                        />
                      </div>
                      {row.isBrand && (
                        <motion.div 
                          className="flex items-center gap-[0.5vw] bg-brand-accent/10 text-brand-accent px-[1vw] py-[0.4vw] rounded-full text-[0.8vw] font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5, type: "spring" }}
                        >
                          <AlertCircle size={14} className="animate-pulse" /> Opportunity detected
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Segment 2: AI Reports */}
            {segment === 2 && (
              <motion.div
                key="seg2"
                className="w-full bg-brand-primary rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] p-[3vw] border border-brand-border flex flex-col items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, var(--color-brand-accent) 0%, transparent 70%)',
                  }}
                  animate={{ opacity: [0.02, 0.08, 0.02] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="w-full mb-[2vw] flex justify-between items-center">
                   <div className="flex items-center gap-[0.5vw] text-brand-accent font-medium text-[1.2vw]">
                     <span className="text-[1.5vw]">✦</span> Executive Briefing
                   </div>
                   <div className="flex gap-[1vw]">
                     <div className="px-[1vw] py-[0.5vw] rounded-full border border-brand-border text-brand-text-gray text-[0.9vw] font-medium">Export CSV</div>
                     <div className="px-[1vw] py-[0.5vw] rounded-full border border-brand-border text-brand-text-gray text-[0.9vw] font-medium flex items-center gap-[0.4vw]">
                       <Download size={14} /> Export PDF
                     </div>
                   </div>
                </div>

                <div className="w-full flex-1 text-[1.1vw] leading-relaxed text-brand-text-dark font-body">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="overflow-hidden"
                  >
                    Analysis of 2.4M interactions reveals a <span className="bg-brand-soft-indigo text-brand-accent px-[0.3vw] py-[0.1vw] rounded">45% positive shift</span> in brand perception.<br/><br/>
                    Key Drivers:<br/>
                    • "Ease of use" mentions increased by 3.2x<br/>
                    • Support resolution praised in 84% of reviews<br/>
                    • Competitor churn indicated in 12% of signals
                  </motion.div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Right Content Area (Typography) */}
        <div className="col-span-5 pl-[2vw]">
          <AnimatePresence mode="wait">
            {segment === 0 && (
              <motion.div key="text0" className="flex flex-col">
                <motion.h2 
                  className="font-bold leading-tight text-brand-text-dark"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', marginBottom: 'clamp(0.75rem, 1vw, 1.5rem)', letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  Know what they feel.<br/>In real time.
                </motion.h2>
              </motion.div>
            )}

            {segment === 1 && (
              <motion.div key="text1" className="flex flex-col">
                <motion.h2 
                  className="font-bold leading-tight text-brand-text-dark"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', marginBottom: 'clamp(0.75rem, 1vw, 1.5rem)', letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  See what your<br/>competitors can't.
                </motion.h2>
              </motion.div>
            )}

            {segment === 2 && (
              <motion.div key="text2" className="flex flex-col">
                <motion.h2 
                  className="font-bold leading-tight text-brand-text-dark"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', marginBottom: 'clamp(0.75rem, 1vw, 1.5rem)', letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  From noise to<br/>boardroom-ready.<br/>Instantly.
                </motion.h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
"""

scene4 = """import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, MessageSquare, Star, MessageCircle } from 'lucide-react';

const sources = [
  { id: 'twitter', icon: Twitter, x: 'calc(50% - 15vw)', y: 'calc(50% - 10vw)', delay: 0 },
  { id: 'instagram', icon: Instagram, x: 'calc(50% - 20vw)', y: 'calc(50%)', delay: 0.15 },
  { id: 'facebook', icon: Facebook, x: 'calc(50% - 15vw)', y: 'calc(50% + 10vw)', delay: 0.3 },
  { id: 'reddit', icon: MessageSquare, x: 'calc(50% + 15vw)', y: 'calc(50% - 10vw)', delay: 0.45 },
  { id: 'reviews', icon: Star, x: 'calc(50% + 20vw)', y: 'calc(50%)', delay: 0.6 },
  { id: 'forums', icon: MessageCircle, x: 'calc(50% + 15vw)', y: 'calc(50% + 10vw)', delay: 0.75 },
];

export default function Scene4() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-primary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Connection Lines */}
        <svg className="w-full h-full">
          {sources.map((src) => (
            <motion.line
              key={`line-${src.id}`}
              x1="50%" y1="50%"
              x2={src.x} y2={src.y}
              stroke="var(--color-brand-border)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: src.delay + 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
          ))}
          
          {/* Micro particles on lines */}
          {sources.map((src) => (
            <motion.circle
              key={`particle-${src.id}`}
              r="3"
              fill="var(--color-brand-accent)"
              initial={{ cx: src.x, cy: src.y, opacity: 0 }}
              animate={{ cx: "50%", cy: "50%", opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: src.delay + 1, ease: "linear" }}
            />
          ))}
        </svg>

        {/* Source Icons */}
        {sources.map((src) => (
          <motion.div
            key={src.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-brand-text-gray"
            style={{ left: src.x, top: src.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: src.delay, type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              animate={{ color: ['var(--color-brand-text-gray)', 'var(--color-brand-accent)', 'var(--color-brand-text-gray)'] }}
              transition={{ duration: 1.5, delay: src.delay + 0.5 }}
            >
              <src.icon style={{ width: 'clamp(2rem, 3vw, 3rem)', height: 'clamp(2rem, 3vw, 3rem)' }} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        ))}

        {/* Central Logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: 'clamp(5rem, 8vw, 8rem)', height: 'clamp(5rem, 8vw, 8rem)' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div 
            className="w-full h-full bg-brand-accent"
            style={{
              maskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              WebkitMaskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[10vw] w-full text-center px-[2vw]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="text-brand-text-dark font-bold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          We listen where people actually speak.
        </h2>
      </motion.div>
    </motion.div>
  );
}
"""

scene5 = """import { motion } from 'framer-motion';

export default function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-primary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Expanding Halo */}
      <motion.div
        className="absolute rounded-full border border-brand-soft-indigo bg-brand-soft-indigo/20 pointer-events-none"
        style={{ width: '10vw', height: '10vw' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 20, opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, delay: 1, ease: "easeOut" }}
      />
      
      {/* Minimal Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-periwinkle opacity-30"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -50], opacity: [0, 0.5, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Mark */}
        <motion.div 
          className="mb-[2vw]"
          style={{ width: 'clamp(8rem, 15vw, 15rem)', height: 'clamp(8rem, 15vw, 15rem)' }}
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div 
            className="w-full h-full bg-brand-accent relative"
            style={{
              maskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              WebkitMaskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          >
            {/* Animated stroke effect inside mask */}
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          className="mb-[1vw]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <img 
            src="/nouits_solito_1772335794804.png" 
            alt="nouits" 
            className="object-contain"
            style={{ height: 'clamp(2rem, 4vw, 4rem)', filter: 'brightness(0) invert(0.12) sepia(0) saturate(1) hue-rotate(0deg) brightness(0.9) contrast(0.9)' }} 
            // #202124 approximation
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-brand-text-gray tracking-wide font-light"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Semantic Intelligence at scale.
        </motion.p>
      </div>
    </motion.div>
  );
}
"""

scene6 = """import { motion } from 'framer-motion';

export default function Scene6() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative z-10 flex flex-col items-center w-full h-full pt-[20vh] pb-[5vh] justify-between">
        
        <div className="flex flex-col items-center">
          {/* Logo Assembly */}
          <motion.div 
            className="flex items-center gap-[1.5vw] mb-[4vw]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="bg-brand-accent"
              style={{
                width: 'clamp(3rem, 6vw, 5rem)', 
                height: 'clamp(3rem, 6vw, 5rem)',
                maskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
                WebkitMaskImage: 'url(/nouits_logo_black_nobackground_1772335746391.png)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <img 
              src="/nouits_solito_1772335794804.png" 
              alt="nouits" 
              style={{ 
                height: 'clamp(1.5rem, 3vw, 2.5rem)',
                filter: 'brightness(0) invert(0.12) sepia(0) saturate(1) hue-rotate(0deg) brightness(0.9) contrast(0.9)'
              }}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="bg-brand-accent text-white rounded-[24px] shadow-[0_4px_14px_rgba(111,107,255,0.3)] mb-[1.5vw]" 
              style={{ padding: 'clamp(0.75rem, 1.5vw, 1.5rem) clamp(2rem, 4vw, 3rem)' }}
            >
              <span className="font-medium tracking-wide" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                Book a demo
              </span>
            </div>
            <span className="text-brand-text-gray font-medium" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)' }}>
              www.nouits.ai
            </span>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-[#9AA0A6] text-center"
          style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Founded by Tec de Monterrey alumni · Querétaro, Mexico
        </motion.div>
        
      </div>
    </motion.div>
  );
}
"""

with open(f"{scenes_dir}/Scene1.tsx", "w") as f:
    f.write(scene1)
with open(f"{scenes_dir}/Scene2.tsx", "w") as f:
    f.write(scene2)
with open(f"{scenes_dir}/Scene3.tsx", "w") as f:
    f.write(scene3)
with open(f"{scenes_dir}/Scene4.tsx", "w") as f:
    f.write(scene4)
with open(f"{scenes_dir}/Scene5.tsx", "w") as f:
    f.write(scene5)
with open(f"{scenes_dir}/Scene6.tsx", "w") as f:
    f.write(scene6)

