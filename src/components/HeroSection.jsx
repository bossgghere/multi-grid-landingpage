import React, { useState } from 'react';
import { Download, Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function HeroSection({ emailInputRef }) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('HYPER2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Terminal interactive state (right column)
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);

  const layoutConfigs = {
    '1x1': { count: 1, cols: 'grid-cols-1', label: '1×1' },
    '1x2': { count: 2, cols: 'grid-cols-1 sm:grid-cols-2', label: '1×2' },
    '2x2': { count: 4, cols: 'grid-cols-2', label: '2×2' },
    '2x3': { count: 6, cols: 'grid-cols-2 sm:grid-cols-3', label: '2×3' },
    '3x3': { count: 9, cols: 'grid-cols-3', label: '3×3' },
  };

  const terminals = [
    { id: 1, title: "agent", cmd: "$ claude code", out: "Listening in grid cell 1..." },
    { id: 2, title: "dev", cmd: "$ npm run dev", out: "Local: http://localhost:5173" },
    { id: 3, title: "sys", cmd: "$ btop", out: "CPU: 4.8% | RAM: 36MB" },
    { id: 4, title: "api", cmd: "$ cargo run", out: "Listening on 127.0.0.1:8080" },
    { id: 5, title: "models", cmd: "$ gemini run", out: "Task completed: 0 errors" },
    { id: 6, title: "git", cmd: "$ git status -s", out: "## main...origin/main [clean]" },
    { id: 7, title: "docker", cmd: "$ docker ps", out: "redis-db & pg-db running" },
    { id: 8, title: "logs", cmd: "$ tail -f app.log", out: "[INFO] Grid session live" },
    { id: 9, title: "zsh", cmd: "$ uname -m", out: "arm64 Apple Silicon" },
  ];

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminals.slice(0, currentConfig.count);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email.');
      return;
    }

    if (!code || code.trim().length < 3) {
      setError('Access code required (use HYPER2026).');
      return;
    }

    setIsLoading(true);

    try {
      const existing = JSON.parse(localStorage.getItem('hypergrid_subscribers') || '[]');
      existing.push({ email: email.trim(), code: code.trim(), date: new Date().toISOString() });
      localStorage.setItem('hypergrid_subscribers', JSON.stringify(existing));
    } catch (err) {}

    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
      window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
    }, 400);
  };

  return (
    <section className="pt-20 sm:pt-24 pb-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Headline & Direct Download */}
        <div className="lg:col-span-5 text-left">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white leading-[1.08] mb-3">
            Run 9 Terminals <br />
            in One Window. <br />
            <span className="text-[#ccff00]">Zero Lag. Pure Swift.</span>
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
            A fast, native macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-[11px] border border-zinc-700">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
          </p>

          {/* Integrated Download Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#090a10] border border-white/10 shadow-xl">
            {!isUnlocked ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-400 font-semibold uppercase">Get Early Access</span>
                  <span className="text-[#ccff00]">Code: HYPER2026</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs outline-none transition-colors"
                  />
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Code"
                    className="w-full sm:w-28 px-3 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs outline-none transition-colors uppercase text-center"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-[11px] font-mono flex items-center space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{isLoading ? 'Unlocking...' : 'Download for macOS (.dmg)'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-2">
                <div className="text-[#ccff00] text-xs font-mono font-bold flex items-center justify-center space-x-1.5 mb-1">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Download Started</span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400">
                  Universal DMG (Apple Silicon & Intel).
                </p>
              </div>
            )}
          </div>

          {/* Minimal Specs */}
          <div className="mt-4 flex items-center flex-wrap gap-4 text-[11px] font-mono text-zinc-500">
            <span>2.4 MB Binary</span>
            <span>•</span>
            <span>&lt;40 MB RAM</span>
            <span>•</span>
            <span>100% Offline</span>
          </div>
        </div>

        {/* Right Column: Live Interactive Grid in the Hero */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-white/10 bg-[#07080b] shadow-2xl overflow-hidden">
            {/* Window Title bar with Layout Controls */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0d0e14] border-b border-white/5 flex-wrap gap-2">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-[11px] font-mono text-zinc-400 ml-1.5">HyperGrid</span>
              </div>

              {/* Layout Switcher Buttons */}
              <div className="flex items-center space-x-1">
                {Object.keys(layoutConfigs).map((key) => {
                  const isSelected = layout === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setLayout(key);
                        if (activePane > layoutConfigs[key].count) setActivePane(1);
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#ccff00] text-black'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                    >
                      {key.replace('x', '×')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Grid Panes Viewport */}
            <div className={`grid ${currentConfig.cols} gap-1 p-1 bg-[#090a10] min-h-[290px] sm:min-h-[340px]`}>
              {visiblePanes.map((pane) => {
                const isActive = activePane === pane.id;
                return (
                  <div
                    key={pane.id}
                    onClick={() => setActivePane(pane.id)}
                    className={`rounded p-2.5 transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#0e1017] ring-1 ring-[#ccff00]'
                        : 'bg-[#0a0b10] hover:bg-[#0c0d14] border border-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/5 text-[9px] font-mono">
                      <span className={isActive ? 'text-[#ccff00] font-bold' : 'text-zinc-400'}>
                        ⌘{pane.id} // {pane.title}
                      </span>
                      <span className="text-zinc-600">zsh</span>
                    </div>

                    <div className="space-y-0.5 font-mono text-[10px] text-zinc-300 flex-1 overflow-hidden">
                      <div className="font-bold text-white truncate">{pane.cmd}</div>
                      <div className="text-zinc-400 truncate">{pane.out}</div>
                      {isActive && (
                        <div className="flex items-center space-x-1 text-zinc-500 mt-1">
                          <span className="text-[#ccff00]">$</span>
                          <span className="w-1.5 h-3 bg-[#ccff00] animate-pulse inline-block" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Keycap Navigation Deck */}
            <div className="p-2 bg-[#0a0c12] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 overflow-x-auto no-scrollbar gap-1.5">
              <span className="shrink-0 text-zinc-400">Jump:</span>
              <div className="flex items-center space-x-1 shrink-0">
                <span className="keycap px-1.5 py-0.5 rounded text-[10px] text-zinc-300 font-bold">⌘</span>
                <span className="text-zinc-600">+</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                  const isTargetActive = activePane === num;
                  return (
                    <button
                      key={num}
                      onClick={() => {
                        if (num > currentConfig.count) {
                          if (num <= 4) setLayout('2x2');
                          else if (num <= 6) setLayout('2x3');
                          else setLayout('3x3');
                        }
                        setActivePane(num);
                      }}
                      className={`keycap px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                        isTargetActive ? 'active text-[#ccff00]' : 'text-zinc-400'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
