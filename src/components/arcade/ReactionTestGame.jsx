import { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
const ReactionTestGame = () => {
  const [state, setState] = useState('idle'); // idle, waiting, ready, result
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(null);
  const [bestScore, setBestScore] = useState(() => localStorage.getItem('reaction_best') || null);
  const timerRef = useRef(null);

  const startTest = () => {
    setState('waiting');
    setReactionTime(null);
    const randomDelay = Math.floor(Math.random() * 3000) + 2000;
    timerRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setState('ready');
    }, randomDelay);
  };

  const handleClick = () => {
    if (state === 'waiting') {
      clearTimeout(timerRef.current);
      setState('idle');
      alert('Too early! Wait for the screen to turn GREEN.');
    } else if (state === 'ready') {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setState('result');
      if (!bestScore || time < parseInt(bestScore, 10)) {
        setBestScore(time.toString());
        localStorage.setItem('reaction_best', time.toString());
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-[280px] mb-3 text-xs font-mono">
        <span className="text-[#9565FF]">SYSTEM SPEED</span>
        <span className="text-[#42D9F5]">BEST: {bestScore ? `${bestScore}ms` : '---'}</span>
      </div>

      <div 
        onClick={state === 'waiting' || state === 'ready' ? handleClick : undefined}
        className={`w-full max-w-[280px] h-56 rounded-lg border border-white/10 flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-colors ${
          state === 'idle' ? 'bg-[#11131A] text-white' :
          state === 'waiting' ? 'bg-red-900/60 text-white border-red-500' :
          state === 'ready' ? 'bg-green-500 text-black font-black border-green-300' :
          'bg-[#11131A] text-white border-[#547BFF]'
        }`}
      >
        {state === 'idle' && (
          <div>
            <Zap className="w-10 h-10 text-[#9565FF] mx-auto mb-3" />
            <p className="text-sm font-bold mb-2">NEURAL REACTION TEST</p>
            <button onClick={startTest} className="mt-2 px-4 py-2 bg-[#9565FF] text-white font-bold text-xs uppercase tracking-widest">
              START
            </button>
          </div>
        )}
        {state === 'waiting' && (
          <div>
            <p className="text-lg font-black tracking-widest animate-pulse">WAIT FOR GREEN...</p>
          </div>
        )}
        {state === 'ready' && (
          <div>
            <p className="text-3xl font-black uppercase">CLICK NOW!</p>
          </div>
        )}
        {state === 'result' && (
          <div>
            <p className="text-[#9296A5] text-xs uppercase tracking-widest mb-1">REACTION TIME</p>
            <p className="text-4xl font-black text-[#547BFF] mb-4">{reactionTime} ms</p>
            <button onClick={startTest} className="px-4 py-1.5 bg-white text-black font-bold text-xs uppercase">
              TRY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactionTestGame;