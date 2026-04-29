import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Brain, Bone, Baby, PhoneCall, Search, User, Mail, MapPin } from 'lucide-react';
import singheLogo from '../../assets/img/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      {/* Top Utility Bar (Hidden on mobile)[cite: 11] */}
      <div className={`w-full bg-slate-900 text-slate-300 text-xs transition-all duration-500 overflow-hidden hidden md:block ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail className="h-3.5 w-3.5 text-[#F5A422]" /> info@singhehospitals.com
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin className="h-3.5 w-3.5 text-[#F5A422]" /> Ratnapura, Sri Lanka
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
              <User className="h-3.5 w-3.5" /> Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar[cite: 11] */}
      <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-0 md:top-10'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-2 sm:mt-4">
          <nav className={`w-full rounded-full border border-white/40 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-2xl' : 'bg-white/70 shadow-lg'}`}>
            <div className="px-3 py-1.5 sm:px-6 sm:py-3">
              <div className="flex justify-between items-center">
                
                {/* Logo Section[cite: 11] */}
                <div className="flex items-center">
                  <a href="#home" className="flex items-center">
                      <img src={singheLogo} alt="Logo" className="h-8 sm:h-11 w-auto" />
                  </a>
                </div>

                {/* Desktop Navigation (Hidden on small screens) */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="relative px-1 py-2" onMouseEnter={() => setActiveMenu(link.name)} onMouseLeave={() => setActiveMenu(null)}>
                      <a href={link.href} className="px-4 py-2 rounded-full text-slate-700 hover:text-[#1774B6] hover:bg-[#1774B6]/5 font-semibold transition-all flex items-center gap-1">
                        {link.name}
                        {link.subLinks && <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === link.name ? 'rotate-180' : ''}`} />}
                      </a>
                      
                      {/* Desktop Mega Menu[cite: 11] */}
                      <AnimatePresence>
                        {link.subLinks && activeMenu === link.name && (
                          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[400px]">
                            <div className="bg-white rounded-3xl shadow-2xl border p-3 grid grid-cols-2 gap-2">
                              {link.subLinks.map((sub) => (
                                <a key={sub.name} href={sub.href} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50">
                                  <div className={`p-2 rounded-xl ${sub.bg} ${sub.color}`}><sub.icon className="h-5 w-5" /></div>
                                  <div><h4 className="text-sm font-bold text-slate-900">{sub.name}</h4><p className="text-[10px] text-slate-500">{sub.desc}</p></div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Right Side Actions[cite: 11] */}
                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="hidden lg:flex items-center mr-2">
                    <motion.div animate={{ width: isSearchOpen ? 180 : 40 }} className="flex items-center rounded-full bg-slate-100/50 overflow-hidden">
                      <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2.5 text-slate-600"><Search className="h-5 w-5" /></button>
                      {isSearchOpen && <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none text-sm w-full pr-4" />}
                    </motion.div>
                  </div>

                  <a href="tel:1800SINGHE" className="hidden sm:flex items-center gap-2 text-slate-700 font-bold px-3 py-2 rounded-full hover:bg-slate-100">
                    <PhoneCall className="h-4 w-4 text-[#1774B6]" />
                    <span className="hidden xl:inline">1-800-SINGHE</span>
                  </a>

                  <motion.button whileTap={{ scale: 0.95 }} className="bg-[#1774B6] text-white px-4 sm:px-7 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-md">
                    Book Visit
                  </motion.button>

                  {/* Mobile Menu Toggle[cite: 11] */}
                  <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-600 rounded-full hover:bg-slate-100">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu[cite: 11] */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0 }} className="lg:hidden absolute top-full left-0 w-full origin-top px-4 mt-2">
              <div className="bg-white rounded-3xl border shadow-2xl p-4 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-slate-50 last:border-none">
                    {link.subLinks ? (
                      <div>
                        <button onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)} className="flex items-center justify-between w-full py-4 px-2 font-bold text-slate-800">
                          {link.name} <ChevronDown className={`h-5 w-5 transition-transform ${mobileDropdownOpen === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileDropdownOpen === link.name && (
                          <div className="pl-4 pb-4 space-y-3">
                            {link.subLinks.map((sub) => (
                              <a key={sub.name} href={sub.href} className="flex items-center gap-3"><sub.icon className={`h-5 w-5 ${sub.color}`} /> <span className="font-semibold text-slate-600">{sub.name}</span></a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a href={link.href} className="block py-4 px-2 font-bold text-slate-800">{link.name}</a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}