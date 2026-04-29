import { motion } from 'framer-motion';
import { HeartPulse, Mail, MapPin, Phone, ArrowRight, ArrowUp } from 'lucide-react';

// --- Native Bulletproof SVGs for Social Icons ---
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Hospitals & Labs",
      links: ["Ratnapura HQ", "Colombo Hub", "Kandy Center", "Galle Branch", "Find a Lab Near You"]
    },
    {
      title: "Centers of Excellence",
      links: ["Advanced Cardiology", "Neurology & Spine", "Orthopedics", "Maternity & Pediatrics", "Robotic Surgery"]
    },
    {
      title: "Patient Resources",
      links: ["Book an Appointment", "View Lab Reports", "Patient Portal Guide", "Insurance & Billing", "Heartbeat App"]
    }
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "#" },
    { icon: TwitterIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" }
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-white dark:bg-[#0A0F1C] transition-colors duration-500 border-t border-slate-200 dark:border-white/5">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1774B6]/5 dark:bg-[#1774B6]/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MASSIVE CALL TO ACTION --- */}
        <div className="bg-slate-50 dark:bg-slate-900/50 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Ready to prioritize your health?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Join thousands of patients who trust Singhe Hospitals for world-class, compassionate care.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1774B6] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#125d93] shadow-lg transition-colors whitespace-nowrap"
            >
              Book an Appointment
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              Download App
            </motion.button>
          </div>
        </div>

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-[#1774B6] to-[#4CA1E6] p-2 rounded-xl">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                Singhe<span className="text-[#1774B6] dark:text-[#4CA1E6]">Hospitals</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
              Pioneering the future of healthcare in Sri Lanka with advanced technology, elite specialists, and unmatched empathy.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-3 mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="h-4 w-4 text-[#1774B6] dark:text-[#4CA1E6]" /> +94 45 22 33 444
              </span>
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="h-4 w-4 text-[#1774B6] dark:text-[#4CA1E6]" /> info@singhehospitals.com
              </span>
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin className="h-4 w-4 text-[#1774B6] dark:text-[#4CA1E6]" /> Ratnapura, Sri Lanka
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#1774B6] dark:hover:text-[#4CA1E6] transition-colors inline-flex items-center gap-1 group">
                        {link}
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Subscribe to our newsletter for health tips and hospital updates.
            </p>
            <div className="relative w-full max-w-xs group mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1774B6] hover:bg-[#125d93] text-white p-1.5 rounded-lg transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#1774B6] dark:hover:text-white hover:border-[#1774B6]/50 dark:hover:border-white/30 transition-colors flex items-center justify-center"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Singhe Hospitals PLC. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-colors group"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}