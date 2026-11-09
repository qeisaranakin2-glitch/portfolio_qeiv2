import { useState, useEffect, useRef } from 'react';
const SpaceDodgerGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const playerRef = useRef({ x: 140, y: 250, size: 16 });
  const obstaclesRef = useRef([]);
  const keysRef = useRef({});

  const start = () => {
    playerRef.current = { x: 140, y: 250, size: 16 };
    obstaclesRef.current = [];
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  useEffect(() => {
    const handleDown = (e) => { keysRef.current[e.code] = true; };
    const handleUp = (e) => { keysRef.current[e.code] = false; };
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);
    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameId;
    let spawnTimer = 0;

    const loop = () => {
      // Movement
      if ((keysRef.current['ArrowLeft'] || keysRef.current['KeyA']) && playerRef.current.x > 10) {
        playerRef.current.x -= 4;
      }
      if ((keysRef.current['ArrowRight'] || keysRef.current['KeyD']) && playerRef.current.x < 270) {
        playerRef.current.x += 4;
      }

      // Spawn obstacles
      spawnTimer++;
      if (spawnTimer % 20 === 0) {
        obstaclesRef.current.push({
          x: Math.random() * 260 + 10,
          y: -10,
          size: Math.random() * 12 + 8,
          speed: Math.random() * 2 + 2
        });
      }

      // Update obstacles
      for (let i = 0; i < obstaclesRef.current.length; i++) {
        let obs = obstaclesRef.current[i];
        obs.y += obs.speed;

        // Collision check
        const dist = Math.hypot(playerRef.current.x - obs.x, playerRef.current.y - obs.y);
        if (dist < playerRef.current.size / 2 + obs.size / 2) {
          setGameOver(true);
          return;
        }
      }

      // Clear offscreen obstacles & add score
      obstaclesRef.current = obstaclesRef.current.filter(obs => {
        if (obs.y > 300) {
          setScore(s => s + 1);
          return false;
        }
        return true;
      });

      // Render
      ctx.fillStyle = '#08090D';
      ctx.fillRect(0, 0, 300, 300);

      // Player Ship
      ctx.fillStyle = '#547BFF';
      ctx.beginPath();
      ctx.moveTo(playerRef.current.x, playerRef.current.y - 10);
      ctx.lineTo(playerRef.current.x - 10, playerRef.current.y + 10);
      ctx.lineTo(playerRef.current.x + 10, playerRef.current.y + 10);
      ctx.closePath();
      ctx.fill();

      // Obstacles (Asteroids)
      ctx.fillStyle = '#FF007F';
      obstaclesRef.current.forEach(obs => {
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.size / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [gameStarted, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-[300px] mb-3 text-xs font-mono">
        <span className="text-[#FF007F]">ORBIT DODGER</span>
        <span className="text-[#42D9F5]">PULSE: {score}</span>
      </div>

      <div className="relative border border-white/20 bg-[#08090D] overflow-hidden rounded-lg">
        <canvas ref={canvasRef} width={300} height={300} className="block" />
        {(!gameStarted || gameOver) && (
          <div className="absolute inset-0 bg-[#08090D]/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
            <h4 className="text-xl font-black text-white mb-2">{gameOver ? 'SHIP DESTROYED' : 'SPACE DODGER'}</h4>
            <p className="text-xs text-[#9296A5] mb-4">Use Left / Right Arrow keys to dodge incoming debris field.</p>
            <button 
              onClick={start}
              className="px-6 py-2 bg-[#FF007F] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {gameOver ? 'RETRY' : 'ENGAGE THRUSTERS'}
            </button>
          </div>
        )}
      </div>

      {/* Mobile touch steering */}
      <div className="flex gap-4 mt-4 md:hidden w-48 justify-center">
        <button 
          onTouchStart={() => keysRef.current['ArrowLeft'] = true} 
          onTouchEnd={() => keysRef.current['ArrowLeft'] = false}
          className="flex-1 py-3 bg-white/10 text-white font-bold rounded"
        >
          ◄ LEFT
        </button>
        <button 
          onTouchStart={() => keysRef.current['ArrowRight'] = true} 
          onTouchEnd={() => keysRef.current['ArrowRight'] = false}
          className="flex-1 py-3 bg-white/10 text-white font-bold rounded"
        >
          RIGHT ►
        </button>
      </div>
    </div>
  );
};

export default SpaceDodgerGame;