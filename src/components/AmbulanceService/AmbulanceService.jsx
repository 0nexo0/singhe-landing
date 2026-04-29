import { useState } from 'react';
import { motion } from 'framer-motion';
import { Siren, PhoneCall, ShieldAlert, Activity, ArrowRight, Ambulance } from 'lucide-react';

export default function AmbulanceService() {
  const [isEmergencyHovered, setIsEmergencyHovered] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500 perspective-[2000px]">
      
      {/* --- AMBIENT BACKGROUND & SIRENS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        
        {/* Blue Siren Light */}
        <motion.div 
          animate={{ opacity: isEmergencyHovered ? [0, 0.8, 0] : [0.1, 0.3, 0.1] }}
          transition={{ duration: isEmergencyHovered ? 0.3 : 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1774B6] rounded-full blur-[150px] mix-blend-screen dark:mix-blend-lighten"
        />
        
        {/* Red Siren Light */}
        <motion.div 
          animate={{ opacity: isEmergencyHovered ? [0.8, 0, 0.8] : [0.3, 0.1, 0.3] }}
          transition={{ duration: isEmergencyHovered ? 0.3 : 2, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D9252A] rounded-full blur-[150px] mix-blend-screen dark:mix-blend-lighten"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE - Copy & Emergency Call-to-Action */}
          <div className="xl:col-span-5 flex flex-col gap-6 z-20 text-center lg:text-left">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-rose-200 dark:border-rose-500/20 mb-2 backdrop-blur-md mx-auto lg:mx-0 w-fit shadow-sm dark:shadow-none">
              <Siren className="h-4 w-4 text-[#D9252A] animate-pulse" />
              <span className="text-xs font-bold text-slate-800 dark:text-rose-100 tracking-wider uppercase">24/7 Rapid Response</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              When every <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9252A] to-[#ff6b6b]">second counts.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              Our fleet of ICU-equipped ambulances brings life-saving critical care directly to your doorstep. Manned by specialized trauma teams, we start treating you the moment we arrive.
            </motion.p>

            {/* Feature List */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col gap-3 mt-2">
              {[
                "Advanced Cardiac Life Support (ACLS)",
                "On-board Ventilators & Defibrillators",
                "GPS-Routed for Fastest Arrival Time"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-[#D9252A]/10 p-1 rounded-full">
                    <Activity className="h-4 w-4 text-[#D9252A]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Massive Emergency Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.4 }} 
              className="mt-6 flex justify-center lg:justify-start"
            >
              <motion.a 
                href="tel:1990" 
                onMouseEnter={() => setIsEmergencyHovered(true)}
                onMouseLeave={() => setIsEmergencyHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-6 bg-[#D9252A] p-4 pr-8 rounded-[2rem] shadow-[0_20px_40px_rgba(217,37,42,0.3)] hover:shadow-[0_20px_60px_rgba(217,37,42,0.5)] transition-all cursor-pointer overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>

                <div className="bg-white text-[#D9252A] p-4 rounded-full flex items-center justify-center">
                  <PhoneCall className="h-8 w-8 animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-0.5">Emergency Hotline</span>
                  <span className="text-white text-3xl font-black leading-none tracking-tight">+94 45 22 33 444</span>
                </div>
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT SIDE - 3D Animated Ambulance Radar */}
          <div className="xl:col-span-7 h-[500px] lg:h-[600px] w-full relative flex items-center justify-center perspective-[2000px]">
            
            <motion.div 
              initial={{ rotateX: 65, rotateZ: -40, scale: 0.8, opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[350px] h-[500px] lg:w-[450px] lg:h-[600px] transform-style-3d"
              style={{ rotateX: "60deg", rotateZ: "-35deg" }}
            >
              
              {/* The Glowing Road Platform */}
              <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md border border-slate-700/50 dark:border-white/10 rounded-[3rem] shadow-2xl overflow-hidden z-0">
                
                {/* Static Grid */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                {/* The "Road" Asphalt */}
                <div className="absolute left-1/2 -translate-x-1/2 w-32 h-[200%] -top-[50%] bg-slate-800/80 dark:bg-black/80 border-x-4 border-slate-600/50 dark:border-white/10 flex justify-center">
                  
                  {/* Scrolling Dashed Lines */}
                  <motion.div 
                    animate={{ y: [0, 200] }} // Moves the lines down to simulate moving forward
                    transition={{ 
                      duration: isEmergencyHovered ? 0.3 : 1.5, // Speeds up on hover!
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="w-2 h-full flex flex-col gap-[40px] items-center -mt-[100px]"
                  >
                    {/* Create multiple dash segments */}
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="w-2 h-[40px] bg-white/50 rounded-full"></div>
                    ))}
                  </motion.div>

                </div>
              </div>

              {/* The 3D Floating Ambulance Container */}
              <motion.div 
                animate={{ y: isEmergencyHovered ? [-5, 5, -5] : [-10, 10, -10] }} // Bobs faster when hovered
                transition={{ duration: isEmergencyHovered ? 0.5 : 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform-style-3d z-30"
                style={{ transform: 'translate(-50%, -50%)' }} // Keep it centered on the grid
              >
                
                {/* The Isometric Stand that cancels the board's rotation */}
                <div 
                  className="relative flex flex-col items-center justify-center transform-style-3d"
                  style={{ transform: 'rotateX(-90deg) rotateY(-50deg)' }} 
                >
                  
                  {/* Glassmorphic "Hologram" Box surrounding the Ambulance */}
                  <div className={`relative w-48 h-32 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 ${isEmergencyHovered ? 'shadow-[0_0_50px_rgba(217,37,42,0.4)]' : ''}`}>
                    
                    {/* Mini Sirens on top of the Glass Box */}
                    <div className="absolute -top-3 flex gap-4">
                      <motion.div 
                        animate={{ opacity: isEmergencyHovered ? [1, 0, 1] : [1, 0.5, 1] }} 
                        transition={{ duration: isEmergencyHovered ? 0.3 : 1, repeat: Infinity }} 
                        className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]"
                      />
                      <motion.div 
                        animate={{ opacity: isEmergencyHovered ? [0, 1, 0] : [0.5, 1, 0.5] }} 
                        transition={{ duration: isEmergencyHovered ? 0.3 : 1, repeat: Infinity }} 
                        className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]"
                      />
                    </div>

                    <Ambulance className="h-16 w-16 text-slate-800 dark:text-white drop-shadow-xl" />
                    
                    {/* Medical Cross Badge */}
                    <div className="absolute bottom-4 right-4 bg-[#D9252A] p-1.5 rounded-lg shadow-lg">
                      <ShieldAlert className="h-4 w-4 text-white" />
                    </div>

                  </div>

                  {/* Laser connector linking the floating box to the road */}
                  <div className="w-[2px] h-24 bg-gradient-to-b from-white/50 to-transparent mt-2"></div>
                  
                  {/* Glowing Target Reticle on the road */}
                  <div className="w-16 h-16 rounded-full border border-[#D9252A]/50 bg-[#D9252A]/10 shadow-[0_0_30px_rgba(217,37,42,0.3)] animate-ping absolute -bottom-24" style={{ transform: 'rotateX(90deg)' }}></div>

                </div>
              </motion.div>

            </motion.div>
          </div>
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