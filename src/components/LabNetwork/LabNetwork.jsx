import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, ShieldCheck, Clock, MapPin, ChevronRight, Activity, Search, ArrowRight } from 'lucide-react';

export default function LabNetwork() {
  // --- Expanded 20+ Lab Centers Dataset ---
  const labCenters = [
    { id: 'ratnapura_hq', name: 'Ratnapura HQ Lab', type: 'Reference Lab', desc: 'Main processing center with advanced robotics.', x: 70, y: 65, color: 'bg-[#D9252A]', text: 'text-[#D9252A]' },
    { id: 'colombo_main', name: 'Colombo Main Hub', type: 'Stat Lab', desc: 'Rapid 24/7 processing for critical care.', x: 35, y: 40, color: 'bg-[#1774B6]', text: 'text-[#1774B6]' },
    { id: 'kandy_center', name: 'Kandy Regional Center', type: 'Processing Lab', desc: 'Central province hub with courier network.', x: 45, y: 25, color: 'bg-[#F5A422]', text: 'text-[#F5A422]' },
    { id: 'galle_branch', name: 'Galle Branch', type: 'Stat Lab', desc: 'Southern province regional testing facility.', x: 25, y: 80, color: 'bg-[#89C541]', text: 'text-[#89C541]' },
    { id: 'jaffna', name: 'Jaffna Outpost', type: 'Collection Center', desc: 'Northern province collection and basic testing.', x: 15, y: 10, color: 'bg-purple-500', text: 'text-purple-500' },
    { id: 'trinco', name: 'Trincomalee Hub', type: 'Processing Lab', desc: 'Eastern seaboard primary testing center.', x: 80, y: 20, color: 'bg-[#1774B6]', text: 'text-[#1774B6]' },
    { id: 'batticaloa', name: 'Batticaloa Center', type: 'Collection Center', desc: 'Serving the eastern coastal region.', x: 90, y: 45, color: 'bg-[#89C541]', text: 'text-[#89C541]' },
    { id: 'kurunegala', name: 'Kurunegala Lab', type: 'Processing Lab', desc: 'North Western province main hub.', x: 30, y: 30, color: 'bg-[#F5A422]', text: 'text-[#F5A422]' },
    { id: 'anuradhapura', name: 'Anuradhapura Hub', type: 'Stat Lab', desc: 'North Central regional reference lab.', x: 40, y: 15, color: 'bg-[#D9252A]', text: 'text-[#D9252A]' },
    { id: 'badulla', name: 'Badulla Branch', type: 'Collection Center', desc: 'Uva province primary collection point.', x: 60, y: 45, color: 'bg-purple-500', text: 'text-purple-500' },
    { id: 'negombo', name: 'Negombo Outpost', type: 'Collection Center', desc: 'Coastal western collection point.', x: 20, y: 35, color: 'bg-[#89C541]', text: 'text-[#89C541]' },
    { id: 'matara', name: 'Matara Center', type: 'Processing Lab', desc: 'Deep south processing facility.', x: 40, y: 90, color: 'bg-[#F5A422]', text: 'text-[#F5A422]' },
    { id: 'gampaha', name: 'Gampaha Lab', type: 'Stat Lab', desc: 'High-volume rapid testing center.', x: 28, y: 45, color: 'bg-[#1774B6]', text: 'text-[#1774B6]' },
    { id: 'kalutara', name: 'Kalutara Branch', type: 'Collection Center', desc: 'Western coastal collection hub.', x: 20, y: 60, color: 'bg-[#89C541]', text: 'text-[#89C541]' },
    { id: 'kegalle', name: 'Kegalle Center', type: 'Collection Center', desc: 'Connecting western and central hubs.', x: 40, y: 40, color: 'bg-purple-500', text: 'text-purple-500' },
    { id: 'matale', name: 'Matale Outpost', type: 'Collection Center', desc: 'Central province northern collection.', x: 50, y: 35, color: 'bg-[#89C541]', text: 'text-[#89C541]' },
    { id: 'nuwara_eliya', name: 'Nuwara Eliya Lab', type: 'Stat Lab', desc: 'High-altitude rapid testing facility.', x: 55, y: 50, color: 'bg-[#1774B6]', text: 'text-[#1774B6]' },
    { id: 'puttalam', name: 'Puttalam Branch', type: 'Collection Center', desc: 'North Western coastal collection.', x: 15, y: 25, color: 'bg-purple-500', text: 'text-purple-500' },
    { id: 'vavuniya', name: 'Vavuniya Center', type: 'Processing Lab', desc: 'Northern processing hub.', x: 35, y: 10, color: 'bg-[#F5A422]', text: 'text-[#F5A422]' },
    { id: 'polonnaruwa', name: 'Polonnaruwa Hub', type: 'Stat Lab', desc: 'North Central rapid response lab.', x: 65, y: 30, color: 'bg-[#D9252A]', text: 'text-[#D9252A]' },
  ];

  const [activeLocation, setActiveLocation] = useState('ratnapura_hq');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLabs = useMemo(() => {
    return labCenters.filter(lab => 
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      lab.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    if (filteredLabs.length > 0 && !filteredLabs.find(l => l.id === activeLocation)) {
      setActiveLocation(filteredLabs[0].id);
    }
  }, [filteredLabs, activeLocation]);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 perspective-[2000px]">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#1774B6]/10 dark:bg-[#1774B6]/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#D9252A]/5 dark:bg-[#D9252A]/10 rounded-full blur-[70px] sm:blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight"
          >
            Island-Wide <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">Diagnostic Network</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium px-2"
          >
            With our state-of-the-art main laboratory and 20+ collection centers, highly accurate test results are never far away.
          </motion.p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start mb-12 sm:mb-16">
          
          {/* LEFT SIDE - Search & Location List */}
          <div className="xl:col-span-5 flex flex-col gap-4 z-20 order-2 xl:order-1">
            
            {/* Search Bar */}
            <div className="relative shadow-sm rounded-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search location or lab type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl pl-12 pr-4 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 backdrop-blur-md transition-all text-sm sm:text-base"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">
                {filteredLabs.length} Labs
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex flex-col gap-2 sm:gap-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar relative">
              <AnimatePresence>
                {filteredLabs.length > 0 ? (
                  filteredLabs.map((lab) => {
                    const isActive = activeLocation === lab.id;
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
                        key={lab.id}
                        onClick={() => setActiveLocation(lab.id)}
                        className={`relative p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden flex items-center justify-between group shrink-0 ${
                          isActive 
                            ? 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-lg border' 
                            : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/40 border'
                        } backdrop-blur-md`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                          <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm ${
                            isActive ? lab.color : 'bg-slate-200 dark:bg-slate-800'
                          }`}>
                            <MapPin className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                          </div>
                          <div>
                            <h4 className={`text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                              {lab.name}
                            </h4>
                            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">{lab.type}</p>
                          </div>
                        </div>
                        
                        <ChevronRight className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 relative z-10 ${
                          isActive ? `opacity-100 translate-x-0 ${lab.text}` : 'opacity-0 -translate-x-4 text-slate-400'
                        }`} />
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 text-slate-500">
                    <Search className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">No facilities found matching "{searchQuery}"</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Stats Bento Row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 rounded-2xl backdrop-blur-md shadow-sm">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 dark:text-emerald-400 mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-1">ISO 15189</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Accredited Labs</div>
              </div>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 rounded-2xl backdrop-blur-md shadow-sm">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#1774B6] dark:text-[#4CA1E6] mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-1">24 / 7</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Round-the-clock testing</div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Isometric Map (Hidden on mobile or scaled) */}
          <div className="xl:col-span-7 h-[350px] sm:h-[500px] lg:h-[600px] w-full relative flex items-center justify-center perspective-[2000px] order-1 xl:order-2">
            
            <motion.div 
              initial={{ rotateX: 65, rotateZ: -40, scale: 0.6, opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] transform-style-3d"
              style={{ rotateX: "60deg", rotateZ: "-35deg" }}
            >
              
              {/* Glowing Base Grid */}
              <div className="absolute inset-0 bg-[#1774B6]/5 dark:bg-[#1774B6]/10 border border-[#1774B6]/20 dark:border-[#1774B6]/30 rounded-3xl shadow-[0_0_30px_rgba(23,116,182,0.1)] overflow-hidden z-0">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(76, 161, 230, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 161, 230, 0.15) 1px, transparent 1px)', backgroundSize: '30px 30px sm:40px 40px' }}></div>
              </div>

              {/* Map Markers */}
              <AnimatePresence>
                {filteredLabs.map((lab) => {
                  const isActive = activeLocation === lab.id;
                  return (
                    <motion.div 
                      key={lab.id} 
                      className="absolute transform-style-3d z-30"
                      style={{ left: `${lab.x}%`, top: `${lab.y}%` }}
                    >
                      {/* Base Dot */}
                      <div 
                        onClick={() => setActiveLocation(lab.id)}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-500 ${isActive ? lab.color : 'bg-slate-300 dark:bg-slate-600'} ${isActive ? `shadow-[0_0_20px_rgba(217,37,42,0.8)] scale-125` : 'hover:scale-150'}`}
                      >
                        {isActive && <div className={`absolute inset-0 rounded-full animate-ping ${lab.color} opacity-75`}></div>}
                      </div>

                      {/* Standing Card */}
                      <motion.div 
                        animate={{ height: isActive ? (window.innerWidth < 640 ? 80 : 120) : 0, opacity: isActive ? 1 : 0 }}
                        className={`absolute bottom-1 left-[-1px] w-[2px] origin-bottom pointer-events-none ${isActive ? lab.color : 'bg-transparent'}`}
                        style={{ transform: 'rotateX(-90deg) rotateY(-40deg)' }} 
                      >
                        {isActive && (
                          <motion.div 
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 sm:w-44 bg-white/95 dark:bg-[#0A0F1C]/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col items-center text-center z-50 pointer-events-auto"
                          >
                            <h5 className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-xs mb-1">{lab.name}</h5>
                            <p className="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 leading-tight hidden sm:block">{lab.desc}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] sm:border-[6px] border-transparent border-t-white/95 dark:border-t-[#0A0F1C]/95"></div>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <motion.a 
            href="/all-laboratories"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:shadow-xl transition-all"
          >
            Explore Full Network
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#1774B6] dark:text-[#4CA1E6] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[2000px\\] { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.3); border-radius: 10px; }
      `}} />
    </section>
  );
}