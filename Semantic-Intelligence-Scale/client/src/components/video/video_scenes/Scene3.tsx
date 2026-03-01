import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASING: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

export function Scene3() {
  const [segment, setSegment] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setSegment(1), 6000); // 31s
    const t2 = setTimeout(() => setSegment(2), 12000); // 37s
    const t3 = setTimeout(() => setSegment(3), 18000); // 43s
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      setSegment(0); // Reset segment when component unmounts (on loop/scene transition)
    };
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 bg-[#F8F9FA] flex items-center justify-center p-[clamp(2vw,3vw,5vw)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="max-w-[1200px] w-full flex items-center h-[clamp(200px,65vh,800px)] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {segment === 0 ? <Monitoring key="monitor" /> :
           segment === 1 ? <Competitors key="comp" /> :
           segment === 2 ? <Exploration key="explore" /> :
           <Analyst key="analyst" />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// --- SUB-SCENES ---

interface TagType {
  text: string;
  bg: string;
  color: string;
  border?: string;
}

interface PostProps {
  initials: string;
  avatarBg: string;
  username: string;
  time: string;
  text: string;
  tags: TagType[];
  index: number;
}

function Post({ initials, avatarBg, username, time, text, tags, index }: PostProps) {
  return (
    <div className="p-4 border-b border-[#F0F0F0] bg-white last:border-b-0">
      <div className="flex gap-3">
        <div 
          className="w-[36px] h-[36px] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#202124] font-[600] text-[14px]">{username}</span>
            <span className="text-[#9AA0A6] text-[12px]">{time}</span>
          </div>
          <p className="text-[#202124] text-[14px] mb-3 leading-snug">{text}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                className="text-[11px] font-[600] uppercase px-[10px] py-[3px] rounded-[4px]"
                style={{ 
                  backgroundColor: tag.bg, 
                  color: tag.color,
                  border: tag.border ? `1px solid ${tag.border}` : 'none'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + (index * 0.8) + (i * 0.05), ease: EASING }}
              >
                {tag.text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Monitoring() {
  const posts: PostProps[] = [
    {
      initials: "JD", avatarBg: "#6F6BFF", username: "@john_doe", time: "2m ago",
      text: "The new update is absolutely fantastic! Finally resolved the sync issues.",
      tags: [
        { text: "POSITIVE", bg: "#E6F4EA", color: "#137333", border: "#A8DAB5" },
        { text: "JOY", bg: "#E8E7FF", color: "#6F6BFF", border: "#B8B6FF" },
        { text: "PRODUCT", bg: "#F1F3F4", color: "#5F6368", border: "#DADCE0" },
        { text: "HUMAN", bg: "#F1F3F4", color: "#5F6368", border: "#DADCE0" }
      ], index: 0
    },
    {
      initials: "SA", avatarBg: "#EA4335", username: "@sarah_a", time: "15m ago",
      text: "I've been waiting for support for 3 days. This is ridiculous.",
      tags: [
        { text: "NEGATIVE", bg: "#FCE8E6", color: "#C5221F", border: "#F5B7B1" },
        { text: "FRUSTRATION", bg: "#FCE8E6", color: "#C5221F", border: "#F5B7B1" },
        { text: "SUPPORT", bg: "#F1F3F4", color: "#5F6368" },
        { text: "BOT", bg: "#FEF7E0", color: "#B05E0D", border: "#F9D67A" }
      ], index: 1
    },
    {
      initials: "MR", avatarBg: "#34A853", username: "@mike_r", time: "1h ago",
      text: "Just checking out the new features. Looks promising but confusing.",
      tags: [
        { text: "NEUTRAL", bg: "#F1F3F4", color: "#5F6368" },
        { text: "CURIOSITY", bg: "#E8E7FF", color: "#6F6BFF" },
        { text: "UX", bg: "#F1F3F4", color: "#5F6368" },
        { text: "HUMAN", bg: "#F1F3F4", color: "#5F6368" }
      ], index: 2
    },
    {
      initials: "B42", avatarBg: "#FBBC04", username: "@promo_bot", time: "2h ago",
      text: "Get 50% discount on all plans! Limited time offer click here.",
      tags: [
        { text: "NEUTRAL", bg: "#F1F3F4", color: "#5F6368" },
        { text: "SPAM", bg: "#F1F3F4", color: "#5F6368" },
        { text: "PROMO", bg: "#FEF7E0", color: "#B05E0D" },
        { text: "BOT", bg: "#FEF7E0", color: "#B05E0D", border: "#F9D67A" }
      ], index: 3
    },
    {
      initials: "EL", avatarBg: "#9FA8FF", username: "@elena_l", time: "3h ago",
      text: "I was hesitant at first, but the team showed me how it works. Incredible.",
      tags: [
        { text: "POSITIVE", bg: "#E6F4EA", color: "#137333" },
        { text: "TRUST", bg: "#E8E7FF", color: "#6F6BFF" },
        { text: "SERVICE", bg: "#F1F3F4", color: "#5F6368" },
        { text: "HUMAN", bg: "#F1F3F4", color: "#5F6368" }
      ], index: 4
    }
  ];

  return (
    <motion.div 
      className="w-full flex h-full items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div 
        className="w-[55%] pr-[4vw]"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -60, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASING }}
      >
        <div className="bg-[#FFFFFF] border border-[#E8EAED] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-[clamp(300px,50vh,450px)]">
          {/* Mac window chrome top bar */}
          <div className="h-[36px] bg-[#F8F9FA] border-b border-[#E8EAED] flex items-center px-4 shrink-0">
            <div className="flex gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]"></div>
            </div>
          </div>
          
          {/* Scrollable feed area */}
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="absolute w-full"
              initial={{ y: 0 }}
              animate={{ y: -300 }} // Scrolls down by 300px to reveal posts 3, 4, 5
              transition={{ duration: 5, delay: 1.5, ease: "linear" }}
            >
              {posts.map((post, i) => (
                <Post key={i} {...post} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-[45%] flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
      >
        <div className="w-[30px] h-[3px] bg-[#6F6BFF] mb-4" />
        <h2 className="text-[#202124] text-[clamp(24px,3vw,32px)] font-[700] mb-4 leading-tight">
          Real-time Monitoring
        </h2>
        <p className="text-[#5F6368] text-[clamp(14px,1.8vw,16px)] leading-relaxed">
          Track brand health across every channel with instant alerts.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Competitors() {
  const rows = [
    { name: 'Nouits (You)', sent: '#34A853', drv: 'Innovation', emo: 'Trust', sov: 42, color: '#6F6BFF', bg: '#F3F2FF', isYou: true },
    { name: 'Veltric', sent: '#EA4335', drv: 'Pricing Issue', emo: 'Frustration', sov: 28, color: '#EA4335', bg: '#FFFFFF' },
    { name: 'Orbitra', sent: '#FBBC04', drv: 'Service', emo: 'Disappointment', sov: 15, color: '#FBBC04', bg: '#FFFFFF' },
    { name: 'Konnex', sent: '#EA4335', drv: 'Quality', emo: 'Anger', sov: 8, color: '#EA4335', bg: '#FFFFFF' },
    { name: 'Sentra Labs', sent: '#FBBC04', drv: 'Support', emo: 'Anxiety', sov: 5, color: '#FBBC04', bg: '#FFFFFF' },
    { name: 'Daphos', sent: '#EA4335', drv: 'Reliability', emo: 'Distrust', sov: 2, color: '#EA4335', bg: '#FFFFFF' },
  ];

  return (
    <motion.div 
      className="w-full flex h-full items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div 
        className="w-[55%] pr-[4vw]"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: EASING }}
      >
        <div className="bg-[#FFFFFF] border border-[#E8EAED] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-[clamp(300px,50vh,350px)] relative">
          
          {/* Mac window chrome top bar */}
          <div className="h-[36px] bg-[#F8F9FA] border-b border-[#E8EAED] flex items-center px-4 shrink-0">
            <div className="flex gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]"></div>
            </div>
          </div>

          {/* Table Header */}
          <div className="flex items-center px-4 py-2 bg-[#F8F9FA] border-b border-[#E8EAED] text-[11px] font-[600] text-[#5F6368] uppercase tracking-[1px] shrink-0">
            <div className="flex-[1.5]">Brand</div>
            <div className="flex-[0.8] text-center">Sentiment</div>
            <div className="flex-[1.2]">Driver</div>
            <div className="flex-[1.2]">Emotion</div>
            <div className="flex-1 text-right">Share of Voice</div>
          </div>

          {/* Scrollable Rows */}
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="absolute w-full"
              initial={{ y: 0 }}
              animate={{ y: -88 }} // Scrolls exactly 2 rows (44px each)
              transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
            >
              {rows.map((row, i) => (
                <div 
                  key={i}
                  className="flex items-center px-4 h-[44px] border-b border-[#F0F0F0] hover:bg-[#F8F9FA] transition-colors"
                  style={{ backgroundColor: row.bg }}
                >
                  <div className={`flex-[1.5] text-[13px] ${row.isYou ? 'font-[700]' : 'font-[400]'} text-[#202124]`}>
                    {row.name}
                  </div>
                  <div className="flex-[0.8] flex justify-center">
                    <motion.div 
                      className="w-[12px] h-[12px] rounded-full"
                      style={{ backgroundColor: row.sent }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.15), type: "spring" }}
                    />
                  </div>
                  <div className="flex-[1.2] text-[13px] text-[#202124]">
                    {row.drv}
                  </div>
                  <div className="flex-[1.2] text-[13px] text-[#5F6368]">
                    {row.emo}
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center h-full relative group">
                    <span className={`text-[13px] text-[#202124] ${row.isYou ? 'font-[700]' : 'font-[400]'} z-10 mr-1`}>
                      {row.sov}%
                    </span>
                    <div className="absolute right-0 bottom-[12px] h-[4px] rounded-full w-[80%] bg-transparent flex justify-end">
                      <motion.div 
                        className="h-full rounded-full"
                        style={{ backgroundColor: row.color }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${row.sov}%` }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i < 4 ? 0.8 + (i * 0.15) : 2.5 + ((i-4) * 0.15), // Delay bars for rows 5&6 until scroll
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Alert Overlay Phase 2 */}
            <motion.div
              className="absolute inset-0 bg-white/50 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
            />
            
            {/* Alert Notification Card */}
            <motion.div
              className="absolute bottom-4 left-[5%] w-[90%] bg-white border border-[#E8EAED] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] p-[16px] px-[20px] flex flex-col z-20"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5, ease: EASING }}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div 
                  className="w-[8px] h-[8px] rounded-full bg-[#EA4335]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.4, delay: 4 }}
                />
                <span className="text-[#EA4335] text-[11px] font-[700] uppercase tracking-wide">ALERT</span>
                <span className="text-[#9AA0A6] text-[12px]">· Competitor Analysis · 2m ago</span>
              </div>
              <p className="text-[#202124] text-[14px] leading-[1.5]">
                Massive increase in negative sentiment detected for <span className="font-[700]">Veltric</span> regarding 'Customer Service' driver. Opportunity to engage displaced users immediately.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>

      <motion.div 
        className="w-[45%] flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
      >
        <div className="w-[30px] h-[3px] bg-[#6F6BFF] mb-4" />
        <h2 className="text-[#202124] text-[clamp(24px,3vw,32px)] font-[700] mb-4 leading-tight">
          Competitor Mapping
        </h2>
        <p className="text-[#5F6368] text-[clamp(14px,1.8vw,16px)] leading-relaxed">
          Reveal competitor weaknesses. Capitalize on their dissatisfied customers.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Exploration() {
  return (
    <motion.div 
      className="w-full flex h-full items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div 
        className="w-[55%] pr-[4vw]"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -60, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASING }}
      >
        <div className="bg-white border border-[#E8EAED] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-6 h-[clamp(300px,50vh,400px)] flex flex-col">
          <div className="border border-[#E8EAED] rounded-[8px] p-3 flex items-center mb-6">
            <span className="text-[#5F6368] mr-2">Q</span>
            <motion.div
              className="text-[#202124] font-medium text-[16px] relative"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            >
              "Electric Vehicle"
              <motion.span 
                className="inline-block w-[2px] h-[clamp(14px,1.5vw,16px)] bg-[#202124] ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          <div className="relative flex-1 flex items-center justify-center">
            {[
              { text: 'Charging', score: 'Neu: 48%', bg: '#F1F3F4', size: 100, x: -90, y: -40 },
              { text: 'Speed', score: 'Pos: 89%', bg: '#E6F4EA', size: 80, x: 20, y: -30 },
              { text: 'Price', score: 'Neg: 71%', bg: '#FCE8E6', size: 120, x: 120, y: 10 },
              { text: 'Range', score: 'Neg: 55%', bg: '#FCE8E6', size: 90, x: -30, y: 70 },
              { text: 'Design', score: 'Pos: 78%', bg: '#E6F4EA', size: 70, x: -120, y: 60 },
            ].map((bubble, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full flex flex-col items-center justify-center border border-[#E8EAED] shadow-sm"
                style={{ 
                  width: bubble.size, 
                  height: bubble.size, 
                  backgroundColor: bubble.bg,
                  left: `calc(50% + ${bubble.x}px - ${bubble.size/2}px)`,
                  top: `calc(50% + ${bubble.y}px - ${bubble.size/2}px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + (i * 0.15), type: "spring", stiffness: 100 }}
              >
                <div className="text-[clamp(10px,1vw,12px)] font-bold text-[#202124]">{bubble.text}</div>
                <div className="text-[clamp(8px,0.8vw,10px)] text-[#5F6368]">{bubble.score}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="w-[45%] flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
      >
        <div className="w-[30px] h-[3px] bg-[#6F6BFF] mb-4" />
        <h2 className="text-[#202124] text-[clamp(24px,3vw,32px)] font-[700] mb-4 leading-tight">
          Deep Exploration
        </h2>
        <p className="text-[#5F6368] text-[clamp(14px,1.8vw,16px)] leading-relaxed">
          Type any keyword. Uncover the conversation ecosystem around it.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Analyst() {
  return (
    <motion.div 
      className="w-full flex h-full items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div 
        className="w-[55%] pr-[4vw]"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -60, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASING }}
      >
        <div className="bg-white border border-[#E8EAED] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-8">
          <h3 className="text-[#202124] text-[clamp(16px,2vw,20px)] font-bold mb-6 border-b border-[#E8EAED] pb-4">
            Q3 Competitor Pulse Report
          </h3>
          
          <div className="mb-6">
            <div className="text-[12px] font-bold text-[#5F6368] uppercase tracking-wider mb-3">Executive Summary</div>
            <div className="space-y-2">
              <motion.div className="h-4 bg-[#F1F3F4] rounded w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
              <motion.div className="h-4 bg-[#E8E7FF] border border-[#6F6BFF] rounded w-[80%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
              <motion.div className="h-4 bg-[#F1F3F4] rounded w-[90%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
            </div>
          </div>

          <div className="mb-8">
            <div className="text-[12px] font-bold text-[#5F6368] uppercase tracking-wider mb-3">Key Opportunities</div>
            <div className="space-y-3">
              {[1,2,3].map((i) => (
                <motion.div key={i} className="flex gap-3 items-center" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + (i*0.2) }}>
                  <div className="text-[14px] font-bold text-[#6F6BFF]">{i}.</div>
                  <div className="h-3 bg-[#F1F3F4] rounded flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div className="flex gap-4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2 }}>
            <button className="px-4 py-2 rounded-[8px] border border-[#6F6BFF] text-[#6F6BFF] text-[clamp(12px,1.2vw,14px)] font-bold flex-1">
              Download PDF
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-[#6F6BFF] text-[#6F6BFF] text-[clamp(12px,1.2vw,14px)] font-bold flex-1">
              Export CSV
            </button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="w-[45%] flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
      >
        <div className="w-[30px] h-[3px] bg-[#6F6BFF] mb-4" />
        <h2 className="text-[#202124] text-[clamp(24px,3vw,32px)] font-[700] mb-4 leading-tight">
          AI Analyst
        </h2>
        <p className="text-[#5F6368] text-[clamp(14px,1.8vw,16px)] leading-relaxed">
          Executive summaries generated automatically. Export raw data in one click.
        </p>
      </motion.div>
    </motion.div>
  );
}
