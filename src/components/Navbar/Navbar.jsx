import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, ChevronDown, Heart, Brain, Bone, Baby, PhoneCall, Search, User, Mail, MapPin } from 'lucide-react';
import singheLogo from '../../assets/img/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !scrolled) setScrolled(true);
      else if (window.scrollY <= 20 && scrolled) setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      subLinks: [
        { name: 'Cardiology', desc: 'Expert heart care & surgery', icon: Heart, href: '#cardiology', color: 'text-[#D9252A]', bg: 'bg-[#D9252A]/10' },
        { name: 'Neurology', desc: 'Advanced brain treatments', icon: Brain, href: '#neurology', color: 'text-[#1774B6]', bg: 'bg-[#1774B6]/10' },
        { name: 'Orthopedics', desc: 'Bone & joint specialists', icon: Bone, href: '#orthopedics', color: 'text-[#F5A422]', bg: 'bg-[#F5A422]/10' },
        { name: 'Pediatrics', desc: 'Compassionate care for kids', icon: Baby, href: '#pediatrics', color: 'text-[#89C541]', bg: 'bg-[#89C541]/10' },
      ]
    },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  return (
    <>
      {/* --- NEW: Top Utility Bar (Hides on Scroll) --- */}
      <div 
        className={`w-full bg-slate-900 text-slate-300 text-xs sm:text-sm transition-all duration-500 overflow-hidden hidden md:block ${
          scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail className="h-3.5 w-3.5 text-[#F5A422]" /> info@singhehospitals.com
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin className="h-3.5 w-3.5 text-[#F5A422]" /> 123 Health Ave, Medical District
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#89C541] font-semibold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#89C541] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#89C541]"></span>
              </span>
              Emergency: 24/7 Open
            </span>
            <div className="h-4 w-px bg-slate-700"></div>
            <button className="flex items-center gap-2 hover:text-white transition-colors font-medium">
              <User className="h-3.5 w-3.5" /> Patient Portal
            </button>
          </div>
        </div>
      </div>

      {/* --- Main Sticky Navbar --- */}
      <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-0 md:top-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
          <nav 
            className={`w-full rounded-full border border-white/40 backdrop-blur-xl transition-all duration-500 ${
              scrolled ? 'bg-white/95 shadow-2xl shadow-[#1774B6]/10' : 'bg-white/70 shadow-lg shadow-[#1774B6]/5'
            }`}
          >
            <div className="px-4 py-2 sm:px-6 sm:py-3">
              <div className="flex justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex items-center cursor-pointer">
                  <a href="#home" className="flex items-center gap-3 group">
                      <img 
                          src={singheLogo} 
                          alt="Singhe Hospitals Logo" 
                          className="h-9 sm:h-11 w-auto group-hover:scale-105 transition-transform duration-300" 
                      />
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-2">
                  {navLinks.map((link) => (
                    <div 
                      key={link.name} 
                      className="relative px-2 py-2"
                      onMouseEnter={() => setActiveMenu(link.name)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      {link.subLinks ? (
                        <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${activeMenu === link.name ? 'text-[#1774B6] bg-[#1774B6]/10' : 'text-slate-700 hover:text-[#1774B6] hover:bg-[#1774B6]/5'}`}>
                          {link.name}
                          <motion.div animate={{ rotate: activeMenu === link.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="px-4 py-2 rounded-full text-slate-700 hover:text-[#1774B6] hover:bg-[#1774B6]/5 font-semibold transition-all duration-300"
                        >
                          {link.name}
                        </a>
                      )}

                      {/* --- NEW: Framer Motion Mega Menu --- */}
                      <AnimatePresence>
                        {link.subLinks && activeMenu === link.name && (
                          <motion.div 
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[420px] origin-top"
                          >
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100 p-3 grid grid-cols-2 gap-2 overflow-hidden relative">
                              {/* Decorative gradient blur inside menu */}
                              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1774B6]/5 rounded-full blur-2xl"></div>
                              
                              {link.subLinks.map((subLink) => {
                                const Icon = subLink.icon;
                                return (
                                  <a
                                    key={subLink.name}
                                    href={subLink.href}
                                    className="group/item flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors relative z-10"
                                  >
                                    <div className={`p-2.5 rounded-xl ${subLink.bg} ${subLink.color} group-hover/item:scale-110 group-hover/item:shadow-md transition-all duration-300`}>
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <h4 className={`text-sm font-bold text-slate-900 group-hover/item:${subLink.color} transition-colors`}>
                                        {subLink.name}
                                      </h4>
                                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                        {subLink.desc}
                                      </p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-2">
                  
                  {/* --- NEW: Interactive Expanding Search --- */}
                  <div className="flex items-center justify-end mr-2 relative">
                    <motion.div 
                      initial={false}
                      animate={{ width: isSearchOpen ? 220 : 40 }}
                      className={`flex items-center rounded-full overflow-hidden transition-colors ${isSearchOpen ? 'bg-slate-100 border border-slate-200' : 'bg-transparent'}`}
                    >
                      <button 
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`p-2.5 rounded-full transition-colors z-10 ${isSearchOpen ? 'text-[#1774B6]' : 'text-slate-600 hover:text-[#1774B6] hover:bg-[#1774B6]/10'}`}
                      >
                        {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                      </button>
                      <input 
                        type="text" 
                        placeholder="Search doctors..." 
                        className={`bg-transparent border-none focus:outline-none text-sm text-slate-700 w-full pr-4 py-2 ${isSearchOpen ? 'block' : 'hidden'}`}
                      />
                    </motion.div>
                  </div>

                  {/* Phone CTA */}
                  <a href="tel:1800SINGHE" className="flex items-center gap-2 text-slate-700 font-bold hover:text-[#1774B6] hover:bg-[#1774B6]/10 px-4 py-2.5 rounded-full transition-colors">
                    <div className="bg-[#1774B6]/10 p-1.5 rounded-full text-[#1774B6]">
                      <PhoneCall className="h-4 w-4" />
                    </div>
                    <span>1-800-SINGHE</span>
                  </a>

                  {/* Tactile Button */}
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#1774B6] hover:bg-[#F5A422] text-white px-7 py-3 rounded-full font-bold transition-colors duration-300 shadow-lg shadow-[#1774B6]/30 hover:shadow-[#F5A422]/40"
                  >
                    Book Visit
                  </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center pr-1 gap-2">
                  <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-slate-600 hover:text-[#1774B6] rounded-full hover:bg-slate-100">
                    <Search className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-slate-600 hover:text-[#1774B6] focus:outline-none p-2 rounded-full hover:bg-[#1774B6]/10 transition-colors"
                  >
                    {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* --- Mobile Search Bar Expansion --- */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mx-4 mt-2"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2 flex items-center">
                <Search className="h-5 w-5 text-slate-400 ml-2" />
                <input type="text" placeholder="Search for doctors, services..." className="w-full p-2 focus:outline-none text-slate-700" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Mobile Navigation Menu --- */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-400 ease-in-out origin-top ${
            isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl mx-4 mt-2 px-4 py-6 max-h-[75vh] overflow-y-auto">
            
            {/* Mobile Patient Portal Link */}
            <div className="mb-4 pb-4 border-b border-slate-100">
              <button className="flex items-center gap-3 w-full p-3 rounded-2xl bg-slate-50 text-slate-700 font-bold hover:text-[#1774B6]">
                <div className="bg-[#1774B6]/10 p-2 rounded-xl text-[#1774B6]">
                  <User className="h-5 w-5" />
                </div>
                Access Patient Portal
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(link.name)}
                          className="flex items-center justify-between w-full px-4 py-4 text-lg font-bold text-slate-800 hover:text-[#1774B6] hover:bg-[#1774B6]/5 rounded-2xl transition-colors"
                        >
                          {link.name}
                          <motion.div animate={{ rotate: mobileDropdownOpen === link.name ? 180 : 0 }}>
                            <ChevronDown className="h-5 w-5 text-slate-400" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-2 pb-4 pt-2 space-y-2">
                                {link.subLinks.map((subLink) => {
                                  const Icon = subLink.icon;
                                  return (
                                    <a
                                      key={subLink.name}
                                      href={subLink.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                                    >
                                      <div className={`p-2.5 rounded-xl ${subLink.bg} ${subLink.color}`}>
                                        <Icon className="h-5 w-5" />
                                      </div>
                                      <span className="font-bold text-slate-700">{subLink.name}</span>
                                    </a>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-4 text-lg font-bold text-slate-800 hover:text-[#1774B6] hover:bg-[#1774B6]/5 rounded-2xl transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
              ))}
              <div className="pt-6 pb-2">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#1774B6] text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#1774B6]/20 transition-colors hover:bg-[#F5A422]"
                >
                  Book Visit
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}