import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';

import { NAV_LINKS } from './data/portfolioData';

import HeroSection from './sections/HeroSection';
import PlanetNavigation from './sections/PlanetNavigation';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ArcadeSection from './sections/ArcadeSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [introEntered, setIntroEntered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const konamiSequence = useRef([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track Mouse Position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track Scroll Position for Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA'
    ];

    const handleKeyDown = (e) => {
      konamiSequence.current.push(e.code);

      if (konamiSequence.current.length > konamiCode.length) {
        konamiSequence.current.shift();
      }

      if (
        JSON.stringify(konamiSequence.current) ===
        JSON.stringify(konamiCode)
      ) {
        setKonamiUnlocked(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`bg-[#08090D] min-h-screen text-[#F4F5FA] font-sans selection:bg-[#547BFF] selection:text-white overflow-x-hidden relative ${
        konamiUnlocked ? 'hue-rotate-90 transition-all duration-700' : ''
      }`}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap');

            body {
              font-family: 'Inter', sans-serif;
            }

            @media (min-width: 768px) {
              body {
                cursor: none;
              }
            }

            .font-mono {
              font-family: 'JetBrains Mono', monospace;
            }

            .bg-noise {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E");
              opacity: 0.035;
              pointer-events: none;
              z-index: 50;
            }

            .bg-grid {
              background-size: 40px 40px;
              background-image:
                linear-gradient(to right, rgba(255,255,255,.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.03) 1px, transparent 1px);
              mask-image: radial-gradient(circle at center, black, transparent 80%);
            }

            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: #08090D;
            }

            ::-webkit-scrollbar-thumb {
              background: #11131A;
              border-radius: 4px;
              border: 1px solid rgba(255,255,255,.1);
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #547BFF;
            }
          `
        }}
      />

      <div className="bg-noise"></div>

      <div className="fixed inset-0 pointer-events-none bg-grid z-0 opacity-50"></div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#547BFF] via-[#42D9F5] to-[#9565FF] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Mouse Cursor (Desktop Only) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering
            ? 'rgba(255,255,255,1)'
            : 'rgba(255,255,255,0)'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>

      {/* Konami Code Banner */}
      {konamiUnlocked && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#FF007F] text-black font-black px-6 py-2 rounded-full shadow-[0_0_30px_#FF007F] animate-bounce text-xs uppercase tracking-widest flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          GOD MODE MATRIX ACTIVATED!
        </div>
      )}

      {/* Intro Modal Overlay */}
      <AnimatePresence>
        {!introEntered && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[70] bg-[#08090D] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
          >
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#547BFF]/20 to-[#FF007F]/20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-xl flex flex-col items-center"
            >
              <div className="p-4 bg-[#11131A] border border-white/10 rounded-2xl mb-8 shadow-2xl">
                <Sparkles
                  className="w-12 h-12 text-[#547BFF] animate-spin"
                  style={{ animationDuration: '8s' }}
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                WELCOME TO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#547BFF] via-[#42D9F5] to-[#9565FF]">
                  QEISARVERSE
                </span>
              </h1>

              <p className="text-[#9296A5] font-mono text-sm md:text-base mb-8">
                A Developer's Interactive Digital Universe & Arcade
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setIntroEntered(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#547BFF] to-[#42D9F5] text-[#08090D] font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(84,123,255,0.4)] flex items-center gap-2"
                >
                  ENTER EXPERIENCE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Navbar */}
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#08090D]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            QEISARVERSE<span className="text-[#547BFF]">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#9296A5] hover:text-white transition-colors uppercase tracking-widest"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#08090D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 overflow-hidden"
            >
              {NAV_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#9296A5] hover:text-white hover:pl-2 transition-all uppercase tracking-widest py-2 border-b border-white/5"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Sections */}
      <div className="relative z-10 pt-20">
        <HeroSection setIsHovering={setIsHovering} />
        <PlanetNavigation />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArcadeSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}