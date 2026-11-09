import { motion } from 'framer-motion';
import { Mail, ArrowRight, ChevronRight } from 'lucide-react';
import GithubIcon from '../components/common/GithubIcon';
import LinkedinIcon from '../components/common/LinkedinIcon';

export default function ContactSection() {
  return (
      <section className="py-32 px-6 relative min-h-[80vh] flex flex-col justify-center" id="contact">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#547BFF] font-mono text-xl mb-6 font-bold tracking-widest">[06] WHATS NEXT?</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8">
              Let's Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9296A5] to-[#11131A]">Something Great.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-[#9296A5] text-base mb-8 leading-relaxed">
                Currently open for engineering roles, freelance software contracts, and creative technical collaborations.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@qeisar.com" 
                  className="flex items-center justify-between p-6 bg-[#11131A] border border-white/10 hover:border-[#547BFF] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#547BFF]" />
                    <span className="font-bold text-base">Email Me</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', icon: <GithubIcon className="w-4 h-4"/> },
                    { name: 'LinkedIn', icon: <LinkedinIcon className="w-4 h-4"/> }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="flex items-center justify-center gap-3 p-4 bg-[#11131A] border border-white/10 hover:border-white transition-all"
                    >
                      {social.icon}
                      <span className="font-mono text-xs uppercase tracking-wider">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-[#11131A] p-8 border border-white/10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#9296A5] uppercase">Name</label>
                <input 
                  type="text" 
                  className="bg-[#08090D] border border-white/10 p-3 text-white text-sm focus:outline-none focus:border-[#547BFF]"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#9296A5] uppercase">Email</label>
                <input 
                  type="email" 
                  className="bg-[#08090D] border border-white/10 p-3 text-white text-sm focus:outline-none focus:border-[#547BFF]"
                  placeholder="name@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#9296A5] uppercase">Message</label>
                <textarea 
                  rows="3"
                  className="bg-[#08090D] border border-white/10 p-3 text-white text-sm focus:outline-none focus:border-[#547BFF] resize-none"
                  placeholder="Message..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="mt-2 py-4 bg-[#547BFF] text-[#08090D] font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 text-xs"
              >
                Send Message <ChevronRight className="w-4 h-4 text-[#08090D]" />
              </button>
            </form>
          </div>
        </div>
      </section>

  );
}
