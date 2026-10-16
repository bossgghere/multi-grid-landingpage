import React, { useState, useEffect } from 'react';
import { Download, Check, AlertCircle, Apple } from 'lucide-react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Terminal interactive state
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);
  const [liveStreamIndex, setLiveStreamIndex] = useState(0);

  const layoutConfigs = {
    '1x1': { count: 1, cols: 'grid-cols-1', label: '1×1' },
    '1x2': { count: 2, cols: 'grid-cols-1 sm:grid-cols-2', label: '1×2' },
    '2x2': { count: 4, cols: 'grid-cols-2', label: '2×2' },
    '2x3': { count: 6, cols: 'grid-cols-2 sm:grid-cols-3', label: '2×3' },
    '3x3': { count: 9, cols: 'grid-cols-3', label: '3×3' },
  };

  const initialTerminals = [
    {
      id: 1,
      title: "agent",
      cmd: "$ claude",
      lines: [
        { text: "Claude 3.7 initialized in cell 1", type: "blue" },
        { text: "Listening for local commands...", type: "dim" },
        { text: "Metal acceleration ready", type: "success" }
      ]
    },
    {
      id: 2,
      title: "frontend",
      cmd: "$ npm run dev",
      lines: [
        { text: "Vite v6.2.0 ready in 82 ms", type: "success" },
        { text: "Local: http://localhost:5173", type: "blue" },
        { text: "Fast refresh active", type: "dim" }
      ]
    },
    {
      id: 3,
      title: "system",
      cmd: "$ btop",
      lines: [
        { text: "CPU 4.2% • GPU Metal 3", type: "blue" },
        { text: "Memory 36.4 MB resident", type: "success" },
        { text: "Sessions: 9 independent PTYs", type: "dim" }
      ]
    },
    {
      id: 4,
      title: "backend",
      cmd: "$ cargo run",
      lines: [
        { text: "Compiling daemon v1.0", type: "dim" },
        { text: "Listening on 127.0.0.1:8080", type: "success" },
        { text: "IPC Unix socket ready", type: "blue" }
      ]
    },
    {
      id: 5,
      title: "models",
      cmd: "$ gemini run",
      lines: [
        { text: "Gemini 2.5 Flash agent active", type: "blue" },
        { text: "Verification: 10/10 passed", type: "success" }
      ]
    },
    {
      id: 6,
      title: "git",
      cmd: "$ git status -sb",
      lines: [
        { text: "## main...origin/main [clean]", type: "success" },
        { text: "Zero uncommitted changes", type: "dim" }
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
        { text: "[INFO] Grid matrix synchronized", type: "blue" },
        { text: "[INFO] Session preservation: active", type: "success" }
      ]
    },
    {
      id: 9,
      title: "zsh",
      cmd: "$ uname -mprs",
      lines: [
        { text: "Darwin arm64 Apple Silicon", type: "blue" },
        { text: "Native Swift 6 & AppKit core", type: "success" }
      ]
    },
  ];

  const [terminals, setTerminals] = useState(initialTerminals);

  // Subtle live update inside active terminal pane
  useEffect(() => {
    const streamCommands = [
      { text: "✓ Session buffer verified", type: "success" },
      { text: "⚡ Keystroke latency: 0.12ms", type: "blue" },
      { text: "→ Metal glyph rasterizer: 120 FPS", type: "dim" },
    ];

    const timer = setInterval(() => {
      setLiveStreamIndex((prev) => (prev + 1) % streamCommands.length);
      setTerminals((current) =>
        current.map((t) => {
          if (t.id === activePane) {
            const nextMsg = streamCommands[liveStreamIndex % streamCommands.length];
            return {
              ...t,
              lines: [...t.lines.slice(-2), nextMsg]
            };
          }
          return t;
        })
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [activePane, liveStreamIndex]);

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminals.slice(0, currentConfig.count);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Save lead locally
    try {
      const existing = JSON.parse(localStorage.getItem('hypergrid_subscribers') || '[]');
      existing.push({ email: email.trim(), date: new Date().toISOString() });
      localStorage.setItem('hypergrid_subscribers', JSON.stringify(existing));
    } catch (err) {}

    // Send to Resend via API endpoint
    try {
      await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
    } catch (err) {
      console.warn('API call fallback:', err);
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
      window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
    }, 350);
  };

  return (
    <section className="pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Apple-style Minimalism */}
        <div className="lg:col-span-5 text-left">
          {/* Brand Mark */}
          <div className="flex items-center space-x-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 border border-white/20 p-[1px] shadow-sm flex items-center justify-center">
              <div className="w-full h-full bg-[#14161c] rounded-[10px] flex items-center justify-center">
                <span className="text-[#2997ff] font-mono font-bold text-xs">▞</span>
              </div>
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              HyperGrid
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            Nine terminals. <br />
            Zero clutter.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 mb-8 leading-relaxed font-normal max-w-md">
            A native macOS workspace for engineers. Run multiple independent shell sessions in a fluid, hardware-accelerated grid with instant keyboard navigation.
          </p>

          {/* Frictionless Apple-style Download Form */}
          <div className="p-2 sm:p-2.5 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl max-w-md">
            {!isUnlocked ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] text-white placeholder-zinc-500 text-sm outline-none transition-all"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm tracking-tight flex items-center justify-center space-x-2 transition-all active:scale-[0.98] shadow-lg shadow-[#0071e3]/20 cursor-pointer shrink-0 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>{isLoading ? 'Preparing...' : 'Download for macOS'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-2.5 px-3 flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-white">
                  Download started. Check your inbox for the link.
                </span>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-2 text-red-400 text-xs flex items-center space-x-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Minimal macOS Spec Line */}
          <div className="mt-5 flex items-center space-x-3 text-xs text-zinc-500">
            <span className="flex items-center space-x-1 text-zinc-400">
              <Apple className="w-3.5 h-3.5 text-zinc-400" />
              <span>macOS Sonoma or later</span>
            </span>
            <span>•</span>
            <span>Apple Silicon & Intel</span>
            <span>•</span>
            <span>2.4 MB</span>
          </div>
        </div>

        {/* Right Column: Native macOS Window Simulation */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/15 bg-[#090b10] shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300">
            {/* Authentic macOS Window Header with Native Segmented Switcher */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#13151c]/90 backdrop-blur-md border-b border-white/10 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/40 hover:opacity-80 transition-opacity cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#dea123]/40 hover:opacity-80 transition-opacity cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]/40 hover:opacity-80 transition-opacity cursor-pointer" />
                <span className="text-xs font-medium text-zinc-400 ml-2">
                  HyperGrid Workspace
                </span>
              </div>

              {/* Native Apple-style Segmented Control */}
              <div className="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/10">
                {Object.keys(layoutConfigs).map((key) => {
                  const isSelected = layout === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setLayout(key);
                        if (activePane > layoutConfigs[key].count) setActivePane(1);
                      }}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-zinc-700/80 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {key.replace('x', '×')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Grid Panes Viewport */}
            <div className={`grid ${currentConfig.cols} gap-1 p-1 bg-[#090b10] min-h-[380px] sm:min-h-[440px]`}>
              {visiblePanes.map((pane) => {
                const isActive = activePane === pane.id;
                return (
                  <div
                    key={pane.id}
                    onClick={() => setActivePane(pane.id)}
                    className={`rounded-xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
                      isActive
                        ? 'bg-[#11141c] ring-1.5 ring-[#2997ff] shadow-[0_0_24px_rgba(41,151,255,0.15)]'
                        : 'bg-[#0c0e14] hover:bg-[#0f1118] border border-white/5'
                    }`}
                  >
                    {/* Pane Header */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-xs font-mono">
                      <div className="flex items-center space-x-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#2997ff]' : 'bg-zinc-600'}`} />
                        <span className={isActive ? 'text-[#2997ff] font-semibold' : 'text-zinc-400'}>
                          ⌘{pane.id} — {pane.title}
                        </span>
                      </div>
                      <span className="text-zinc-600 text-[11px]">zsh</span>
                    </div>

                    {/* Terminal Text Lines */}
                    <div className="space-y-1 font-mono text-xs sm:text-[13px] leading-relaxed flex-1 overflow-hidden">
                      <div className="font-semibold text-white truncate">{pane.cmd}</div>
                      {pane.lines.map((line, idx) => {
                        let colorClass = "text-zinc-400";
                        if (line.type === 'blue') colorClass = "text-[#2997ff]";
                        if (line.type === 'success') colorClass = "text-emerald-400";
                        if (line.type === 'dim') colorClass = "text-zinc-500";

                        return (
                          <div key={idx} className={`${colorClass} truncate`}>
                            {line.text}
                          </div>
                        );
                      })}
                      {isActive && (
                        <div className="flex items-center space-x-1 text-zinc-500 mt-2">
                          <span className="text-[#2997ff] font-bold">$</span>
                          <span className="w-2 h-3.5 bg-[#2997ff] terminal-cursor inline-block" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom macOS Status Bar with Keycaps */}
            <div className="px-4 py-2.5 bg-[#101218] border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 overflow-x-auto no-scrollbar gap-2">
              <span className="shrink-0 text-zinc-500">Quick jump:</span>
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-xs font-medium border border-white/10">⌘</span>
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
                      className={`px-2 py-0.5 rounded font-mono text-xs font-medium transition-colors cursor-pointer ${
                        isTargetActive 
                          ? 'bg-[#0071e3] text-white' 
                          : 'bg-zinc-800 text-zinc-400 hover:text-white border border-white/5'
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
