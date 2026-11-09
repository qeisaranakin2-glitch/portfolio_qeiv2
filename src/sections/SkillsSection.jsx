
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { SKILLS } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-[#11131A]/30 relative border-y border-white/5" id="skills">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="02"
          title="Tech Ecosystem."
          subtitle="Core developer tooling and production skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-[#11131A] p-8 border border-white/10 overflow-hidden ${skill.borderColor} transition-colors duration-300`}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-[#08090D] border border-white/10 rounded-xl inline-block">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">
                  {skill.category}
                </h3>

                <ul className="space-y-3">
                  {skill.tech.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[#9296A5] group-hover:text-white/90 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/20 group-hover:text-current transition-colors" />
                      <span className="text-sm font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
