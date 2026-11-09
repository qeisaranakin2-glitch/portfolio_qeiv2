export default function FooterSection() {
  return (
      <footer className="border-t border-white/10 bg-[#08090D] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-black tracking-tighter">QEISARVERSE<span className="text-[#547BFF]">.</span></div>
          
          <p className="text-[#9296A5] text-xs font-mono">
            © {new Date().getFullYear()} QEISAR AHMAD ANAKIN. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2 text-xs font-mono text-white/40">
            <span>SYSTEM_STATUS: <span className="text-green-500">ONLINE</span></span>
          </div>
        </div>
      </footer>

  );
}
