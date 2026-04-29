import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, HeartPulse, Bone, Activity, Dna, ArrowRight, MousePointerClick } from 'lucide-react';

export default function VirtualBody() {
  const [activeNode, setActiveNode] = useState(null);

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
    },
    {
      id: 'heart',
      label: 'Heart & Vascular',
      dept: 'Advanced Cardiology',
      desc: 'Minimally invasive robotic heart surgeries and 24/7 cardiac emergency care.',
      icon: HeartPulse,
      top: '32%', 
      left: '53%',
      color: 'text-rose-500',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.8)]',
      bgGlow: 'bg-rose-500/20',
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
    },
    {
      id: 'genetics',
      label: 'Cellular & DNA',
      dept: 'Oncology Center',
      desc: 'Targeted gene therapy, immunotherapy, and personalized cancer treatments.',
      icon: Dna,
      top: '55%', 
      left: '35%',
      color: 'text-purple-500',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.8)]',
      bgGlow: 'bg-purple-500/20',
    }
  ];

  const activeData = bodyNodes.find(node => node.id === activeNode);

  // Handles both hover (desktop) and click (mobile)
  const handleInteraction = (id) => {
    setActiveNode(activeNode === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        {activeData && (
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[120px] transition-all duration-700 opacity-20 ${activeData.bgGlow}`}></div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 sm:mb-6 backdrop-blur-md">
            <MousePointerClick className="h-4 w-4 sm:h-5 sm:w-5 text-[#1774B6] dark:text-[#4CA1E6] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Tap to Explore Body Regions</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6">
            Interactive <span className="text-[#1774B6] dark:text-[#4CA1E6]">Body Map</span>
          </motion.h2>
        </div>

        {/* --- INTERFACE CONTAINER --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:h-[700px]">
          
          {/* THE BODY CANVAS */}
          <div className="relative w-[280px] h-[500px] sm:w-[350px] sm:h-[600px] lg:h-full flex items-center justify-center order-1">
            
            {/* Pedestal */}
            <div className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[60px] sm:h-[100px] rounded-full border border-[#1774B6]/20 bg-[#1774B6]/5 blur-sm" style={{ transform: 'rotateX(75deg)' }}></div>

            {/* SVG Silhouette */}
            <div className="relative w-full h-full z-20">
              <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(23,116,182,0.3)] opacity-70 dark:opacity-50 transition-colors duration-500">
                <path 
                  d="M50 10 C44 10 40 15 40 21 C40 25 42 29 45 31 C42 33 36 36 32 42 C26 50 20 65 20 80 C20 85 22 100 25 100 C28 100 30 85 32 80 C32 85 30 110 32 130 C34 150 35 180 37 190 C38 195 42 195 45 190 C47 180 48 150 48 130 L50 130 L52 130 C52 150 53 180 55 190 C58 195 62 195 63 190 C65 180 66 150 68 130 C70 110 68 85 68 80 C70 85 72 100 75 100 C78 100 80 85 80 80 C80 65 74 50 68 42 C64 36 58 33 55 31 C58 29 60 25 60 21 C60 15 56 10 50 10 Z" 
                  fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#1774B6]"
                />
              </svg>

              {/* Data Nodes */}
              {bodyNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => handleInteraction(node.id)}
                  onMouseEnter={() => window.innerWidth > 1024 && setActiveNode(node.id)}
                  className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center z-30 touch-manipulation"
                  style={{ top: node.top, left: node.left }}
                >
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${node.bgGlow}`}></span>
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white transition-all duration-300 ${activeNode === node.id ? `${node.glow} scale-125 bg-white` : 'bg-[#1774B6] opacity-60'}`}></div>
                </button>
              ))}
            </div>

            {/* LASER LINES (Desktop Only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full z-10 pointer-events-none">
              <AnimatePresence>
                {activeNode && activeData && (
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    d={`M ${activeData.left.replace('%','')} ${activeData.top.replace('%','')} L ${parseInt(activeData.left) > 50 ? '85' : '15'} ${activeData.top.replace('%','')}`}
                    stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className={activeData.color}
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </AnimatePresence>
            </svg>
          </div>

          {/* INFORMATION CARD AREA */}
          <div className="w-full lg:w-96 flex flex-col justify-center order-2 h-48 lg:h-auto">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 ${activeData.color}`}>
                      <activeData.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1774B6] uppercase tracking-widest">{activeData.label}</h4>
                      <h3 className="text-xl font-black dark:text-white leading-tight">{activeData.dept}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{activeData.desc}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#1774B6] text-white py-3 rounded-xl font-bold hover:bg-[#125d93] transition-all">
                    View Department <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center lg:text-left py-10"
                >
                  <p className="text-slate-400 dark:text-slate-500 font-medium italic">
                    Tap a glowing node on the body to see specialized center details.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}