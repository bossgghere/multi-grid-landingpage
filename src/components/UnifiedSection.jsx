import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu } from 'lucide-react';

export default function UnifiedSection() {
  const features = [
    {
      icon: LayoutGrid,
      title: "Dynamic Grid Matrix",
      desc: "Switch between 1×1, 1×2, 2×1, 2×2, 2×3, 3×3 without managing multiple separate windows.",
    },
    {
      icon: Layers,
      title: "Zero Session Loss",
      desc: "Downsizing layouts never kills your processes. Hidden shells stay alive in memory and restore instantly.",
    },
    {
      icon: Keyboard,
      title: "Instant ⌘1–⌘9 Navigation",
      desc: "Jump focus to any terminal cell in 0ms with native macOS home-row keybindings.",
    },
    {
      icon: Cpu,
      title: "Native Swift & Metal Speed",
      desc: "Under 40MB RAM residency, instantaneous startup, and GPU-accelerated text rendering.",
    },
  ];

  const shortcuts = [
    { keys: ['⌘', '1...9'], action: 'Focus Pane' },
    { keys: ['⌘', '+'], action: 'Zoom In' },
    { keys: ['⌘', '-'], action: 'Zoom Out' },
    { keys: ['⌘', '0'], action: 'Reset Zoom' },
    { keys: ['⌘', 'K'], action: 'Clear Buffer' },
    { keys: ['⌘', '⇧', 'M'], action: 'Maximize' },
  ];

  const benchmarks = [
    { metric: "Binary Download Size", hyper: "2.4 MB", other: "450 MB+" },
    { metric: "Memory (6 Panes)", hyper: "<40 MB", other: "1.2 GB+" },
    { metric: "Cold Launch Speed", hyper: "12 ms", other: "2.5s+" },
    { metric: "Keystroke Latency", hyper: "0.4 ms", other: "40 ms+" },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left: 4 Core Features (7 columns) */}
        <div className="lg:col-span-7">
          <div className="text-left mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Engineered for Speed
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Zero Electron bloat. 100% native AppKit & Swift 6 architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#090a10] border border-white/5 text-left hover:border-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Shortcuts & Benchmarks Combined (5 columns) */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {/* Shortcuts Card */}
          <div className="p-5 rounded-xl bg-[#090a10] border border-white/5 text-left">
            <h3 className="text-xs sm:text-sm font-mono font-bold text-zinc-200 uppercase mb-3 flex items-center justify-between">
              <span>Shortcuts</span>
              <span className="text-zinc-500 font-normal text-xs">Home-Row</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {shortcuts.map((sc, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono py-1">
                  <span className="text-zinc-400">{sc.action}</span>
                  <div className="flex items-center space-x-1">
                    {sc.keys.map((k, kIdx) => (
                      <kbd key={kIdx} className="px-1.5 sm:px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-semibold">
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks Card */}
          <div className="p-5 rounded-xl bg-[#090a10] border border-white/5 text-left">
            <h3 className="text-xs sm:text-sm font-mono font-bold text-zinc-200 uppercase mb-3 flex items-center justify-between">
              <span>Benchmarks</span>
              <span className="text-[#ccff00] text-xs">vs. Electron</span>
            </h3>

            <div className="divide-y divide-white/5 text-xs font-mono">
              {benchmarks.map((b, idx) => (
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-zinc-400">{b.metric}</span>
                  <div className="flex items-center space-x-3 text-right">
                    <span className="text-[#ccff00] font-bold text-xs sm:text-sm">{b.hyper}</span>
                    <span className="text-zinc-600 line-through text-[11px] sm:text-xs">{b.other}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
