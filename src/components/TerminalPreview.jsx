import React, { useState, useEffect } from 'react';

export default function TerminalPreview() {
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);
  const [liveStreamIndex, setLiveStreamIndex] = useState(0);

  const layoutConfigs = {
    '1x1': { count: 1, cols: 'grid-cols-1', label: '1×1' },
    '1x2': { count: 2, cols: 'grid-cols-1 sm:grid-cols-2', label: '1×2' },
    '2x1': { count: 2, cols: 'grid-cols-1', label: '2×1' },
    '2x2': { count: 4, cols: 'grid-cols-1 sm:grid-cols-2', label: '2×2' },
    '2x3': { count: 6, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', label: '2×3' },
    '3x3': { count: 9, cols: 'grid-cols-1 sm:grid-cols-3', label: '3×3' },
  };

  const initialTerminals = [
    {
      id: 1,
      title: "agent",
      cmd: "$ claude code",
      lines: [
        { text: "Claude 3.7 initialized in cell #1", type: "blue" },
        { text: "Listening for local instructions...", type: "dim" },
        { text: "Metal acceleration active", type: "success" }
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
      title: "telemetry",
      cmd: "$ btop",
      lines: [
        { text: "CPU 4.2% • GPU Metal 3", type: "blue" },
        { text: "Resident RAM: 36.4 MB", type: "success" },
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

  useEffect(() => {
    const streamCommands = [
      { text: "✓ SwiftTerm buffer synchronized", type: "success" },
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

  return (
    <section id="demo" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Floating macOS Window Mockup with Authentic Light Chrome */}
      <div className="rounded-2xl border border-black/10 bg-[#090b10] shadow-[0_24px_70px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
        {/* Light macOS Tahoe / Sequoia Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#f6f6f6] border-b border-black/[0.08] flex-wrap gap-2">
          {/* Traffic Lights */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/40 hover:opacity-80 transition-opacity cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#dea123]/40 hover:opacity-80 transition-opacity cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]/40 hover:opacity-80 transition-opacity cursor-pointer" />
            <span className="text-xs font-semibold text-[#1d1d1f] ml-2">
              HyperGrid Workspace
            </span>
          </div>

          {/* Native macOS Segmented Control for Layouts */}
          <div className="flex items-center p-0.5 rounded-lg bg-black/[0.06] border border-black/[0.04]">
            {Object.keys(layoutConfigs).map((key) => {
              const isSelected = layout === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setLayout(key);
                    if (activePane > layoutConfigs[key].count) setActivePane(1);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold'
                      : 'text-[#86868b] hover:text-[#1d1d1f]'
                  }`}
                >
                  {key.replace('x', '×')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contrast Dark Terminal Panes */}
        <div className={`grid ${currentConfig.cols} gap-1 p-1 bg-[#090b10] min-h-[400px] sm:min-h-[460px]`}>
          {visiblePanes.map((pane) => {
            const isActive = activePane === pane.id;
            return (
              <div
                key={pane.id}
                onClick={() => setActivePane(pane.id)}
                className={`rounded-xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-[#12151e] ring-2 ring-[#0071e3] shadow-[0_0_24px_rgba(0,113,227,0.2)]'
                    : 'bg-[#0d0f15] hover:bg-[#11131b] border border-white/5'
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

        {/* Bottom Status Bar with Light Keycaps */}
        <div className="px-4 py-3 bg-[#f6f6f6] border-t border-black/[0.08] flex items-center justify-between text-xs text-[#86868b] overflow-x-auto no-scrollbar gap-2">
          <span className="shrink-0 text-[#86868b] font-medium">Quick switch:</span>
          <div className="flex items-center space-x-1.5 shrink-0">
            <span className="apple-keycap px-2.5 py-1 rounded text-xs font-mono font-medium">⌘</span>
            <span className="text-zinc-400">+</span>
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
                  className={`apple-keycap px-3 py-1 rounded text-xs font-mono font-medium cursor-pointer ${
                    isTargetActive ? 'active' : ''
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
