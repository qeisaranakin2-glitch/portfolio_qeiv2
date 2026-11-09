import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', content: 'QEISAR OS v7.0.0 (x86_64-pc-linux-gnu)' },
    { type: 'sys', content: 'Type "help" to view available system routines.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', content: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'sys', content: 'AVAILABLE COMMANDS:\n  about     - Personal bio & overview\n  skills    - Core tech stack details\n  projects  - Featured engineering projects\n  experience- Career timeline\n  contact   - Direct messaging channels\n  matrix    - Toggle green code stream\n  secret    - Classified easter egg\n  clear     - Wipe buffer' });
        break;
      case 'about':
        newHistory.push({ type: 'sys', content: 'QEISAR AHMAD ANAKIN\nInformatics Engineering Student @ Gunadarma University (Sem 7).\nFocused on high-performance web systems and AI image processing.' });
        break;
      case 'skills':
        newHistory.push({ type: 'sys', content: 'FRONTEND: React.js, JavaScript, Tailwind, Framer Motion\nBACKEND: Python, Flask, MySQL\nAI/ML: TensorFlow, Image Classification' });
        break;
      case 'projects':
        newHistory.push({ type: 'sys', content: '1. Jasapro Total Survei\n2. Endemix Nusantara\n3. Skin Disease Detection (AI)\n4. Finance Tracker' });
        break;
      case 'contact':
        newHistory.push({ type: 'sys', content: 'EMAIL: hello@qeisar.com\nLOCATION: Bekasi, Indonesia' });
        break;
      case 'matrix':
        newHistory.push({ type: 'sys', content: '01001001 01001110 01001001 01010100 01001001 01000001 01010100 01001001 01001110 01000111 00100000 01001101 01000001 01010100 01010010 01001001 01011000 00100000 01010011 01010100 01001101' });
        break;
      case 'secret':
        newHistory.push({ type: 'sys', content: '🔓 EASTER EGG UNLOCKED: "The best way to predict the future is to invent it." - Alan Kay' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({ type: 'error', content: `Command not recognized: "${cmd}". Type "help" for command list.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="bg-[#08090D] border border-white/20 rounded-lg overflow-hidden font-mono text-xs w-full max-w-2xl mx-auto shadow-2xl">
      <div className="bg-[#11131A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-white/40 ml-2 font-bold">qeisar@terminal:~</span>
        </div>
        <TerminalIcon className="w-4 h-4 text-white/40" />
      </div>

      <div className="p-4 h-64 overflow-y-auto space-y-2">
        {history.map((h, i) => (
          <div key={i} className={h.type === 'user' ? 'text-[#547BFF]' : h.type === 'error' ? 'text-red-400' : 'text-[#42D9F5] whitespace-pre-line'}>
            {h.content}
          </div>
        ))}
        <div className="flex items-center gap-2 text-white">
          <span className="text-[#547BFF]">$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none flex-1 text-white font-mono"
            placeholder="type command..."
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
