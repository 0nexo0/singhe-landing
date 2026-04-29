import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, ShieldPlus, Microscope, Mail, Smartphone, X } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Responsive Screen Detection ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Adaptive Configuration based on Display Size ---
  const RADIUS = isMobile ? 85 : 130; // Shorter radius for mobile to prevent clipping[cite: 10]
  const BG_WIDTH = isMobile ? 160 : 220;
  const BG_HEIGHT = isMobile ? 320 : 440;

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', angle: -75, href: "#" },
    { id: 'about', icon: Info, label: 'Our Story', angle: -45, href: "#" },
    { id: 'specialties', icon: ShieldPlus, label: 'Centers', angle: -15, href: "#" },
    { id: 'labs', icon: Microscope, label: 'Laboratories', angle: 15, href: "#" },
    { id: 'app', icon: Smartphone, label: 'Get App', angle: 45, href: "#" },
    { id: 'contact', icon: Mail, label: 'Contact', angle: 75, href: "#" },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] pl-3 lg:pl-6">
      
      {/* --- THE HALF-CIRCLE GLASS BACKGROUND --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{ 
              transformOrigin: 'left center',
              width: BG_WIDTH,
              height: BG_HEIGHT
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#0A0F1C]/80 backdrop-blur-2xl border-y border-r border-slate-200 dark:border-white/10 rounded-r-full shadow-[20px_0_50px_rgba(0,0,0,0.1)] dark:shadow-[20px_0_50px_rgba(0,0,0,0.5)] -z-10"
          >
            <div className="absolute inset-0 rounded-r-full border-[3px] lg:border-[4px] border-transparent border-r-[#1774B6]/20 dark:border-r-[#1774B6]/30"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-center w-11 lg:w-14 h-11 lg:h-14">
        
        {/* The Toggle Button (Always Visible)[cite: 10] */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: isOpen 
              ? "#D9252A" 
              : ["#1774B6", "#89C541", "#F5A422", "#D9252A", "#1774B6"],
            borderColor: isOpen 
              ? "rgba(217, 37, 42, 0.5)" 
              : "rgba(255, 255, 255, 0.3)"
          }}
          transition={{
            backgroundColor: isOpen 
              ? { duration: 0.3 } 
              : { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="relative z-20 w-11 lg:w-14 h-11 lg:h-14 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2"
        >
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-white/40"></span>
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-5 lg:w-7 h-5 lg:h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div key="wave" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex items-center justify-center w-full h-full">
                <svg width="20" height="20" className="lg:w-[26px] lg:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" className="opacity-20" />
                  <motion.path 
                    d="M22 12h-4l-3 9L9 3l-3 9H2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* The Radial Arc Items[cite: 10] */}
        <AnimatePresence>
          {isOpen && navItems.map((item, index) => {
            const radian = item.angle * (Math.PI / 180);
            const targetX = Math.cos(radian) * RADIUS;
            const targetY = Math.sin(radian) * RADIUS;

            return (
              <motion.a
                href={item.href}
                key={item.id}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ x: targetX, y: targetY, scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.05 }}
                className="absolute z-10 w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#1774B6] dark:hover:text-[#4CA1E6] transition-colors group"
              >
                <item.icon className="w-4 lg:w-5 h-4 lg:h-5" />

                {/* Hide tooltips on small mobile devices to save space[cite: 10] */}
                <div className="hidden sm:block absolute left-[calc(100%+12px)] px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] lg:text-xs font-bold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                  {item.label}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-slate-900 dark:border-r-white"></div>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}