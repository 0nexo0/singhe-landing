import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, ChevronRight, Star, Award, ArrowRight, Activity } from 'lucide-react';

export default function EliteSpecialists() {
  const carouselRef = useRef(null);

  // Scroll function for the custom carousel buttons
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- Elite Doctors Roster Data ---
  // PRO TIP: Use images with transparent backgrounds (PNGs) for the best 3D pop-out effect!
  const doctors = [
    {
      id: 1,
      name: "Dr. Aruna Perera",
      role: "Head of Cardiology",
      specialty: "Advanced Cardiology",
      // Using a placeholder with a relatively clean background to simulate the effect
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=500&auto=format&fit=crop", 
      rating: "4.9",
      reviews: "120+",
      nextAvailable: "Tomorrow, 10:30 AM",
      color: "from-rose-500/20 to-rose-500/5",
      badgeColor: "bg-rose-500",
      textColor: "text-rose-500"
    },
    {
      id: 2,
      name: "Dr. Sarah Fernando",
      role: "Lead Neurosurgeon",
      specialty: "Neurology & Spine",
      image: "https://images.unsplash.com/photo-1594824436951-7f12620ce6f8?q=80&w=400&h=500&auto=format&fit=crop",
      rating: "5.0",
      reviews: "85+",
      nextAvailable: "Today, 4:00 PM",
      color: "from-blue-500/20 to-blue-500/5",
      badgeColor: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      id: 3,
      name: "Dr. Rohan Silva",
      role: "Chief Orthopedic Surgeon",
      specialty: "Joints & Mobility",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=500&auto=format&fit=crop",
      rating: "4.8",
      reviews: "200+",
      nextAvailable: "Thursday, 09:00 AM",
      color: "from-emerald-500/20 to-emerald-500/5",
      badgeColor: "bg-emerald-500",
      textColor: "text-emerald-500"
    },
    {
      id: 4,
      name: "Dr. Nisha Jayawardena",
      role: "Senior Consultant",
      specialty: "Pediatrics & Maternity",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=500&auto=format&fit=crop",
      rating: "4.9",
      reviews: "340+",
      nextAvailable: "Wednesday, 11:15 AM",
      color: "from-[#F5A422]/20 to-[#F5A422]/5",
      badgeColor: "bg-[#F5A422]",
      textColor: "text-[#F5A422]"
    },
    {
      id: 5,
      name: "Dr. Kamal Gunaratne",
      role: "Chief Oncologist",
      specialty: "Cancer Institute",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&h=500&auto=format&fit=crop",
      rating: "5.0",
      reviews: "150+",
      nextAvailable: "Friday, 02:00 PM",
      color: "from-purple-500/20 to-purple-500/5",
      badgeColor: "bg-purple-500",
      textColor: "text-purple-500"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#1774B6]/5 dark:bg-[#1774B6]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER & CAROUSEL CONTROLS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 backdrop-blur-md shadow-sm dark:shadow-none">
              <Award className="h-5 w-5 text-[#F5A422]" />
              <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Medical Excellence</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Meet our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">Elite Specialists.</span>
            </motion.h2>
          </div>

          {/* Custom Navigation Arrows */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="h-14 w-14 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#1774B6] hover:text-white dark:hover:bg-[#1774B6] dark:hover:text-white shadow-sm transition-all group"
            >
              <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="h-14 w-14 rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#1774B6] hover:text-white dark:hover:bg-[#1774B6] dark:hover:text-white shadow-sm transition-all group"
            >
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* --- HORIZONTAL CAROUSEL --- */}
        {/* Generous pt-16 ensures the popped-out heads don't get cut off! */}
        <div 
          ref={carouselRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto pb-16 pt-16 px-4 -mx-4 snap-x snap-mandatory custom-hide-scrollbar"
        >
          {doctors.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative shrink-0 w-[300px] h-[420px] snap-center group cursor-pointer"
            >
              
              {/* 1. The Frosted Glass Background Card (Shorter than the container) */}
              <div className="absolute bottom-0 left-0 w-full h-[85%] bg-white dark:bg-[#111827]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#1774B6]/30">
                {/* Specialty Ambient Gradient inside the card */}
                <div className={`absolute inset-0 bg-gradient-to-t ${doctor.color} opacity-50`}></div>
              </div>

              {/* 2. The Doctor's Image (Full height, pops out of the top on hover) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[100%] z-20 pointer-events-none flex items-end justify-center">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-auto object-cover rounded-b-[2rem] origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-translate-y-4"
                  style={{ maskImage: "linear-gradient(to top, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 95%, transparent 100%)" }} // Fades the harsh bottom edge slightly
                />
              </div>

              {/* 3. Static Card Info (Hidden upon hover) */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-30 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm mb-3 ${doctor.textColor}`}>
                  <Activity className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{doctor.specialty}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-1">{doctor.name}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{doctor.role}</p>
              </div>

              {/* 4. SLIDING MAGNETIC CALENDAR (Appears on hover) */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-700 p-5 rounded-[2rem] z-40 opacity-0 translate-y-8 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl flex flex-col gap-4">
                
                {/* Ratings */}
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#F5A422] text-[#F5A422]" />
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{doctor.rating}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">{doctor.reviews} Reviews</span>
                </div>

                {/* Next Available Slot */}
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Next Available Slot</div>
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white bg-slate-50 dark:bg-[#0A0F1C] p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Calendar className={`h-5 w-5 ${doctor.textColor}`} />
                    <span className="font-bold text-sm">{doctor.nextAvailable}</span>
                  </div>
                </div>

                {/* Pulsing Book Button */}
                <button className={`w-full relative flex items-center justify-center gap-2 ${doctor.badgeColor} text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:brightness-110 transition-all overflow-hidden`}>
                  {/* Pulsing indicator dot */}
                  <div className="relative flex h-2.5 w-2.5 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </div>
                  Book Now
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Hides the standard scrollbar but keeps functionality */
        .custom-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}