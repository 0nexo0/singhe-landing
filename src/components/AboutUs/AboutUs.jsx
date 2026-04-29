import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { HeartHandshake, Sparkles, Target, Activity, Users, Building2, Award } from 'lucide-react';

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
  // --- 3D Mouse Tracking Setup ---
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

  // --- Core Values Data ---
  const coreValues = [
    { id: 1, title: 'Unmatched Empathy', icon: HeartHandshake, color: 'text-[#D9252A]', bg: 'bg-[#D9252A]', desc: 'We treat every patient like family. Healing starts with listening, understanding, and compassionate care.' },
    { id: 2, title: 'Medical Innovation', icon: Sparkles, color: 'text-[#1774B6]', bg: 'bg-[#1774B6]', desc: 'Equipped with South Asia’s most advanced robotic surgery and AI diagnostic tools to ensure perfect outcomes.' },
    { id: 3, title: 'Clinical Excellence', icon: Target, color: 'text-[#F5A422]', bg: 'bg-[#F5A422]', desc: 'Our board-certified specialists adhere strictly to international protocols and ISO 15189 standards.' }
  ];

  const [hoveredValue, setHoveredValue] = useState(2); // Default middle expanded

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#0A0F1C] transition-colors duration-500 perspective-[2000px]"
    >
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#1774B6]/10 dark:bg-[#1774B6]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#F5A422]/5 dark:bg-[#F5A422]/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE - Copy & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6 z-20 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-2 backdrop-blur-md mx-auto lg:mx-0 w-fit shadow-sm dark:shadow-none">
              <Building2 className="h-4 w-4 text-[#1774B6] dark:text-[#4CA1E6]" />
              <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wider uppercase">Our Heritage</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Beyond standard <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] via-[#2ba3fa] to-[#D9252A] animate-gradient-x bg-[length:200%_auto]">
                healthcare.
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Founded on the principle that world-class medical care should be accessible and deeply compassionate. Singhe Hospitals has evolved from a single clinic into Sri Lanka's most technologically advanced medical network.
            </p>
            <p className="text-base text-slate-500 dark:text-slate-500 leading-relaxed">
              We combine elite medical expertise with cutting-edge infrastructure. But our true strength lies in our people—dedicated professionals who treat every life with the utmost dignity and respect.
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-xl transition-all"
              >
                Read Our Full Story
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE - 3D Parallax Image Collage */}
          <div className="lg:col-span-7 h-[500px] lg:h-[650px] w-full relative flex items-center justify-center transform-style-3d perspective-[2000px] mt-10 lg:mt-0">
            
            <motion.div 
              style={{ rotateX, rotateY }}
              className="relative w-full h-full flex items-center justify-center transform-style-3d"
            >
              
              {/* Main Background Image */}
              <motion.div 
                style={{ translateZ: -40 }}
                className="absolute w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white dark:border-slate-800 z-10"
              >
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hospital Architecture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Front Image 1 (Surgeons) */}
              <motion.div 
                style={{ translateZ: 60 }}
                className="absolute -bottom-4 -left-4 sm:bottom-10 sm:-left-10 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-[6px] border-white dark:border-slate-700 z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" 
                  alt="Surgical Team" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Front Image 2 (Technology) */}
              <motion.div 
                style={{ translateZ: 100 }}
                className="absolute -top-4 -right-4 sm:top-10 sm:-right-6 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[6px] border-white dark:border-slate-800 z-30"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" 
                  alt="Medical Technology" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Glass Badge */}
              <motion.div 
                style={{ translateZ: 140 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-[#0A0F1C]/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-40 flex items-center gap-4"
              >
                <div className="bg-[#1774B6]/10 p-3 rounded-full">
                  <Award className="h-8 w-8 text-[#1774B6] dark:text-[#4CA1E6]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Since 2012</div>
                  <div className="text-xl font-black text-slate-900 dark:text-white">Award Winning Care</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Stats & Values --- */}
        <div className="mt-24 lg:mt-32">
          
          {/* Animated Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mb-16"
          >
            {[
              { label: 'Years of Excellence', value: 12, suffix: '+' },
              { label: 'Specialist Doctors', value: 150, suffix: '+' },
              { label: 'Successful Surgeries', value: 25, suffix: 'k' },
              { label: 'Happy Patients', value: 1.2, suffix: 'M' }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-3xl text-center shadow-sm dark:shadow-none backdrop-blur-md">
                <div className="text-4xl lg:text-5xl font-black text-[#1774B6] dark:text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* --- FLUID HOVER ACCORDION (Core Values) --- */}
          <div className="w-full flex flex-col md:flex-row h-[500px] md:h-[350px] gap-4">
            {coreValues.map((value) => {
              const isHovered = hoveredValue === value.id;
              const Icon = value.icon;
              
              return (
                <motion.div
                  key={value.id}
                  onMouseEnter={() => setHoveredValue(value.id)}
                  layout
                  animate={{ flex: isHovered ? 3 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative rounded-[2rem] overflow-hidden cursor-pointer border shadow-lg transition-colors duration-500 flex flex-col justify-end p-6 ${
                    isHovered 
                      ? `${value.bg} border-transparent` 
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Icon floating top right */}
                  <div className={`absolute top-6 right-6 transition-all duration-500 ${isHovered ? 'text-white/20 scale-150' : value.color}`}>
                    <Icon className="h-10 w-10" />
                  </div>

                  {/* Content Container */}
                  <motion.div layout className="relative z-10 w-full md:w-[300px]">
                    <motion.h3 
                      layout="position"
                      className={`text-2xl font-black tracking-tight mb-2 whitespace-nowrap ${isHovered ? 'text-white' : 'text-slate-900 dark:text-white'}`}
                    >
                      {value.title}
                    </motion.h3>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 text-sm font-medium leading-relaxed">
                        {value.desc}
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