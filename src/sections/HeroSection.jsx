import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import InteractiveTerminal from '../components/common/InteractiveTerminal';

export default function HeroSection({ setIsHovering }) {
  return (
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#547BFF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9565FF] rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8 bg-[#11131A]/80 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full w-max"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm font-mono text-white/80">Informatics Engineering • Semester 7</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
            >
              HEY, I'M <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9296A5]">QEISAR.</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl font-bold text-[#547BFF] uppercase tracking-tight"
            >
              DEVELOPER BY PASSION. BUILDER BY CURIOSITY.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-base md:text-lg text-[#9296A5] max-w-lg leading-relaxed"
            >
              Student at Universitas Gunadarma crafting modern web apps, artificial intelligence models, and immersive interactive digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a 
                href="#projects"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative px-8 py-4 bg-[#F4F5FA] text-[#08090D] font-bold uppercase tracking-wider rounded-none overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10">Explore Works</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#arcade"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="px-6 py-4 border border-[#FF007F]/40 bg-[#FF007F]/10 text-white font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#FF007F] hover:text-black transition-all"
              >
                <Gamepad2 className="w-5 h-5" /> Mini Arcade
              </a>
            </motion.div>
          </div>

          {/* Right Column - Terminal Visual */}
          <div className="w-full flex justify-center">
            <InteractiveTerminal />
          </div>
        </div>
      </section>

  );
}
