import React, { useState } from 'react';
import { Terminal, Maximize2, RotateCcw, Minus, Plus, Monitor, Play, Sparkles, Check, Flame } from 'lucide-react';

export default function InteractiveTerminalPreview() {
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);
  const [fontSize, setFontSize] = useState(13);
  const [scanlines, setScanlines] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState('');

  // Layout definitions
  const layoutConfigs = {
    '1x1': { count: 1, cols: 'grid-cols-1', rows: 'grid-rows-1', label: '1×1 SINGLE' },
    '1x2': { count: 2, cols: 'grid-cols-1 md:grid-cols-2', rows: 'grid-rows-1', label: '1×2 SPLIT' },
    '2x1': { count: 2, cols: 'grid-cols-1', rows: 'grid-rows-2', label: '2×1 STACK' },
    '2x2': { count: 4, cols: 'grid-cols-1 sm:grid-cols-2', rows: 'grid-rows-2', label: '2×2 QUAD' },
    '2x3': { count: 6, cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', rows: 'grid-rows-2', label: '2×3 HEX' },
    '3x3': { count: 9, cols: 'grid-cols-1 sm:grid-cols-3', rows: 'grid-rows-3', label: '3×3 MATRIX' },
  };

  const [terminals, setTerminals] = useState([
    {
      id: 1,
      title: "agent-alpha",
      cwd: "~/projects/hypergrid",
      process: "claude",
      status: "ACTIVE",
      lines: [
        { text: "$ claude --dangerously-skip-permissions", type: "cmd" },
        { text: "⚡ Claude 3.7 Sonnet thinking...", type: "cyan" },
        { text: "→ Running benchmarks across 9 PTY sessions", type: "dim" },
        { text: "✓ 0 memory leaks detected in SwiftTerm buffer", type: "success" },
        { text: "✨ Metal texture cache resident: 22.4 MB", type: "lime" },
      ]
    },
    {
      id: 2,
      title: "vite-frontend",
      cwd: "~/work/landing-page",
      process: "bun dev",
      status: "RUNNING",
      lines: [
        { text: "$ bun dev --host 127.0.0.1", type: "cmd" },
        { text: "  VITE v6.2.0 ready in 82 ms", type: "success" },
        { text: "  ➜  Local: http://localhost:5173/", type: "info" },
        { text: "✓ 1930 modules transformed.", type: "dim" },
        { text: "[HMR] Reactive updates enabled", type: "lime" },
      ]
    },
    {
      id: 3,
      title: "telemetry-btop",
      cwd: "~/sys",
      process: "btop",
      status: "STREAM",
      lines: [
        { text: "CPU 8.2% [||||                ] 10 Cores", type: "info" },
        { text: "MEM 34.8 MB / 64 GB [|        ] Swift 6", type: "success" },
        { text: "GPU 2.4% [|                   ] Metal 3", type: "cyan" },
        { text: "NET ↑ 1.2 KB/s  ↓ 42.1 KB/s", type: "dim" },
      ]
    },
    {
      id: 4,
      title: "rust-daemon",
      cwd: "~/infra/engine",
      process: "cargo watch",
      status: "WATCHING",
      lines: [
        { text: "$ cargo watch -x run", type: "cmd" },
        { text: "[Running 'cargo run']", type: "dim" },
        { text: "   Compiling hypergrid-core v0.1.0", type: "dim" },
        { text: "    Finished `dev` profile in 0.94s", type: "success" },
        { text: "[OK] IPC Unix socket ready at /tmp/hyper.sock", type: "lime" },
      ]
    },
    {
      id: 5,
      title: "gemini-agent",
      cwd: "~/models",
      process: "gemini",
      status: "STANDBY",
      lines: [
        { text: "$ gemini run analyze_grid.py", type: "cmd" },
        { text: "[+] Loaded Gemini 2.5 Flash pipeline", type: "info" },
        { text: "Task: verify zero layout jitter during ⌘1-9 hops", type: "dim" },
        { text: "PASS (0.012s) - Grid sessions preserved", type: "success" },
      ]
    },
    {
      id: 6,
      title: "git-worker",
      cwd: "~/projects/hypergrid",
      process: "git",
      status: "CLEAN",
      lines: [
        { text: "$ git status -sb", type: "cmd" },
        { text: "## main...origin/main [clean]", type: "success" },
        { text: "commit 5eac7e9 (HEAD -> main)", type: "cyan" },
        { text: "Author: Dev <build@hypergrid.sh>", type: "dim" },
      ]
    },
    {
      id: 7,
      title: "docker-compose",
      cwd: "~/infra/db",
      process: "docker",
      status: "UP",
      lines: [
        { text: "$ docker ps --format '{{.Names}}: {{.Status}}'", type: "cmd" },
        { text: "hyper-valkey: Up 4 hours (healthy)", type: "success" },
        { text: "hyper-pg: Up 4 hours (port 5432)", type: "success" },
      ]
    },
    {
      id: 8,
      title: "tail-logs",
      cwd: "~/var/log",
      process: "tail -f",
      status: "STREAM",
      lines: [
        { text: "$ tail -f /var/log/hypergrid.log", type: "cmd" },
        { text: "[2026-10-16 14:30:12] Grid resized to 3x3", type: "dim" },
        { text: "[2026-10-16 14:30:15] Keyboard shortcut ⌘4 triggered", type: "lime" },
        { text: "[2026-10-16 14:30:20] Focus rim active on cell 4", type: "dim" },
      ]
    },
    {
      id: 9,
      title: "system-pty",
      cwd: "~",
      process: "zsh",
      status: "IDLE",
      lines: [
        { text: "$ echo 'HYPERGRID NATIVE TERMINAL 2026'", type: "cmd" },
        { text: "HYPERGRID NATIVE TERMINAL 2026", type: "lime" },
        { text: "$ uname -mprs", type: "cmd" },
        { text: "Darwin 24.2.0 arm64 Apple M3 Max", type: "cyan" },
      ]
    },
  ]);

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminals.slice(0, currentConfig.count);

  const triggerCommand = (cmdText, typeText = 'info') => {
    setTerminals(prev => prev.map(term => {
      if (term.id === activePane) {
        return {
          ...term,
          lines: [
            ...term.lines.slice(-4),
            { text: `$ ${cmdText}`, type: "cmd" },
            { text: `Executing in pane #${activePane}... ⚡`, type: "lime" }
          ]
        };
      }
      return term;
    }));
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header telemetry */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#ccff00] mb-2">
            <span>[ 01 // INTERACTIVE DECK ]</span>
            <span>•</span>
            <span className="text-zinc-400">TEST THE MULTIPLEXER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            LIVE GRID SIMULATOR
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Switch grid topologies, trigger real-time commands, or press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs">⌘1</kbd>–<kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs">⌘9</kbd> keycaps to instantly focus panes.
          </p>
        </div>

        {/* CRT Scanline & Font Controls */}
        <div className="flex items-center space-x-3 text-xs font-mono">
          <button
            onClick={() => setScanlines(!scanlines)}
            className={`px-3 py-1.5 rounded border transition-colors flex items-center space-x-1.5 ${
              scanlines 
                ? 'bg-[#ccff00]/10 border-[#ccff00] text-[#ccff00]' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>CRT SCANLINES: {scanlines ? 'ON' : 'OFF'}</span>
          </button>

          <div className="flex items-center space-x-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-zinc-300">
            <button
              onClick={() => setFontSize(f => Math.max(10, f - 1))}
              className="hover:text-[#ccff00] px-1 font-bold"
              title="Zoom Out"
            >
              -
            </button>
            <span className="text-[11px] w-8 text-center text-zinc-400">{fontSize}pt</span>
            <button
              onClick={() => setFontSize(f => Math.min(18, f + 1))}
              className="hover:text-[#ccff00] px-1 font-bold"
              title="Zoom In"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Hardware Layout Switcher Deck */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6 p-2 rounded-lg bg-[#0a0c12] border border-white/10">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono text-zinc-500 uppercase px-2">TOPOLOGY:</span>
          <div className="flex items-center space-x-1.5 flex-wrap">
            {Object.entries(layoutConfigs).map(([key, config]) => {
              const isSelected = layout === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setLayout(key);
                    if (activePane > config.count) setActivePane(1);
                  }}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-[#ccff00] text-black shadow-[0_2px_0_0_#99bf00] translate-y-0.5'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  <span className={isSelected ? 'text-black' : 'text-zinc-500'}>▞</span>
                  <span>{config.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Command Injector */}
        <div className="flex items-center space-x-1.5 text-xs font-mono">
          <span className="text-zinc-500 text-[11px] hidden xl:inline">EXEC IN PANE #{activePane}:</span>
          <button
            onClick={() => triggerCommand('claude --dangerously-skip-permissions')}
            className="px-2.5 py-1 rounded bg-[#161a24] hover:bg-[#1f2533] border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors text-[11px]"
          >
            ⚡ claude
          </button>
          <button
            onClick={() => triggerCommand('bun dev')}
            className="px-2.5 py-1 rounded bg-[#161a24] hover:bg-[#1f2533] border border-white/10 text-yellow-400 hover:text-yellow-300 transition-colors text-[11px]"
          >
            bun dev
          </button>
          <button
            onClick={() => triggerCommand('cargo watch -x run')}
            className="px-2.5 py-1 rounded bg-[#161a24] hover:bg-[#1f2533] border border-white/10 text-orange-400 hover:text-orange-300 transition-colors text-[11px]"
          >
            cargo
          </button>
        </div>
      </div>

      {/* Cyber Hardware Terminal Window */}
      <div className={`relative rounded-xl border border-white/15 bg-[#06070a] shadow-2xl overflow-hidden ${scanlines ? 'scanlines' : ''}`}>
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f17] border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
            <span className="text-xs font-mono font-bold text-zinc-300 ml-3 tracking-wide">
              HYPERGRID // PTY_MULTIPLEXER
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] font-mono text-zinc-400">
            <span className="text-zinc-500 hidden sm:inline">ACTIVE PANE:</span>
            <span className="px-2 py-0.5 rounded bg-[#ccff00]/15 text-[#ccff00] font-bold border border-[#ccff00]/30">
              #{activePane} [{terminals.find(t => t.id === activePane)?.title || 'zsh'}]
            </span>
            <span className="text-zinc-500 hidden md:inline">PTY: /dev/ttys00{activePane}</span>
          </div>
        </div>

        {/* Dynamic Grid Layout Viewport */}
        <div className={`grid ${currentConfig.cols} gap-1 p-1 bg-[#090b12] min-h-[460px]`}>
          {visiblePanes.map((pane) => {
            const isActive = activePane === pane.id;
            return (
              <div
                key={pane.id}
                onClick={() => setActivePane(pane.id)}
                className={`relative rounded-lg p-3.5 transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-[#0d101a] ring-2 ring-[#ccff00] shadow-[inset_0_0_20px_rgba(204,255,0,0.06)]'
                    : 'bg-[#0a0c14] hover:bg-[#0c0e18] border border-white/[0.06]'
                }`}
                style={{ fontSize: `${fontSize}px` }}
              >
                {/* Pane Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px] font-mono">
                  <div className="flex items-center space-x-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#ccff00] animate-pulse' : 'bg-zinc-600'}`} />
                    <span className={isActive ? 'text-[#ccff00] font-bold' : 'text-zinc-400'}>
                      ⌘{pane.id} // {pane.title}
                    </span>
                  </div>
                  <span className="text-zinc-500">{pane.process}</span>
                </div>

                {/* Simulated Terminal Lines */}
                <div className="space-y-1 font-mono text-[11px] leading-relaxed flex-1 overflow-y-auto no-scrollbar">
                  {pane.lines.map((line, idx) => {
                    let colorClass = "text-zinc-300";
                    if (line.type === 'cmd') colorClass = "text-white font-bold";
                    if (line.type === 'cyan') colorClass = "text-[#00f0ff]";
                    if (line.type === 'lime') colorClass = "text-[#ccff00]";
                    if (line.type === 'success') colorClass = "text-emerald-400";
                    if (line.type === 'dim') colorClass = "text-zinc-500";
                    if (line.type === 'info') colorClass = "text-blue-400";

                    return (
                      <div key={idx} className={`${colorClass} truncate`}>
                        {line.text}
                      </div>
                    );
                  })}
                  {/* Blinking cursor in active pane */}
                  {isActive && (
                    <div className="flex items-center space-x-1.5 text-zinc-400 mt-1">
                      <span className="text-[#ccff00]">$</span>
                      <span className="w-2 h-3.5 bg-[#ccff00] animate-pulse inline-block" />
                    </div>
                  )}
                </div>

                {/* Pane Footer Status */}
                <div className="pt-2 mt-2 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span className="truncate">{pane.cwd}</span>
                  <span className={isActive ? 'text-[#ccff00]' : 'text-zinc-600'}>
                    STATUS: {pane.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mechanical Keycap Switcher Deck (Bottom) */}
      <div className="mt-8 p-4 rounded-xl deck-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
          <span className="text-[#ccff00] font-bold">PHYSICAL DECK:</span>
          <span>Click any keycap to switch focus or test ⌘1-9 shortcut</span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
          <div className="keycap px-3 py-2 rounded font-mono text-xs font-bold text-zinc-300 flex items-center space-x-1">
            <span>⌘</span>
          </div>
          <span className="text-zinc-600 font-mono">+</span>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            const isTargetActive = activePane === num;
            const isVisibleInLayout = num <= currentConfig.count;
            return (
              <button
                key={num}
                onClick={() => {
                  if (num > currentConfig.count) {
                    // Automatically expand layout if higher key is clicked!
                    if (num <= 4) setLayout('2x2');
                    else if (num <= 6) setLayout('2x3');
                    else setLayout('3x3');
                  }
                  setActivePane(num);
                }}
                className={`keycap px-3.5 py-2 rounded font-mono text-xs font-bold cursor-pointer ${
                  isTargetActive ? 'active' : ''
                } ${!isVisibleInLayout ? 'opacity-40 hover:opacity-100' : ''}`}
              >
                {num}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
