import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Phone, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate a brief sending animation before triggering the mailto link
    setTimeout(() => {
      setFormState('success');
      
      // Construct the mailto link to open the user's email client
      const subject = encodeURIComponent(`New Contact Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.description}`);
      window.location.href = `mailto:info@singhehospitals.com?subject=${subject}&body=${body}`;

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', description: '' });
        setFormState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 perspective-[2000px]">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#1774B6]/10 dark:bg-[#1774B6]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D9252A]/5 dark:bg-[#D9252A]/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
            <Mail className="h-5 w-5 text-[#1774B6] dark:text-[#4CA1E6]" />
            <span className="text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Get In Touch</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            We're here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">help you.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Have a question, need to book a specialized consultation, or simply want to learn more? Send us a message and our team will get back to you immediately.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4 z-20"
          >
            {/* Info Card 1 - Email */}
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-sm dark:shadow-none group hover:border-[#1774B6]/50 transition-colors">
              <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="h-6 w-6 text-[#1774B6] dark:text-[#4CA1E6]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Email Us</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Our friendly team is here to help.</p>
              <a href="mailto:info@singhehospitals.com" className="text-[#1774B6] dark:text-[#4CA1E6] font-semibold hover:underline">info@singhehospitals.com</a>
            </div>

            {/* Info Card 2 - Phone */}
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-sm dark:shadow-none group hover:border-[#F5A422]/50 transition-colors">
              <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="h-6 w-6 text-[#F5A422]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Call Us</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+94452233444" className="text-[#F5A422] font-semibold hover:underline">+94 45 22 33 444</a>
            </div>

            {/* Info Card 3 - Location */}
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-sm dark:shadow-none group hover:border-[#D9252A]/50 transition-colors">
              <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="h-6 w-6 text-[#D9252A]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Headquarters</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Come say hello at our main facility.</p>
              <p className="text-[#D9252A] font-semibold">Ratnapura, Sri Lanka</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Interactive Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
              
              {/* Form Background Accent */}
              <Building2 className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-100 dark:text-white/5 -rotate-12 pointer-events-none" />

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 relative z-10">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1774B6] transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 focus:bg-white dark:focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1774B6] transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 focus:bg-white dark:focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Description Field */}
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#1774B6] transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 focus:bg-white dark:focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState !== 'idle'}
                  whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
                  className={`relative w-full overflow-hidden rounded-2xl font-bold text-lg p-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                    formState === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-[#1774B6] text-white hover:bg-[#125d93] shadow-lg'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                        Send Message <Send className="h-5 w-5" />
                      </motion.div>
                    )}
                    {formState === 'submitting' && (
                      <motion.div key="submitting" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6" /> Message Sent!
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Button Shine Effect (Only active when idle) */}
                  {formState === 'idle' && (
                    <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .perspective-\\[2000px\\] { perspective: 2000px; }
      `}} />
    </section>
  );
}