import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
      <section className="py-32 px-6 relative" id="experience">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeading number="05" title="Experience." subtitle="Timeline of professional and educational milestones." />

          <div className="relative border-l border-white/10 ml-4 md:ml-0">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-16 pl-8 md:pl-16 relative"
              >
                <div 
                  className="absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-[#08090D] flex items-center justify-center -translate-x-1/2"
                  style={{ backgroundColor: exp.color }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
                  <span className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 border border-white/10 w-fit">
                    {exp.year}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{exp.title}</h3>
                </div>
                
                <h4 className="text-base font-medium mb-4 flex items-center gap-2" style={{ color: exp.color }}>
                  {exp.icon} {exp.company}
                </h4>
                
                <p className="text-[#9296A5] text-sm leading-relaxed max-w-2xl bg-[#11131A] p-6 border border-white/5">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  );
}
