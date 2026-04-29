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
      gridClass: "lg:col-span-8 min-h-[350px] lg:min-h-[450px]", // Massive double-wide card
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
      gridClass: "lg:col-span-4 min-h-[350px] lg:min-h-[450px]", 
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
      gridClass: "lg:col-span-4 min-h-[350px]",
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
      gridClass: "lg:col-span-4 min-h-[350px]",
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
      gridClass: "lg:col-span-4 min-h-[350px]",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop",
      color: "text-[#F5A422]",
      glow: "group-hover:shadow-[0_0_40px_rgba(245,164,34,0.3)]"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1774B6]/5 dark:bg-[#1774B6]/10 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <ShieldPlus className="h-5 w-5 text-[#1774B6] dark:text-[#4CA1E6]" />
            <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Centers of Excellence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight"
          >
            World-class care, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">specialized for you.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="text-lg text-slate-600 dark:text-slate-400 font-medium"
          >
            Our hospital is organized into dedicated institutes, bringing together elite specialists and hyper-advanced technology to solve the most complex medical challenges.
          </motion.p>
        </div>

        {/* --- BENTO BOX GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {specialties.map((spec, index) => {
            const Icon = spec.icon;
            
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer transition-all duration-500 ${spec.gridClass} ${spec.glow}`}
              >
                {/* 1. The Cinematic Background Image (Hidden by default, reveals on hover) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10"></div>
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  />
                </div>

                {/* 2. The Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  
                  {/* Top: Icon & Subtitle */}
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${spec.color} bg-slate-50 dark:bg-slate-900 group-hover:bg-white/20 group-hover:backdrop-blur-md group-hover:text-white`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-white/70 transition-colors duration-500 bg-slate-50 dark:bg-white/5 group-hover:bg-black/20 group-hover:backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-white/20">
                      {spec.subtitle}
                    </span>
                  </div>

                  {/* Bottom: Title, Desc, and Reveal Button */}
                  <div className="mt-8">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-white transition-colors duration-500 tracking-tight mb-3">
                      {spec.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 group-hover:text-white/80 transition-colors duration-500 font-medium leading-relaxed max-w-lg mb-6">
                      {spec.desc}
                    </p>

                    {/* Sliding Hover Button */}
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2 text-white font-bold opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        Explore Department 
                        <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-md">
                          <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- EXPLORE ALL SPECIALTIES BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <motion.a 
            href="/specialties" // Adjust link to your all specialties page
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-[#1774B6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#125d93] shadow-lg transition-all"
          >
            Explore All Specialties
            <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}