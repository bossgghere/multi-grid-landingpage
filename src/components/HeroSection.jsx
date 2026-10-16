import React, { useState } from 'react';
import { Download, Check, AlertCircle } from 'lucide-react';

export default function HeroSection({ emailInputRef }) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('HYPER2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Terminal interactive state
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
    {
      id: 1,
      title: "agent",
      cmd: "$ claude code",
      lines: [
        { text: "Claude 3.7 initialized in cell #1", type: "cyan" },
        { text: "Listening for local instructions...", type: "dim" },
        { text: "Ready.", type: "lime" }
      ]
    },
    {
      id: 2,
      title: "frontend",
      cmd: "$ npm run dev",
      lines: [
        { text: "VITE v6.2.0 ready in 98 ms", type: "success" },
        { text: "➜ Local: http://localhost:5173", type: "cyan" },
        { text: "HMR active with zero lag", type: "dim" }
      ]
    },
    {
      id: 3,
      title: "telemetry",
      cmd: "$ btop",
      lines: [
        { text: "CPU 5.2% | GPU Metal 3.0", type: "cyan" },
        { text: "Resident RAM: 36.4 MB", type: "lime" },
        { text: "Sessions: 9 independent PTYs", type: "dim" }
      ]
    },
    {
      id: 4,
      title: "api-server",
      cmd: "$ cargo run",
      lines: [
        { text: "Compiling hyper-daemon v1.0", type: "dim" },
        { text: "Listening on 127.0.0.1:8080", type: "success" },
        { text: "[OK] IPC socket connected", type: "lime" }
      ]
    },
    {
      id: 5,
      title: "models",
      cmd: "$ gemini run",
      lines: [
        { text: "Gemini 2.5 Flash agent running", type: "cyan" },
        { text: "Verification: 10/10 tests pass", type: "lime" }
      ]
    },
    {
      id: 6,
      title: "git",
      cmd: "$ git status -sb",
      lines: [
        { text: "## main...origin/main [clean]", type: "success" },
        { text: "Fast-forward synchronized", type: "dim" }
      ]
    },
    {
      id: 7,
      title: "docker",
      cmd: "$ docker ps",
      lines: [
        { text: "redis-db: Up 5 hours (healthy)", type: "dim" },
        { text: "postgres: Up 5 hours (:5432)", type: "success" }
      ]
    },
    {
      id: 8,
      title: "logs",
      cmd: "$ tail -f app.log",
      lines: [
        { text: "[INFO] Grid layout resized to 3x3", type: "cyan" },
        { text: "[INFO] Session preservation: active", type: "lime" }
      ]
    },
    {
      id: 9,
      title: "zsh",
      cmd: "$ uname -mprs",
      lines: [
        { text: "Darwin arm64 Apple Silicon", type: "cyan" },
        { text: "Native Swift 6 & AppKit core", type: "lime" }
      ]
    },
  ];

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminals.slice(0, currentConfig.count);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
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
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bold Headline & Direct Download */}
        <div className="lg:col-span-5 text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight uppercase text-white leading-[1.05] mb-4">
            Run 9 Terminals <br />
            in One Window. <br />
            <span className="text-[#ccff00]">Zero Lag. Pure Swift.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed max-w-lg font-normal">
            A fast, lightweight macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#ccff00] font-mono text-xs border border-zinc-700 font-bold">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
          </p>

          {/* Integrated Download Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090a10] border border-white/10 shadow-2xl">
            {!isUnlocked ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-bold uppercase tracking-wider">Get Early Access</span>
                  <span className="text-[#ccff00] font-bold">Code: HYPER2026</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter developer email"
                    className="flex-1 px-4 py-3 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-500 font-mono text-xs sm:text-sm outline-none transition-colors"
                  />
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Code"
                    className="w-full sm:w-32 px-4 py-3 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-500 font-mono text-xs sm:text-sm outline-none transition-colors uppercase text-center font-bold"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-xs font-mono flex items-center space-x-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>{isLoading ? 'Unlocking...' : 'Download for macOS (.dmg)'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-3">
                <div className="text-[#ccff00] text-sm font-mono font-bold flex items-center justify-center space-x-2 mb-1.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                  <span>Download Started</span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  Universal DMG (Apple Silicon M1/M2/M3/M4 & Intel).
                </p>
              </div>
            )}
          </div>

          {/* Minimal Specs */}
          <div className="mt-5 flex items-center flex-wrap gap-5 text-xs font-mono text-zinc-500">
            <span className="text-zinc-300 font-semibold">2.4 MB Binary</span>
            <span>•</span>
            <span>&lt;40 MB RAM</span>
            <span>•</span>
            <span>100% Offline</span>
            <span>•</span>
            <span>Metal 3 GPU</span>
          </div>
        </div>

        {/* Right Column: Full-Sized, Impressive Interactive Terminal Grid */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/15 bg-[#06070a] shadow-2xl overflow-hidden">
            {/* Title Bar with Traffic Lights & Layout Switcher */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f17] border-b border-white/10 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
                <span className="text-xs font-mono font-bold text-zinc-300 ml-2 tracking-wide">
                  HyperGrid // Workspace
                </span>
              </div>

              {/* Layout Switcher Buttons */}
              <div className="flex items-center space-x-1.5">
                {Object.keys(layoutConfigs).map((key) => {
                  const isSelected = layout === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setLayout(key);
                        if (activePane > layoutConfigs[key].count) setActivePane(1);
                      }}
                      className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? 'bg-[#ccff00] text-black shadow-sm'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                      }`}
                    >
                      {key.replace('x', '×')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Grid Panes Viewport with Solid Height */}
            <div className={`grid ${currentConfig.cols} gap-1.5 p-1.5 bg-[#090b12] min-h-[380px] sm:min-h-[440px]`}>
              {visiblePanes.map((pane) => {
                const isActive = activePane === pane.id;
                return (
                  <div
                    key={pane.id}
                    onClick={() => setActivePane(pane.id)}
                    className={`rounded-lg p-3.5 sm:p-4 transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                      isActive
                        ? 'bg-[#0d101a] ring-2 ring-[#ccff00] shadow-[inset_0_0_20px_rgba(204,255,0,0.06)]'
                        : 'bg-[#0a0c14] hover:bg-[#0c0e18] border border-white/5'
                    }`}
                  >
                    {/* Pane Header */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-mono">
                      <div className="flex items-center space-x-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#ccff00] animate-pulse' : 'bg-zinc-600'}`} />
                        <span className={isActive ? 'text-[#ccff00] font-bold' : 'text-zinc-400'}>
                          ⌘{pane.id} // {pane.title}
                        </span>
                      </div>
                      <span className="text-zinc-600">zsh</span>
                    </div>

                    {/* Terminal Text Lines */}
                    <div className="space-y-1 font-mono text-xs sm:text-[13px] leading-relaxed flex-1 overflow-hidden">
                      <div className="font-bold text-white truncate">{pane.cmd}</div>
                      {pane.lines.map((line, idx) => {
                        let colorClass = "text-zinc-400";
                        if (line.type === 'cyan') colorClass = "text-[#00f0ff]";
                        if (line.type === 'lime') colorClass = "text-[#ccff00]";
                        if (line.type === 'success') colorClass = "text-emerald-400";
                        if (line.type === 'dim') colorClass = "text-zinc-500";

                        return (
                          <div key={idx} className={`${colorClass} truncate`}>
                            {line.text}
                          </div>
                        );
                      })}
                      {isActive && (
                        <div className="flex items-center space-x-1 text-zinc-500 mt-1.5">
                          <span className="text-[#ccff00] font-bold">$</span>
                          <span className="w-2 h-3.5 bg-[#ccff00] animate-pulse inline-block" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Keycap Navigation Bar */}
            <div className="p-3 bg-[#0a0c12] border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 overflow-x-auto no-scrollbar gap-2">
              <span className="shrink-0 text-zinc-400 font-semibold">Jump to pane:</span>
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="keycap px-2.5 py-1 rounded text-xs text-zinc-300 font-bold">⌘</span>
                <span className="text-zinc-600 font-bold">+</span>
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
                      className={`keycap px-3 py-1 rounded text-xs font-bold cursor-pointer ${
                        isTargetActive ? 'active text-[#ccff00]' : 'text-zinc-300'
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
