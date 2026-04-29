import { motion } from 'framer-motion';
import { Download, HeartPulse, Activity, ShieldCheck, Zap, Smartphone, CheckCircle2, Calendar } from 'lucide-react';

export default function HeartbeatApp() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const features = [
    { icon: Activity, title: "Live Vitals Tracking", desc: "Monitor your heart rate and vitals in real-time." },
    { icon: Calendar, title: "Instant Bookings", desc: "Skip the queue and book doctors directly." },
    { icon: ShieldCheck, title: "Secure Reports", desc: "Your medical history, encrypted and safe." },
    { icon: Zap, title: "Fast OPD Updates", desc: "Get push notifications for your queue status." },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1774B6]/10 via-[#1774B6]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A422]/10 via-[#F5A422]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left"
          >
            {/* App Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
              <HeartPulse className="h-5 w-5 text-[#D9252A] animate-pulse" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                Introducing Heartbeat
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Your Health, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#F5A422]">
                Now in your Pocket.
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
              Manage your appointments, view lab results, and track your recovery journey securely. Install directly to your device today.
            </motion.p>

            {/* Feature Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto lg:mx-0">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-[#1774B6] dark:text-[#4CA1E6] shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Trust Indicators (Moved Download Button to Phone) */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col items-center sm:items-start text-sm text-slate-500 dark:text-slate-400 gap-2">
                <span className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Verified Secure APK
                </span>
                <span className="flex items-center gap-2 font-medium px-2">
                  <Smartphone className="h-4 w-4 text-slate-400" /> Android 8.0+ Compatible
                </span>
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="mt-4 text-xs text-slate-400 lg:text-left text-center max-w-md mx-auto lg:mx-0">
              *To install, you may need to enable "Install from unknown sources" in your device settings. Download safely from the interactive preview on the right.
            </motion.p>
          </motion.div>

          {/* Right Column - Floating Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center lg:h-[700px]"
          >
            {/* Glowing aura behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1774B6] to-[#F5A422] rounded-full blur-[100px] opacity-20 dark:opacity-30"></div>

            {/* Floating Animation Wrapper */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* --- PURE CSS PHONE MOCKUP FRAME --- */}
              <div className="relative mx-auto border-slate-900 dark:border-black bg-slate-900 dark:bg-black border-[12px] rounded-[3rem] h-[600px] w-[280px] sm:w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                
                {/* iPhone Dynamic Island / Notch */}
                <div className="w-[120px] h-[30px] bg-slate-900 dark:bg-black top-2 rounded-full left-1/2 -translate-x-1/2 absolute z-20 flex items-center justify-end pr-3">
                  <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                </div>
                
                {/* Hardware Buttons (Side) */}
                <div className="h-[46px] w-[4px] bg-slate-800 absolute -left-[16px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[4px] bg-slate-800 absolute -left-[16px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[4px] bg-slate-800 absolute -right-[16px] top-[142px] rounded-r-lg"></div>
                
                {/* Phone Screen Content */}
                <div className="rounded-[2.25rem] overflow-hidden w-full h-full bg-slate-900 relative">
                  
                  {/* Background App Screenshot */}
                  <img 
                    src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop" 
                    alt="Heartbeat App Interface" 
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* UI Overlay & DOWNLOAD BUTTON INSIDE PHONE */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1774B6]/50 to-[#0e4e7e] flex flex-col justify-end p-5 pb-8">
                    
                    {/* Fake App Element */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 text-white mb-6 shadow-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-sm">Live Heart Rate</span>
                        <HeartPulse className="h-5 w-5 text-rose-400 animate-pulse" />
                      </div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">72 <span className="text-lg font-medium opacity-80">bpm</span></div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-4">
                        <div className="w-[72%] h-full bg-rose-400 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.8)]"></div>
                      </div>
                    </div>

                    {/* NEW: Official Download Button Embedded in Phone */}
                    <motion.a 
                      href="/downloads/heartbeat-latest.apk" // Replace with your actual download link
                      download
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-3 bg-white text-[#1774B6] px-5 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.3)] group relative overflow-hidden"
                    >
                      {/* Button shine animation */}
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#1774B6]/10 to-transparent"></div>
                      
                      <div className="bg-[#1774B6]/10 p-2 rounded-xl text-[#1774B6]">
                        <Download className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      <div className="text-left leading-tight">
                        <div className="text-[10px] uppercase tracking-wider opacity-80 font-black">Direct Install</div>
                        <div className="text-base">Download APK</div>
                      </div>
                    </motion.a>

                  </div>

                </div>
              </div>
              {/* --- END PHONE MOCKUP --- */}

              {/* Floating Decorative UI Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 sm:-right-12 top-32 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-30"
              >
                <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2 rounded-full"><ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" /></div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Status</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">Secure</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-6 sm:-left-12 bottom-40 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-30"
              >
                <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-full"><Activity className="h-5 w-5 text-[#1774B6] dark:text-[#4CA1E6]" /></div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Sync</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">Real-time</div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Inline style for the button shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}