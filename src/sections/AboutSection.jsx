import { motion } from 'framer-motion';
import { Layers, MapPin, GraduationCap, Code } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

export default function AboutSection() {
  return (
      <section className="py-32 px-6 relative" id="about">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading number="01" title="More Than Just Writing Code." />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left Visual */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="aspect-[4/5] bg-[#11131A] border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none mix-blend-overlay"></div>
                
                <div className="w-full h-3/4 bg-gradient-to-b from-[#547BFF]/20 to-[#08090D] border border-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className="text-center opacity-40 font-mono">
                    <Layers className="w-16 h-16 mx-auto mb-4 text-[#547BFF]" />
                    <p className="text-xs">QEISAR AHMAD ANAKIN</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-end border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-[#9296A5] font-mono mb-1">LOCATION</p>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#42D9F5]" /> Bekasi, Indonesia
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#9296A5] font-mono mb-1">STATUS</p>
                    <p className="text-sm font-bold text-[#547BFF]">OPEN TO OPPORTUNITIES</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-2xl font-medium leading-relaxed text-white mb-8">
                  I am a <span className="text-[#547BFF]">Frontend Engineer</span> & tech developer with a focus on visual performance and interactive web architectures.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-8"></div>
                <p className="text-[#9296A5] text-lg leading-relaxed mb-8">
                  Currently completing my 7th semester of Informatics Engineering at Universitas Gunadarma, my focus spans high-performance web applications, machine learning integration, and interactive user experiences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  <div className="bg-[#11131A] border border-white/5 p-6 hover:border-[#9565FF]/40 transition-colors">
                    <GraduationCap className="w-8 h-8 text-[#9565FF] mb-4" />
                    <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Education</h3>
                    <p className="text-[#9296A5] text-sm">Informatics Engineering</p>
                    <p className="text-sm font-mono mt-2 text-white/60">Universitas Gunadarma • Semester 7</p>
                  </div>
                  <div className="bg-[#11131A] border border-white/5 p-6 hover:border-[#42D9F5]/40 transition-colors">
                    <Code className="w-8 h-8 text-[#42D9F5] mb-4" />
                    <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Technical Specialization</h3>
                    <p className="text-[#9296A5] text-sm">React Ecosystems & Machine Learning</p>
                    <p className="text-sm font-mono mt-2 text-white/60">TensorFlow + Modern Web</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  );
}
