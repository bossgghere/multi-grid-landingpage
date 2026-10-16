import React, { useState } from 'react';

export default function InteractiveTerminalPreview() {
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);

  const layoutConfigs = {
    '1x1': { count: 1, cols: 'grid-cols-1', label: '1×1' },
    '1x2': { count: 2, cols: 'grid-cols-1 md:grid-cols-2', label: '1×2' },
    '2x1': { count: 2, cols: 'grid-cols-1', label: '2×1' },
    '2x2': { count: 4, cols: 'grid-cols-1 sm:grid-cols-2', label: '2×2' },
    '2x3': { count: 6, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', label: '2×3' },
    '3x3': { count: 9, cols: 'grid-cols-1 sm:grid-cols-3', label: '3×3' },
  };

  const terminals = [
    {
      id: 1,
      title: "agent",
      cmd: "$ claude code",
      output: [
        "Claude 3.7 Sonnet initialized.",
        "Listening for instructions in terminal grid...",
        "Ready."
      ]
    },
    {
      id: 2,
      title: "dev-server",
      cmd: "$ npm run dev",
      output: [
        "VITE v6.2.0 ready in 110 ms",
        "➜  Local: http://localhost:5173/",
        "Network: use --host to expose"
      ]
    },
    {
      id: 3,
      title: "system",
      cmd: "$ btop",
      output: [
        "CPU: 6.4% | GPU: 1.8% (Metal)",
        "Memory: 36.4 MB resident",
        "PTY status: 0 errors"
      ]
    },
    {
      id: 4,
      title: "backend",
      cmd: "$ cargo run",
      output: [
        "Compiling server v0.1.0",
        "Finished dev profile in 0.8s",
        "Listening on 127.0.0.1:8080"
      ]
    },
    {
      id: 5,
      title: "models",
      cmd: "$ gemini run",
      output: [
        "Loaded local workflow engine",
        "All tests passing."
      ]
    },
    {
      id: 6,
      title: "git",
      cmd: "$ git status -s",
      output: [
        "## main...origin/main",
        "M src/App.jsx",
        "M src/components/HeroSection.jsx"
      ]
    },
    {
      id: 7,
      title: "docker",
      cmd: "$ docker compose up -d",
      output: [
        "Container redis-db Started",
        "Container pg-db Started"
      ]
    },
    {
      id: 8,
      title: "logs",
      cmd: "$ tail -f app.log",
      output: [
        "[INFO] Grid session synchronized",
        "[INFO] Active window: 3x3 layout"
      ]
    },
    {
      id: 9,
      title: "zsh",
      cmd: "$ uname -mprs",
      output: [
        "Darwin 24.2.0 arm64 Apple Silicon",
        "HyperGrid v1.0 running natively"
      ]
    },
  ];

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminals.slice(0, currentConfig.count);

  return (
    <section id="demo" className="py-20 px-6 max-w-5xl mx-auto">
      {/* Clean Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Interactive Grid Preview
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-lg mx-auto">
          Switch layouts or click any terminal pane to inspect active focus and keyboard navigation.
        </p>

        {/* Minimal Layout Pills */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {Object.keys(layoutConfigs).map((key) => {
            const isSelected = layout === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setLayout(key);
                  if (activePane > layoutConfigs[key].count) setActivePane(1);
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-colors ${
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

      {/* Terminal Window */}
      <div className="rounded-xl border border-white/10 bg-[#07080b] shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e14] border-b border-white/5">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-xs font-mono text-zinc-400 ml-2">HyperGrid</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-500">
            Active: <span className="text-[#ccff00]">Pane #{activePane}</span>
          </div>
        </div>

        {/* Dynamic Panes */}
        <div className={`grid ${currentConfig.cols} gap-1 p-1 bg-[#090a10] min-h-[420px]`}>
          {visiblePanes.map((pane) => {
            const isActive = activePane === pane.id;
            return (
              <div
                key={pane.id}
                onClick={() => setActivePane(pane.id)}
                className={`rounded-lg p-4 transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0e1017] ring-1 ring-[#ccff00]'
                    : 'bg-[#0a0b10] hover:bg-[#0c0d14] border border-white/5'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] font-mono">
                  <span className={isActive ? 'text-[#ccff00] font-bold' : 'text-zinc-400'}>
                    ⌘{pane.id} // {pane.title}
                  </span>
                  <span className="text-zinc-600">zsh</span>
                </div>

                <div className="space-y-1 font-mono text-xs text-zinc-300 flex-1">
                  <div className="font-bold text-white">{pane.cmd}</div>
                  {pane.output.map((out, idx) => (
                    <div key={idx} className="text-zinc-400 text-[11px]">
                      {out}
                    </div>
                  ))}
                  {isActive && (
                    <div className="flex items-center space-x-1 text-zinc-500 mt-2">
                      <span className="text-[#ccff00]">$</span>
                      <span className="w-2 h-3.5 bg-[#ccff00] animate-pulse inline-block" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean Keycap Bar */}
      <div className="mt-6 flex items-center justify-center space-x-2">
        <span className="text-xs font-mono text-zinc-500 mr-2">Focus pane:</span>
        <div className="keycap px-2.5 py-1 rounded font-mono text-xs font-bold text-zinc-400">
          ⌘
        </div>
        <span className="text-zinc-600 font-mono">+</span>
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
              className={`keycap px-3 py-1 rounded font-mono text-xs font-bold cursor-pointer ${
                isTargetActive ? 'active text-[#ccff00]' : 'text-zinc-300'
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </section>
  );
}
