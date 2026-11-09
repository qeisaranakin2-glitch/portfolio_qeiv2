import { motion } from 'framer-motion';
import { PLANETS } from '../data/portfolioData';
import SectionHeading from '../components/common/SectionHeading';

export default function PlanetNavigation() {
  return (
      <section className="py-24 px-6 relative bg-[#11131A]/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="NAV" title="Cosmic Exploration Nodes." subtitle="Click any planet node to jump directly into its designated quadrant." />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PLANETS.map((planet, index) => {
              const IconComponent = planet.icon;
              return (
                <motion.a
                  key={planet.id}
                  href={`#${planet.id}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-[#11131A] border border-white/10 p-6 rounded-xl flex flex-col items-center text-center group relative overflow-hidden transition-all duration-300 hover:border-white/40"
                >
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-4 relative shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ backgroundColor: `${planet.color}15` }}>
                    <IconComponent className="w-8 h-8" style={{ color: planet.color }} />
                  </div>
                  <h4 className="text-xs font-mono font-bold text-white mb-1">{planet.name}</h4>
                  <p className="text-[11px] text-[#9296A5]">{planet.sub}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

  );
}
