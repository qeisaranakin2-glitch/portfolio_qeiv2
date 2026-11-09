import { motion } from 'framer-motion';

const SectionHeading = ({ number, title, subtitle }) => (
  <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-4"
      >
        <span className="text-[#547BFF] font-mono text-xl md:text-2xl font-bold">
          [{number}]
        </span>
        <div className="h-px bg-white/20 w-12 md:w-24" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white"
      >
        {title}
      </motion.h2>
    </div>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[#9296A5] text-lg max-w-sm"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;