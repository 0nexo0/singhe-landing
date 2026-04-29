import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Crosshair, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function TechArsenal() {
  // Reference for the entire scrollable section
  const sectionRef = useRef(null);

  // Track the scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // --- Cinematic Background Animations ---
  // The machine slowly scales up by 30% as you scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  // The machine fades out slightly at the very end to transition to the next section
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  const features = [
    {
      id: 1,
      title: "Sub-Millimeter Precision",
      desc: "Our robotic surgical arms filter out human tremors, allowing for impossible precision in delicate neuro and cardiac procedures.",
      icon: Crosshair,
      align: "justify-start md:pr-[50%]", // Floats on the left
      glow: "shadow-[0_0_40px_rgba(23,116,182,0.3)]"
    },
    {
      id: 2,
      title: "AI-Powered Diagnostics",
      desc: "The integrated AI processor analyzes real-time tissue data during surgery, highlighting anomalies invisible to the human eye.",
      icon: Cpu,
      align: "justify-end md:pl-[50%]", // Floats on the right
      glow: "shadow-[0_0_40px_rgba(217,37,42,0.3)]"
    },
    {
      id: 3,
      title: "Accelerated Recovery",
      desc: "Smaller incisions and unmatched precision mean significantly less trauma. Patients return home in days, not weeks.",
      icon: Activity,
      align: "justify-start md:pr-[50%]", // Floats on the left
      glow: "shadow-[0_0_40px_rgba(137,197,65,0.3)]"
    }
  ];

  return (
    // The section is naturally tall because of the content inside it
    <section ref={sectionRef} className="relative bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500">

      {/* --- THE STICKY BACKGROUND STAGE --- */}
      {/* This stays pinned to the screen while you scroll through the section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1774B6]/10 dark:bg-[#1774B6]/20 rounded-full blur-[150px]"></div>

        {/* Centerpiece Image (The Machine) */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative z-0 w-full max-w-6xl px-4 flex items-center justify-center"
        >
          {/* Vignette Overlay to ensure text always stays readable over the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/80 dark:from-[#0A0F1C] dark:via-transparent dark:to-[#0A0F1C] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-slate-50/80 dark:from-[#0A0F1C] dark:via-transparent dark:to-[#0A0F1C] z-10"></div>

          {/* High-Tech Medical Equipment Image (Use a transparent PNG if you have one!) */}
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop"
            alt="Robotic Surgery System"
            className="w-full h-auto max-h-[80vh] object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
          />
        </motion.div>
      </div>

      {/* --- THE SCROLLING CONTENT (Overlays the sticky background) --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[10vh]">

        {/* Intro Screen (100vh tall to cover the first scroll) */}
        <div className="h-screen flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <Zap className="h-5 w-5 text-[#1774B6] dark:text-[#4CA1E6]" />
            <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">The Tech Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6"
          >
            The Future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">Surgery is Here.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 font-medium animate-pulse"
          >
            Scroll to explore our next-generation robotic suite ↓
          </motion.p>
        </div>

        {/* Floating Feature Blurbs */}
        <div className="flex flex-col">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              // Each feature gets its own screen-height container so they space out perfectly
              <div key={feature.id} className={`h-[80vh] flex items-center ${feature.align}`}>
                <motion.div
                  initial={{ opacity: 0, y: 100, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -100, scale: 0.9 }}
                  // amount: 0.5 means the animation triggers when the card is 50% in view
                  viewport={{ amount: 0.5, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full max-w-md bg-white/90 dark:bg-[#111827]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-8 rounded-[2rem] shadow-xl ${feature.glow}`}
                >
                  <div className="bg-slate-100 dark:bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 dark:border-white/5">
                    <Icon className="h-7 w-7 text-[#1774B6] dark:text-[#4CA1E6]" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}