import { useState, useEffect, useRef } from 'react';
const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('snake_highscore') || '0', 10));
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const dirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef({ x: 15, y: 15 });

  const resetGame = () => {
    snakeRef.current = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    dirRef.current = { x: 1, y: 0 };
    spawnFood();
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const spawnFood = () => {
    foodRef.current = {
      x: Math.floor(Math.random() * 15),
      y: Math.floor(Math.random() * 15)
    };
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;
      if (['ArrowUp', 'KeyW'].includes(e.code) && dirRef.current.y === 0) dirRef.current = { x: 0, y: -1 };
      if (['ArrowDown', 'KeyS'].includes(e.code) && dirRef.current.y === 0) dirRef.current = { x: 0, y: 1 };
      if (['ArrowLeft', 'KeyA'].includes(e.code) && dirRef.current.x === 0) dirRef.current = { x: -1, y: 0 };
      if (['ArrowRight', 'KeyD'].includes(e.code) && dirRef.current.x === 0) dirRef.current = { x: 1, y: 0 };
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const interval = setInterval(() => {
      const head = { x: snakeRef.current[0].x + dirRef.current.x, y: snakeRef.current[0].y + dirRef.current.y };
      
      // Wall collision
      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        setGameOver(true);
        return;
      }
      // Self collision
      for (let segment of snakeRef.current) {
        if (segment.x === head.x && segment.y === head.y) {
          setGameOver(true);
          return;
        }
      }

      snakeRef.current.unshift(head);

      // Eat Food
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore(prev => {
          const next = prev + 10;
          if (next > highScore) {
            setHighScore(next);
            localStorage.setItem('snake_highscore', next.toString());
          }
          return next;
        });
        spawnFood();
      } else {
        snakeRef.current.pop();
      }

      // Draw
      ctx.fillStyle = '#08090D';
      ctx.fillRect(0, 0, 300, 300);

      // Draw Grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      for (let i = 0; i < 300; i += 15) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 300); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(300, i); ctx.stroke();
      }

      // Draw Food
      ctx.fillStyle = '#42D9F5';
      ctx.shadowColor = '#42D9F5';
      ctx.shadowBlur = 10;
      ctx.fillRect(foodRef.current.x * 15 + 2, foodRef.current.y * 15 + 2, 11, 11);
      ctx.shadowBlur = 0;

      // Draw Snake
      snakeRef.current.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? '#547BFF' : '#9565FF';
        ctx.fillRect(part.x * 15 + 1, part.y * 15 + 1, 13, 13);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, highScore]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-[300px] mb-3 text-xs font-mono">
        <span className="text-[#547BFF]">SCORE: {score}</span>
        <span className="text-[#9565FF]">BEST: {highScore}</span>
      </div>
      
      <div className="relative border border-white/20 bg-[#08090D] overflow-hidden rounded-lg">
        <canvas ref={canvasRef} width={300} height={300} className="block" />
        {(!gameStarted || gameOver) && (
          <div className="absolute inset-0 bg-[#08090D]/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
            <h4 className="text-xl font-black text-white mb-2">{gameOver ? 'GAME OVER' : 'CYBER SNAKE'}</h4>
            <p className="text-xs text-[#9296A5] mb-4">Use WASD or Arrow Keys to navigate the matrix grid.</p>
            <button 
              onClick={resetGame}
              className="px-6 py-2 bg-[#547BFF] text-[#08090D] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              {gameOver ? 'RETRY' : 'START GAME'}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Touch Controls */}
      <div className="grid grid-cols-3 gap-2 mt-4 md:hidden w-48">
        <div />
        <button onClick={() => dirRef.current.y === 0 && (dirRef.current = { x: 0, y: -1 })} className="p-3 bg-white/10 text-white rounded flex justify-center">▲</button>
        <div />
        <button onClick={() => dirRef.current.x === 0 && (dirRef.current = { x: -1, y: 0 })} className="p-3 bg-white/10 text-white rounded flex justify-center">◀</button>
        <button onClick={() => dirRef.current.y === 0 && (dirRef.current = { x: 0, y: 1 })} className="p-3 bg-white/10 text-white rounded flex justify-center">▼</button>
        <button onClick={() => dirRef.current.x === 0 && (dirRef.current = { x: 1, y: 0 })} className="p-3 bg-white/10 text-white rounded flex justify-center">▶</button>
      </div>
    </div>
  );
};

export default SnakeGame;