import { useState } from 'react';
import { Gamepad2, Sparkles, Zap, Trophy, Crosshair } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import SnakeGame from '../components/arcade/SnakeGame';
import MemoryMatchGame from '../components/arcade/MemoryMatchGame';
import ReactionTestGame from '../components/arcade/ReactionTestGame';
import RPSGame from '../components/arcade/RPSGame';
import SpaceDodgerGame from '../components/arcade/SpaceDodgerGame';

export default function ArcadeSection() {
  const [activeGameTab, setActiveGameTab] = useState(0);
  return (
      <section className="py-32 px-6 bg-[#11131A]/40 relative border-y border-white/5" id="arcade">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading number="04" title="Mini Arcade Hub." subtitle="Fully playable interactive developer mini-games. Test your reaction and reflexes." />

          <div className="bg-[#11131A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Game Selector Tabs */}
            <div className="flex border-b border-white/10 bg-[#08090D] overflow-x-auto">
              {[
                { name: 'SNAKE', icon: Gamepad2 },
                { name: 'MEMORY MATCH', icon: Sparkles },
                { name: 'REACTION TEST', icon: Zap },
                { name: 'CYBER RPS', icon: Trophy },
                { name: 'SPACE DODGER', icon: Crosshair }
              ].map((tab, idx) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveGameTab(idx)}
                    className={`px-6 py-4 font-mono text-xs font-bold uppercase whitespace-nowrap flex items-center gap-2 border-r border-white/10 transition-colors ${
                      activeGameTab === idx 
                        ? 'bg-[#547BFF] text-[#08090D]' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" /> {tab.name}
                  </button>
                );
              })}
            </div>

            {/* Active Game Stage */}
            <div className="p-6 md:p-12 min-h-[420px] flex items-center justify-center">
              {activeGameTab === 0 && <SnakeGame />}
              {activeGameTab === 1 && <MemoryMatchGame />}
              {activeGameTab === 2 && <ReactionTestGame />}
              {activeGameTab === 3 && <RPSGame />}
              {activeGameTab === 4 && <SpaceDodgerGame />}
            </div>
          </div>
        </div>
      </section>

  );
}
