import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { HeartHandshake, Sparkles, Target, Building2, Award, ArrowRight } from 'lucide-react';

// --- Helper Component for Animated Counters ---
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });
    return controls.stop;
  }, [value, duration]);

  return <span>{displayValue}{suffix}</span>;
};

export default function AboutUs() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 15 });

  const rotateX = useTransform(smoothMouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-10, 10]);

  const coreValues = [
    { id: 1, title: 'Unmatched Empathy', icon: HeartHandshake, color: 'text-[#D9252A]', bg: 'bg-[#D9252A]', desc: 'We treat every patient like family. Healing starts with listening, understanding, and compassionate care.' },
    { id: 2, title: 'Medical Innovation', icon: Sparkles, color: 'text-[#1774B6]', bg: 'bg-[#1774B6]', desc: 'Equipped with South Asia’s most advanced robotic surgery and AI diagnostic tools to ensure perfect outcomes.' },
    { id: 3, title: 'Clinical Excellence', icon: Target, color: 'text-[#F5A422]', bg: 'bg-[#F5A422]', desc: 'Our board-certified specialists adhere strictly to international protocols and ISO 15189 standards.' }
  ];

  const [hoveredValue, setHoveredValue] = useState(2);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0F1C] transition-colors duration-500 perspective-[2000px]"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1774B6]/10 rounded-full blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Copy & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 z-20 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mx-auto lg:mx-0 w-fit shadow-sm">
              <Building2 className="h-4 w-4 text-[#1774B6]" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wider uppercase">Our Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Beyond standard <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] via-[#2ba3fa] to-[#D9252A] animate-gradient-x bg-[length:200%_auto]">
                healthcare.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Founded on the principle that world-class medical care should be accessible and deeply compassionate. Singhe Hospitals has evolved from a single clinic into Sri Lanka's most technologically advanced medical network.[cite: 7]
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg flex items-center gap-2 shadow-lg transition-all"
              >
                Read Full Story <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* 3D Image Collage */}
          <div className="lg:col-span-7 h-[350px] sm:h-[500px] lg:h-[650px] w-full relative flex items-center justify-center transform-style-3d mt-4 lg:mt-0 order-1 lg:order-2">
            <motion.div style={{ rotateX, rotateY }} className="relative w-full h-full flex items-center justify-center transform-style-3d">
              
              {/* Main Base Image */}
              <motion.div style={{ translateZ: -40 }} className="absolute w-[80%] h-[75%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[4px] sm:border-[8px] border-white dark:border-slate-800 z-10">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hospital" />
              </motion.div>

              {/* Surgeon Overlay */}
              <motion.div style={{ translateZ: 60 }} className="absolute bottom-2 -left-2 sm:bottom-10 sm:-left-10 w-[50%] h-[40%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[3px] sm:border-[6px] border-white dark:border-slate-700 z-20">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Surgeons" />
              </motion.div>

              {/* Glass Badge */}
              <motion.div style={{ translateZ: 140 }} animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[10%] right-[5%] sm:top-1/2 sm:right-[10%] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 z-40 flex items-center gap-2 sm:gap-4">
                <div className="bg-[#1774B6]/10 p-2 rounded-full"><Award className="h-5 w-5 sm:h-8 sm:w-8 text-[#1774B6]" /></div>
                <div className="text-left">
                  <div className="text-[8px] sm:text-xs text-slate-500 font-bold uppercase">Since 2012</div>
                  <div className="text-sm sm:text-xl font-black text-slate-900 dark:text-white leading-tight">Award Winning</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats & Values */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          
          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mb-12 sm:mb-16"
          >
            {[
              { label: 'Years Active', value: 12, suffix: '+' },
              { label: 'Specialists', value: 150, suffix: '+' },
              { label: 'Surgeries', value: 25, suffix: 'k' },
              { label: 'Patients', value: 1.2, suffix: 'M' }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center shadow-sm">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1774B6] dark:text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}[cite: 7]</div>
              </div>
            ))}
          </motion.div>

          {/* Core Values Accordion */}
          <div className="w-full flex flex-col md:flex-row h-auto md:h-[350px] gap-3 sm:gap-4">
            {coreValues.map((value) => {
              const isHovered = hoveredValue === value.id;
              const Icon = value.icon;
              
              return (
                <motion.div
                  key={value.id}
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onClick={() => setHoveredValue(value.id)}
                  layout
                  animate={{ flex: isHovered ? 3 : 1 }}
                  className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer border shadow-md flex flex-col justify-end p-4 sm:p-6 min-h-[120px] md:min-h-0 ${
                    isHovered ? `${value.bg} border-transparent` : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 transition-all duration-500 ${isHovered ? 'text-white/20 scale-125 sm:scale-150' : value.color}`}>
                    <Icon className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>

                  <motion.div layout className="relative z-10 w-full md:w-[280px]">
                    <motion.h3 layout="position" className={`text-lg sm:text-2xl font-black tracking-tight mb-1 sm:mb-2 ${isHovered ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {value.title}
                    </motion.h3>
                    <motion.div 
                      animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed pb-2">
                        {value.desc}[cite: 7]
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { animation: gradient-x 6s ease infinite; }
        .perspective-\\[2000px\\] { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
}