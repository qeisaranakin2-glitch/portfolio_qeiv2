import { useState, useEffect, useRef } from 'react';
const RPSGame = () => {
  const choices = [
    { name: 'ROCK', icon: '✊' },
    { name: 'PAPER', icon: '✋' },
    { name: 'SCISSORS', icon: '✌️' }
  ];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, ai: 0 });

  const play = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setAiChoice(computerChoice);

    if (choice.name === computerChoice.name) {
      setResult('DRAW');
    } else if (
      (choice.name === 'ROCK' && computerChoice.name === 'SCISSORS') ||
      (choice.name === 'PAPER' && computerChoice.name === 'ROCK') ||
      (choice.name === 'SCISSORS' && computerChoice.name === 'PAPER')
    ) {
      setResult('VICTORY');
      setScore(s => ({ ...s, player: s.player + 1 }));
    } else {
      setResult('DEFEAT');
      setScore(s => ({ ...s, ai: s.ai + 1 }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-[280px] mb-4 text-xs font-mono">
        <span className="text-green-400">YOU: {score.player}</span>
        <span className="text-red-400">CYBER AI: {score.ai}</span>
      </div>

      <div className="bg-[#11131A] border border-white/10 rounded-lg p-6 w-full max-w-[280px] text-center">
        {result ? (
          <div className="mb-6">
            <div className="flex justify-around items-center mb-4 text-3xl">
              <div>
                <p className="text-[10px] font-mono text-[#9296A5] mb-1">YOU</p>
                {playerChoice.icon}
              </div>
              <span className="text-xs font-mono text-white/40">VS</span>
              <div>
                <p className="text-[10px] font-mono text-[#9296A5] mb-1">AI</p>
                {aiChoice.icon}
              </div>
            </div>
            <p className={`text-lg font-black tracking-widest ${
              result === 'VICTORY' ? 'text-green-400' : result === 'DEFEAT' ? 'text-red-400' : 'text-yellow-400'
            }`}>
              {result}
            </p>
          </div>
        ) : (
          <p className="text-xs font-mono text-[#9296A5] mb-6">SELECT YOUR MOVE TO ENGAGE CYBER AI</p>
        )}

        <div className="flex gap-2 justify-center">
          {choices.map((c, i) => (
            <button
              key={i}
              onClick={() => play(c)}
              className="flex-1 py-3 bg-white/5 border border-white/10 hover:border-[#547BFF] hover:bg-[#547BFF]/10 text-xl transition-all rounded"
            >
              {c.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RPSGame;