import { motion } from 'framer-motion';
import { HeartPulse, Brain, Bone, Dna, Baby, ArrowRight, ShieldPlus } from 'lucide-react';

export default function Specialties() {
  // --- Asymmetric Bento Box Data ---
  const specialties = [
    {
      id: 1,
      title: "Advanced Cardiology",
      subtitle: "Heart & Vascular Center",
      desc: "Equipped with South Asia's first robotic catheterization lab for minimally invasive, life-saving heart procedures.",
      icon: HeartPulse,
      gridClass: "md:col-span-2 lg:col-span-8 min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]", 
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      color: "text-rose-500",
      glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]"
    },
    {
      id: 2,
      title: "Neurology",
      subtitle: "Brain & Spine",
      desc: "Comprehensive care for complex neurological disorders using AI-assisted neuro-imaging.",
      icon: Brain,
      gridClass: "md:col-span-1 lg:col-span-4 min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]", 
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
      color: "text-blue-500",
      glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
    },
    {
      id: 3,
      title: "Orthopedics",
      subtitle: "Joint & Mobility",
      desc: "Pioneering robotic joint replacement surgeries ensuring faster recovery and perfect precision.",
      icon: Bone,
      gridClass: "md:col-span-1 lg:col-span-4 min-h-[320px] sm:min-h-[350px]",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      color: "text-emerald-500",
      glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
    },
    {
      id: 4,
      title: "Oncology",
      subtitle: "Cancer Institute",
      desc: "Personalized, targeted cancer therapies guided by international oncology boards.",
      icon: Dna,
      gridClass: "md:col-span-1 lg:col-span-4 min-h-[320px] sm:min-h-[350px]",
      image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=800&auto=format&fit=crop",
      color: "text-purple-500",
      glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
    },
    {
      id: 5,
      title: "Maternity",
      subtitle: "Mother & Child Care",
      desc: "Luxury birthing suites paired with a Level III Neonatal Intensive Care Unit.",
      icon: Baby,
      gridClass: "md:col-span-1 lg:col-span-4 min-h-[320px] sm:min-h-[350px]",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop",
      color: "text-[#F5A422]",
      glow: "group-hover:shadow-[0_0_40px_rgba(245,164,34,0.3)]"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#1774B6]/5 dark:bg-[#1774B6]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 sm:mb-6 backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <ShieldPlus className="h-4 w-4 sm:h-5 sm:w-5 text-[#1774B6] dark:text-[#4CA1E6]" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Centers of Excellence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-[1.1]"
          >
            World-class care, <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">specialized for you.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium px-2 sm:px-0"
          >
            Our hospital is organized into dedicated institutes, bringing together elite specialists and hyper-advanced technology to solve medical challenges.
          </motion.p>
        </div>

        {/* --- BENTO BOX GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {specialties.map((spec, index) => {
            const Icon = spec.icon;
            
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer transition-all duration-500 ${spec.gridClass} ${spec.glow}`}
              >
                {/* 1. Cinematic Background Image - Fixed for image_a49e85.png issues */}
                <div className="absolute inset-0 z-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  {/* Heavy gradient overlay at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent lg:via-black/50 lg:to-black/30 z-10"></div>
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-full object-cover scale-100 lg:scale-110 lg:group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  />
                </div>

                {/* 2. Content Container - Positioned above image */}
                <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-8">
                  
                  {/* Top: Icon & Subtitle Badge */}
                  <div className="flex justify-between items-start gap-4">
                    {/* Icon Box: Glass effect on mobile, color on desktop */}
                    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-colors duration-500 bg-white/20 backdrop-blur-md text-white lg:bg-slate-50 lg:dark:bg-slate-900 lg:${spec.color} lg:group-hover:bg-white/20 lg:group-hover:text-white shrink-0`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    
                    {/* Subtitle Badge: Darkened for readability against light image parts */}
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 lg:bg-slate-50 lg:dark:bg-white/5 lg:text-slate-400 lg:group-hover:text-white/80 transition-colors duration-500">
                      {spec.subtitle}
                    </span>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="mt-12 sm:mt-8">
                    {/* Title: White on mobile, adaptive on desktop */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white lg:text-slate-900 lg:dark:text-white lg:group-hover:text-white transition-colors duration-500 tracking-tight mb-2 sm:mb-3">
                      {spec.title}
                    </h3>
                    
                    {/* Description: High contrast white/90 for mobile */}
                    <p className="text-sm sm:text-base text-white/90 lg:text-slate-500 lg:dark:text-slate-400 lg:group-hover:text-white/90 transition-colors duration-500 font-medium leading-relaxed max-w-lg mb-4 sm:mb-6">
                      {spec.desc}
                    </p>

                    {/* Sliding Hover Button: Always visible on mobile */}
                    <div className="flex items-center gap-2 text-white font-bold opacity-100 lg:opacity-0 lg:translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out text-sm sm:text-base">
                      Explore Department 
                      <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-md">
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 sm:mt-12 lg:mt-16"
        >
          <motion.a 
            href="/specialties"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#1774B6] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#125d93] shadow-lg transition-all"
          >
            Explore All Specialties
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}