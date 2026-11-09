import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
const MemoryMatchGame = () => {
  const icons = ['⚛️', '🐍', '🚀', '⚡', '💻', '🔮'];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const initializeGame = () => {
    const deck = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, id) => ({ id, icon }));
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].icon === cards[second].icon) {
        setMatched(prev => {
          const next = [...prev, first, second];
          if (next.length === cards.length) setWon(true);
          return next;
        });
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-[280px] mb-4 text-xs font-mono">
        <span className="text-[#42D9F5]">MOVES: {moves}</span>
        <button onClick={initializeGame} className="text-white/60 hover:text-white flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> RESET
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 w-full max-w-[280px]">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(index)}
              className={`h-16 rounded border text-2xl flex items-center justify-center transition-all ${
                isFlipped 
                  ? 'bg-[#11131A] border-[#42D9F5] shadow-[0_0_10px_rgba(66,217,245,0.3)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {isFlipped ? card.icon : '❓'}
            </motion.button>
          );
        })}
      </div>

      {won && (
        <div className="mt-4 text-center">
          <p className="text-sm font-bold text-green-400 mb-2">🎉 SYNC COMPLETED IN {moves} MOVES!</p>
          <button onClick={initializeGame} className="px-4 py-1.5 bg-[#42D9F5] text-black font-bold text-xs uppercase tracking-widest">
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryMatchGame;