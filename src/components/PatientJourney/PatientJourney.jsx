import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Quote, ShieldCheck, HeartPulse, Brain, Baby, ArrowRight, Hand } from 'lucide-react';

// --- Trust Metrics Data ---
const metrics = [
  { id: 1, value: "50k+", label: "Patients Treated", icon: ShieldCheck, color: "text-emerald-500 dark:text-emerald-400" },
  { id: 2, value: "4.9/5", label: "Average Rating", icon: Star, color: "text-[#F5A422]" },
];

// --- Patient Testimonials Data ---
const initialTestimonials = [
  {
    id: 1,
    name: "Amali Perera",
    treatment: "Open Heart Surgery",
    department: "Cardiology",
    icon: HeartPulse,
    quote: "The level of care I received was beyond my expectations. The surgeons were brilliant, but the nurses who held my hand through recovery are the real heroes. I have my life back.",
    rating: 5,
    color: "from-[#D9252A]", // Red glow
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Rajith Silva",
    treatment: "Spinal Decompression",
    department: "Neurology",
    icon: Brain,
    quote: "After years of chronic back pain, the neurology team accurately diagnosed and treated me in weeks. The facility feels like a luxury hotel, not a hospital. Absolutely incredible.",
    rating: 5,
    color: "from-[#1774B6]", // Blue glow
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Nadeeka Fernando",
    treatment: "Maternity Care",
    department: "Pediatrics & Maternity",
    icon: Baby,
    quote: "Having my first child here was a dream. The midwives were attentive 24/7, and the private suite was immaculate. I felt completely safe and supported the entire time.",
    rating: 5,
    color: "from-[#F5A422]", // Orange/Yellow glow
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Dinesh Kumar",
    treatment: "Knee Replacement",
    department: "Orthopedics",
    icon: ShieldCheck,
    quote: "As a medical professional myself, I have high standards. Singhe Hospitals exceeded all of them. The robotic-assisted surgery cut my recovery time in half.",
    rating: 5,
    color: "from-[#89C541]", // Green glow
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function PatientJourney() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [hasSwiped, setHasSwiped] = useState(false);

  // --- Drag Physics & Calculations ---
  const x = useMotionValue(0);
  
  // Map the drag distance (x) to a rotation angle (-15deg to +15deg)
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  
  // Map the drag distance to opacity
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const handleDragEnd = (event, info) => {
    // If dragged more than 100px or flicked fast, trigger a swipe
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
      setHasSwiped(true);
      setTestimonials((prev) => {
        const newCards = [...prev];
        const swipedCard = newCards.shift(); // Remove top card
        newCards.push(swipedCard); // Push to bottom of stack
        return newCards;
      });
    }
  };

  // Determine the current active color for the background glow
  const activeColorClass = testimonials[0].color;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-700 perspective-[2000px]">
      
      {/* --- DYNAMIC AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-1000">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        
        {/* Dynamic Glow Element that matches the top card */}
        <div className={`absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${activeColorClass} to-transparent rounded-full blur-[120px] dark:blur-[150px] opacity-15 dark:opacity-30 transition-all duration-1000`}></div>
        
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1774B6]/10 rounded-full blur-[100px] dark:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE - Trust & Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6 z-20 text-center lg:text-left">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-2 backdrop-blur-md mx-auto lg:mx-0 w-fit shadow-sm dark:shadow-none">
              <Star className="h-4 w-4 text-[#F5A422] fill-[#F5A422]" />
              <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wider uppercase">Patient Stories</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Don't just take <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 dark:from-white dark:to-slate-500">our word for it.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto lg:mx-0">
              Read the real experiences of patients who trusted us with their lives. Swipe through to explore their journeys to recovery.
            </motion.p>

            {/* Metrics Row */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-4 mt-4 max-w-md mx-auto lg:mx-0">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.id} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl backdrop-blur-sm flex flex-col gap-2 shadow-sm dark:shadow-none">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                    <div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white">{metric.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">{metric.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT SIDE - 3D Swipeable Card Stack */}
          <div className="lg:col-span-7 h-[500px] sm:h-[600px] w-full relative flex items-center justify-center perspective-[2000px]">
            
            {/* The Card Stack Container */}
            <div className="relative w-full max-w-[420px] h-[450px] flex items-center justify-center">
              
              {/* Swipe Hint (Disappears after first swipe) */}
              <AnimatePresence>
                {!hasSwiped && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium text-sm animate-pulse z-50 pointer-events-none"
                  >
                    <Hand className="h-4 w-4" /> Swipe cards to explore
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reverse map to ensure the first item is rendered last (on top in DOM) */}
              {[...testimonials].reverse().map((testimonial, index, array) => {
                const isTop = index === array.length - 1;
                const stackIndex = array.length - 1 - index; 

                return (
                  <motion.div
                    key={testimonial.id}
                    layout 
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }} 
                    dragElastic={0.8}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    style={isTop ? { x, rotate, opacity } : {}}
                    animate={{
                      top: stackIndex * 25, 
                      scale: 1 - stackIndex * 0.05, 
                      zIndex: index, 
                      opacity: stackIndex > 2 ? 0 : 1 - stackIndex * 0.2, 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute w-full h-full bg-white/90 dark:bg-[#111827]/90 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-8 flex flex-col justify-between overflow-hidden ${isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-auto'}`}
                  >
                    
                    {/* Massive Background Quote Icon Watermark */}
                    <Quote className="absolute -top-6 -right-6 w-48 h-48 text-slate-900/5 dark:text-white/5 -rotate-12 pointer-events-none transition-colors duration-500" />

                    {/* Card Header (Department Badge) */}
                    <div className="flex justify-between items-start relative z-10">
                      <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full transition-colors duration-500">
                        {<testimonial.icon className="h-4 w-4 text-slate-600 dark:text-white" />}
                        <span className="text-[10px] font-bold text-slate-600 dark:text-white uppercase tracking-wider">{testimonial.department}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#F5A422] text-[#F5A422]" />
                        ))}
                      </div>
                    </div>

                    {/* Card Body (The Quote) */}
                    <div className="relative z-10 my-6 flex-1 flex items-center">
                      <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed transition-colors duration-500">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Card Footer (Patient Info) */}
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-slate-100 dark:border-white/10 transition-colors duration-500">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 dark:border-white/20" />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight transition-colors duration-500">{testimonial.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">{testimonial.treatment}</p>
                      </div>
                    </div>
                    
                    {/* Visual Hint indicating it can be grabbed */}
                    {isTop && (
                      <div className="absolute bottom-4 right-4 h-8 w-8 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center animate-bounce transition-colors duration-500">
                        <ArrowRight className="h-4 w-4 text-slate-400 dark:text-white/50" />
                      </div>
                    )}

                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}