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

    setTimeout(() => {
      setFormState('success');
      const subject = encodeURIComponent(`New Contact Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.description}`);
      window.location.href = `mailto:info@singhehospitals.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setFormData({ name: '', email: '', description: '' });
        setFormState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 perspective-[2000px]">
      
      {/* Ambient Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-[-20%] sm:left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1774B6]/10 dark:bg-[#1774B6]/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D9252A]/5 dark:bg-[#D9252A]/15 rounded-full blur-[100px] sm:blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 sm:mb-6 backdrop-blur-md shadow-sm">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#1774B6] dark:text-[#4CA1E6]" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-blue-100 tracking-wide uppercase">Get In Touch</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
            We're here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1774B6] to-[#4CA1E6]">help you.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium px-2 sm:px-0">
            Have a question or need to book a consultation? Send us a message and our team will get back to you immediately.[cite: 8]
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {[
              { icon: Mail, color: 'text-[#1774B6]', borderColor: 'hover:border-[#1774B6]/50', title: 'Email Us', desc: 'Our friendly team is here to help.', link: 'mailto:info@singhehospitals.com', value: 'info@singhehospitals.com' },
              { icon: Phone, color: 'text-[#F5A422]', borderColor: 'hover:border-[#F5A422]/50', title: 'Call Us', desc: 'Mon-Fri from 8am to 5pm.', link: 'tel:+94452233444', value: '+94 45 22 33 444' },
              { icon: MapPin, color: 'text-[#D9252A]', borderColor: 'hover:border-[#D9252A]/50', title: 'Headquarters', desc: 'Come say hello at our main facility.', value: 'Ratnapura, Sri Lanka' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 sm:p-6 rounded-3xl backdrop-blur-md transition-colors ${item.borderColor} group`}>
                <div className="bg-slate-50 dark:bg-slate-900/50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-2">{item.desc}</p>
                {item.link ? (
                  <a href={item.link} className={`${item.color} font-semibold hover:underline text-sm sm:text-base`}>{item.value}</a>
                ) : (
                  <p className={`${item.color} font-semibold text-sm sm:text-base`}>{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* RIGHT SIDE - Interactive Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl relative overflow-hidden">
              
              <Building2 className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 text-slate-100 dark:text-white/5 -rotate-12 pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 relative z-10">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 relative z-10">
                <div className="relative group">
                  <User className="absolute inset-y-0 left-0 ml-4 h-5 w-5 my-auto text-slate-400 group-focus-within:text-[#1774B6] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl sm:rounded-2xl pl-12 pr-4 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute inset-y-0 left-0 ml-4 h-5 w-5 my-auto text-slate-400 group-focus-within:text-[#1774B6] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl sm:rounded-2xl pl-12 pr-4 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute top-4 left-4 h-5 w-5 text-slate-400 group-focus-within:text-[#1774B6] transition-colors" />
                  <textarea
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl sm:rounded-2xl pl-12 pr-4 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#1774B6]/50 transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={formState !== 'idle'}
                  whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
                  className={`relative w-full rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg p-3.5 sm:p-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    formState === 'success' ? 'bg-emerald-500 text-white' : 'bg-[#1774B6] text-white hover:bg-[#125d93]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.div>
                    )}
                    {formState === 'submitting' && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div key="success" initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" /> Message Sent!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[2000px\\] { perspective: 2000px; }
      `}} />
    </section>
  );
}