import { motion } from 'framer-motion';
import { ArrowRight, Play, Activity, Star, Calendar, Search, Stethoscope, Clock } from 'lucide-react';

export default function Hero() {
  // Advanced spring physics for interactive elements
  const interactiveSpring = { type: "spring", stiffness: 300, damping: 20 };
  const floatSpring = { type: "spring", stiffness: 100, damping: 20 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: floatSpring },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500 min-h-screen flex items-center">
      
      {/* Interactive Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        
        {/* Orbs now have a slower, more liquid animation */}
        <motion.div 
          animate={{ x: [-30, 30, -30], y: [-20, 30, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] -left-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#1774B6]/15 dark:bg-[#1774B6]/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [30, -30, 30], y: [20, -30, 20], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[5%] -right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#F5A422]/15 dark:bg-[#F5A422]/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Typography & Interactive Command Bar */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 text-center lg:text-left pt-10 lg:pt-0"
          >
            {/* Live Indicator Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm mb-8 backdrop-blur-xl">
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-[#D9252A] shadow-sm flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9252A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9252A]"></span>
                </span>
                LIVE
              </span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                OPD Queue Tracking Active
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[1.05] mb-6">
              Healthcare, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] via-[#2ba3fa] to-[#F5A422] animate-gradient-x bg-[length:200%_auto]">
                Reimagined.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience the future of medicine. World-class specialists, cutting-edge technology, and zero-friction queue management.
            </motion.p>

            {/* NEW: Interactive Command / Search Bar */}
            <motion.div variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 mb-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1774B6] to-[#F5A422] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-2xl shadow-xl backdrop-blur-xl transition-all focus-within:ring-2 focus-within:ring-[#1774B6]/50">
                <Search className="h-6 w-6 text-slate-400 ml-3" />
                <input 
                  type="text" 
                  placeholder="Find a doctor, symptom, or department..." 
                  className="w-full bg-transparent border-none px-4 py-3 text-slate-700 dark:text-slate-200 focus:outline-none font-medium placeholder:text-slate-400"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1774B6] hover:bg-[#125d93] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md whitespace-nowrap"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* Secondary Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-lg hover:text-[#1774B6] dark:hover:text-[#4CA1E6] transition-colors group"
              >
                View Departments
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-lg hover:text-[#F5A422] transition-colors group"
              >
                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full group-hover:bg-[#F5A422]/10 transition-colors">
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </div>
                Virtual Tour
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Dashboard Collage (Takes up 6 columns) */}
          <div className="lg:col-span-6 relative h-[550px] sm:h-[650px] w-full mt-12 lg:mt-0 perspective-1000">
            
            {/* Main Center Image with Interactive Tilt/Zoom */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.8, ...interactiveSpring }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[95%] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800 z-10 cursor-pointer group"
            >
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Hospital Interior" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1774B6]/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* INTERACTIVE WIDGET 1: Live OPD Queue (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ delay: 0.5, ...interactiveSpring }}
              className="absolute left-0 top-10 sm:top-16 z-20 cursor-pointer"
            >
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgb(0,0,0,0.4)] border border-white/60 dark:border-slate-700/60 flex flex-col gap-1 min-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Activity className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Live OPD</span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white leading-none">Cardiology</h4>
                <div className="flex items-center gap-2 mt-2 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-2 rounded-xl">
                  <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">12 Min Wait</span>
                </div>
              </div>
            </motion.div>

            {/* INTERACTIVE WIDGET 2: Quick Booking (Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ delay: 0.6, ...interactiveSpring }}
              className="absolute -right-4 sm:-right-8 bottom-32 z-20 cursor-pointer hidden sm:block"
            >
              <div className="bg-gradient-to-br from-[#1774B6] to-[#0e5080] p-5 rounded-3xl shadow-2xl border border-white/10 flex flex-col min-w-[180px] text-white overflow-hidden relative group">
                <div className="absolute -right-6 -top-6 bg-white/10 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-white/20 w-fit p-2.5 rounded-2xl mb-3 backdrop-blur-md">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium text-blue-100">Available Today</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black">14</span>
                  <span className="font-semibold text-blue-200">Slots</span>
                </div>
              </div>
            </motion.div>

            {/* INTERACTIVE WIDGET 3: Patient Trust (Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ delay: 0.7, ...interactiveSpring }}
              className="absolute left-4 sm:-left-4 bottom-12 z-30 cursor-pointer"
            >
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-4 min-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img className="w-11 h-11 rounded-full border-[3px] border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                    <img className="w-11 h-11 rounded-full border-[3px] border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                    <img className="w-11 h-11 rounded-full border-[3px] border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                    <div className="w-11 h-11 rounded-full border-[3px] border-white dark:border-slate-900 bg-[#F5A422] flex items-center justify-center text-white text-xs font-bold z-10 shadow-inner">
                      +10k
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Trusted Patients</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-[#F5A422] text-[#F5A422]" />)}
                    </div>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-300">4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Blueprint SVG */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 right-20 z-0 opacity-40 dark:opacity-20 hidden lg:block pointer-events-none"
            >
              <svg width="150" height="150" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="59.5" stroke="#1774B6" strokeDasharray="4 4"/>
                <circle cx="60" cy="60" r="45.5" stroke="#1774B6" strokeDasharray="4 4"/>
                <path d="M60 10L60 110M110 60L10 60" stroke="#1774B6" strokeWidth="0.5"/>
              </svg>
            </motion.div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x { animation: gradient-x 6s ease infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </section>
  );
}