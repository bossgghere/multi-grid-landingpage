import React, { useState } from 'react';
import { LayoutGrid, Sparkles, Folder, Maximize2, RotateCcw, X, SunMedium, Minus, Plus } from 'lucide-react';
import { terminalData } from '../data/mockTerminals';

export default function InteractiveTerminalPreview() {
  const [layout, setLayout] = useState('2x2');
  const [activePane, setActivePane] = useState(1);
  const [fontSize, setFontSize] = useState(13);

  // Layout configs
  const layoutConfigs = {
    '1x1': { rows: 1, cols: 1, count: 1, gridClass: 'grid-cols-1 grid-rows-1' },
    '1x2': { rows: 1, cols: 2, count: 2, gridClass: 'grid-cols-1 md:grid-cols-2 grid-rows-1' },
    '2x1': { rows: 2, cols: 1, count: 2, gridClass: 'grid-cols-1 grid-rows-2' },
    '2x2': { rows: 2, cols: 2, count: 4, gridClass: 'grid-cols-1 md:grid-cols-2 grid-rows-2' },
    '2x3': { rows: 2, cols: 3, count: 6, gridClass: 'grid-cols-1 md:grid-cols-3 grid-rows-2' },
    '3x3': { rows: 3, cols: 3, count: 6, gridClass: 'grid-cols-1 md:grid-cols-3 grid-rows-3' }, // showcase 6
  };

  const currentConfig = layoutConfigs[layout] || layoutConfigs['2x2'];
  const visiblePanes = terminalData.slice(0, currentConfig.count);

  return (
    <section id="demo" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header info */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Preview</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Experience the Grid in Action
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mx-auto mt-2">
          Click the layout pills or click inside any pane to see the focused cyan rim and active status update in real time.
        </p>
      </div>

      {/* macOS Window Mockup */}
      <div className="relative rounded-2xl glass-panel p-2.5 shadow-2xl terminal-border-glow border border-white/10 max-w-5xl mx-auto overflow-hidden">
        {/* macOS Title Bar */}
        <div className="flex flex-wrap items-center justify-between px-3 py-2.5 bg-[#0a0c10] rounded-xl border border-white/5 gap-3 mb-2.5">
          {/* Traffic Lights */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 cursor-pointer" />
            <span className="text-[11px] font-mono font-medium text-slate-400 ml-2">Kadra</span>
          </div>

          {/* Interactive Layout Pill Switcher */}
          <div className="flex items-center space-x-1 p-1 rounded-lg bg-black/40 border border-white/5">
            {Object.keys(layoutConfigs).map((key) => {
              const isSelected = layout === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setLayout(key);
                    if (activePane > layoutConfigs[key].count) {
                      setActivePane(1);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-white border border-cyan-400/30 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {key.replace('x', '×')}
                </button>
              );
            })}
          </div>

          {/* Font Zoom Controls */}
          <div className="flex items-center space-x-1 p-1 rounded-lg bg-black/40 border border-white/5 text-xs font-mono">
            <button
              onClick={() => setFontSize(Math.max(10, fontSize - 1))}
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
              title="Zoom Out (⌘-)"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-1.5 text-slate-200 text-[11px]">{fontSize}pt</span>
            <button
              onClick={() => setFontSize(Math.min(20, fontSize + 1))}
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
              title="Zoom In (⌘+)"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Dynamic Grid Panes Container */}
        <div className={`grid gap-2.5 min-h-[460px] ${currentConfig.gridClass}`}>
          {visiblePanes.map((pane) => {
            const isFocused = activePane === pane.id;
            return (
              <div
                key={pane.id}
                onClick={() => setActivePane(pane.id)}
                className={`relative rounded-xl overflow-hidden flex flex-col transition-all duration-150 cursor-pointer bg-[#07090e] border ${
                  isFocused
                    ? 'border-cyan-400/80 shadow-[0_0_20px_-3px_rgba(14,165,233,0.35)]'
                    : 'border-white/[0.07] hover:border-white/20'
                }`}
              >
                {/* Pane Header */}
                <div
                  className={`flex items-center justify-between px-3 py-1.5 border-b text-[11px] ${
                    isFocused
                      ? 'bg-[#10141f] border-cyan-500/20'
                      : 'bg-[#0a0c12] border-white/5 text-slate-400'
                  }`}
                >
                  {/* Left: Badge + PID indicator */}
                  <div className="flex items-center space-x-2">
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isFocused ? 'bg-cyan-500 text-white' : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      #{pane.id}
                    </span>
                    <span className={`font-mono text-[10px] font-semibold ${isFocused ? 'text-cyan-400' : 'text-slate-500'}`}>
                      ⌘{pane.id}
                    </span>
                    <span className="font-medium text-slate-300">{pane.title}</span>
                  </div>

                  {/* Right: Path & mini controls */}
                  <div className="flex items-center space-x-2.5">
                    <div className="flex items-center space-x-1 text-slate-400 font-mono text-[10px]">
                      <Folder className="w-3 h-3 text-slate-500" />
                      <span>{pane.path}</span>
                    </div>
                    <div className="flex items-center space-x-1 opacity-70">
                      <Maximize2 className="w-2.5 h-2.5 hover:text-white" />
                      <X className="w-2.5 h-2.5 hover:text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Terminal Content Lines */}
                <div
                  className="p-3.5 font-mono flex-1 overflow-hidden space-y-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {pane.lines.map((line, idx) => {
                    let colorClass = 'text-slate-300';
                    if (line.type === 'cmd') colorClass = 'text-cyan-300 font-bold';
                    if (line.type === 'success') colorClass = 'text-emerald-400';
                    if (line.type === 'info') colorClass = 'text-sky-300';
                    if (line.type === 'yellow') colorClass = 'text-amber-300';
                    if (line.type === 'dim') colorClass = 'text-slate-500';

                    return (
                      <div key={idx} className={`${colorClass} leading-tight truncate`}>
                        {line.text}
                      </div>
                    );
                  })}
                  {/* Blinking Cursor */}
                  {isFocused && (
                    <div className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5 align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-2.5 px-3 py-1.5 bg-[#0a0c10] rounded-xl border border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-medium">Terminal #{activePane} Focused (⌘{activePane})</span>
            <span className="text-slate-600">•</span>
            <span>{currentConfig.count} Panes Active</span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-slate-500 text-[10px]">
            <span>⌘1–⌘9: Focus Pane</span>
            <span>•</span>
            <span>⌘+/-: Font Zoom</span>
            <span>•</span>
            <span>⌘K: Clear Screen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
