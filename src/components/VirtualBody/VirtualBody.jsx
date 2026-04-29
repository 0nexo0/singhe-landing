import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, HeartPulse, Bone, Activity, Dna, ArrowRight, MousePointerClick } from 'lucide-react';

export default function VirtualBody() {
  const [activeNode, setActiveNode] = useState(null);

  // --- Interactive Body Nodes Data ---
  const bodyNodes = [
    {
      id: 'brain',
      label: 'Brain & Nervous System',
      dept: 'Neurology Institute',
      desc: 'Advanced neuro-imaging and treatments for complex neurological, brain, and spinal cord disorders.',
      icon: Brain,
      top: '12%', 
      left: '50%',
      color: 'text-blue-500',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.8)]',
      bgGlow: 'bg-blue-500/20',
      linePath: 'M 50 12 L 80 12' // SVG path from node to card
    },
    {
      id: 'heart',
      label: 'Heart & Vascular',
      dept: 'Advanced Cardiology',
      desc: 'Minimally invasive robotic heart surgeries and 24/7 cardiac emergency care.',
      icon: HeartPulse,
      top: '32%', 
      left: '53%', // Slightly anatomical left (viewer's right)
      color: 'text-rose-500',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.8)]',
      bgGlow: 'bg-rose-500/20',
      linePath: 'M 53 32 L 80 32'
    },
    {
      id: 'digestive',
      label: 'Digestive System',
      dept: 'Gastroenterology',
      desc: 'Comprehensive diagnostics and endoscopic treatments for the entire digestive tract.',
      icon: Activity,
      top: '48%', 
      left: '50%',
      color: 'text-[#F5A422]',
      glow: 'shadow-[0_0_20px_rgba(245,164,34,0.8)]',
      bgGlow: 'bg-[#F5A422]/20',
      linePath: 'M 50 48 L 80 48'
    },
    {
      id: 'joints',
      label: 'Joints & Mobility',
      dept: 'Orthopedics',
      desc: 'Precision robotic joint replacements and specialized sports medicine trauma care.',
      icon: Bone,
      top: '75%', 
      left: '42%',
      color: 'text-emerald-500',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.8)]',
      bgGlow: 'bg-emerald-500/20',
      linePath: 'M 42 75 L 20 75' // Draws line to the left side
    },
    {
      id: 'genetics',
      label: 'Cellular & DNA',
      dept: 'Oncology Center',
      desc: 'Targeted gene therapy, immunotherapy, and personalized cancer treatments.',
      icon: Dna,
      top: '55%', 
      left: '35%', // Arm area
      color: 'text-purple-500',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.8)]',
      bgGlow: 'bg-purple-500/20',
      linePath: 'M 35 55 L 20 55'
    }
  ];

  const activeData = bodyNodes.find(node => node.id === activeNode);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500 perspective-[2000px]">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1774B6]/5 dark:bg-[#1774B6]/10 rounded-full blur-[150px] pointer-events-none transition-colors duration-700"></div>
        
        {/* Dynamic Glow based on Active Node */}
        {activeData && (
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-20 ${activeData.bgGlow}`}></div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-30">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
            <MousePointerClick className="h-5 w-5 text-[#1774B6] dark:text-[#4CA1E6] animate-bounce" />
            <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Interactive Body Map</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Pinpoint your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">specialty.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Hover over the anatomical regions below to discover our specialized departments and targeted treatments.
          </motion.p>
        </div>

        {/* --- THE VIRTUAL BODY INTERFACE --- */}
        <div className="relative w-full max-w-5xl mx-auto h-[600px] lg:h-[700px] flex items-center justify-center">
          
          {/* 3D Pedestal Floor */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full border border-[#1774B6]/30 dark:border-white/20 bg-[#1774B6]/5 dark:bg-white/5 shadow-[0_0_50px_rgba(23,116,182,0.2)] transform-style-3d" style={{ transform: 'rotateX(75deg)' }}>
            <div className="absolute inset-0 rounded-full animate-ping bg-[#1774B6]/10 opacity-50 duration-[3s]"></div>
          </div>

          {/* SVG Human Silhouette & Interaction Area */}
          <div className="relative w-[300px] h-[550px] z-20" onMouseLeave={() => setActiveNode(null)}>
            
            {/* The Glowing Wireframe Silhouette */}
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(23,116,182,0.4)] opacity-80 dark:opacity-60">
              <path 
                d="M50 10 C44 10 40 15 40 21 C40 25 42 29 45 31 C42 33 36 36 32 42 C26 50 20 65 20 80 C20 85 22 100 25 100 C28 100 30 85 32 80 C32 85 30 110 32 130 C34 150 35 180 37 190 C38 195 42 195 45 190 C47 180 48 150 48 130 L50 130 L52 130 C52 150 53 180 55 190 C58 195 62 195 63 190 C65 180 66 150 68 130 C70 110 68 85 68 80 C70 85 72 100 75 100 C78 100 80 85 80 80 C80 65 74 50 68 42 C64 36 58 33 55 31 C58 29 60 25 60 21 C60 15 56 10 50 10 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                className="text-[#1774B6] dark:text-[#4CA1E6]"
                vectorEffect="non-scaling-stroke"
              />
              {/* Internal abstract grid lines for tech effect */}
              <path d="M50 32 L50 130 M32 80 L68 80 M40 50 L60 50 M40 100 L60 100" stroke="currentColor" strokeWidth="0.2" className="text-[#1774B6]/50 dark:text-[#4CA1E6]/50" />
            </svg>

            {/* Glowing Data Nodes */}
            {bodyNodes.map((node) => (
              <div 
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center cursor-pointer group z-30"
                style={{ top: node.top, left: node.left }}
              >
                {/* Ping Animation */}
                <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${node.bgGlow}`}></span>
                {/* Core Dot */}
                <div className={`w-3 h-3 rounded-full bg-white transition-all duration-300 group-hover:scale-150 ${activeNode === node.id ? node.glow : 'shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}></div>
              </div>
            ))}
          </div>

          {/* --- FLOATING INFORMATION CARDS & LASER LINES --- */}
          {/* Render the lines using SVG overlay */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            <AnimatePresence>
              {activeNode && activeData && (
                <motion.path
                  key="laser-line"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  // Scale the 0-100 coordinates to the full SVG box
                  d={`M ${activeData.left.replace('%','')} ${activeData.top.replace('%','')} L ${activeData.left.includes('53') || activeData.left.includes('50') ? '80' : '20'} ${activeData.top.replace('%','')}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className={`${activeData.color}`}
                  // viewBox trick to map percentage to exact path visually
                  vectorEffect="non-scaling-stroke"
                />
              )}
            </AnimatePresence>
          </svg>

          {/* The Glassmorphic Card */}
          <AnimatePresence>
            {activeNode && activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                // Positioning logic: if the node is on the left side of the body, card goes left. If right, card goes right.
                className={`absolute z-40 w-72 sm:w-80 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${
                  parseInt(activeData.left) <= 50 ? 'right-[55%] sm:right-[60%]' : 'left-[55%] sm:left-[60%]'
                }`}
                style={{ top: `calc(${activeData.top} - 100px)` }} // Center the card vertically relative to the node
              >
                
                {/* Department Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${activeData.color}`}>
                    <activeData.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{activeData.label}</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white leading-tight">{activeData.dept}</div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-6">
                  {activeData.desc}
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full group relative flex items-center justify-center gap-2 bg-[#1774B6] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#125d93] shadow-md transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                  Book Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .perspective-\\[2000px\\] { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
}