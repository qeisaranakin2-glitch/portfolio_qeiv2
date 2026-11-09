import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import GithubIcon from '../components/common/GithubIcon';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
      <section className="py-32 px-6 relative" id="projects">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading number="03" title="Selected Works." subtitle="Featured applications and engineered solutions." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative bg-[#11131A] border border-white/10 overflow-hidden flex flex-col ${project.span}`}
              >
                <div className={`relative flex-1 bg-gradient-to-b ${project.gradient} p-8 flex items-center justify-center`}>
                  <div className="w-full h-full border border-white/10 rounded bg-[#08090D]/80 flex flex-col">
                     <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1.5 bg-white/5">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                     </div>
                     <div className="flex-1 flex items-center justify-center text-xs font-mono text-white/40">
                        {project.title}
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#08090D] border border-white/10 text-[10px] font-mono text-white/70 uppercase">
                    {project.type}
                  </div>
                </div>

                <div className="p-6 border-t border-white/10 bg-[#11131A]">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">{project.title}</h3>
                  <p className="text-[#9296A5] text-xs mb-4 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="p-1.5 bg-white/5 border border-white/10 hover:border-white text-white/70 hover:text-white rounded">
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  );
}
