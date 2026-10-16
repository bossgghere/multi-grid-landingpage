import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu, Zap, Sliders } from 'lucide-react';

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
    { metric: "Binary Size", hyper: "2.4 MB", other: "450 MB+" },
    { metric: "RAM (6 Panes)", hyper: "<40 MB", other: "1.2 GB+" },
    { metric: "Startup Speed", hyper: "12 ms", other: "2.5s+" },
    { metric: "Keystroke Latency", hyper: "0.4 ms", other: "40 ms+" },
  ];

  return (
    <section id="features" className="py-8 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left: 4 Core Features (7 columns) */}
        <div className="lg:col-span-7">
          <div className="text-left mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Engineered for Speed
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Zero Electron bloat. 100% native AppKit architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#090a10] border border-white/5 text-left"
                >
                  <div className="w-7 h-7 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] mb-2.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Shortcuts & Benchmarks Combined (5 columns) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Shortcuts Card */}
          <div className="p-4 rounded-lg bg-[#090a10] border border-white/5 text-left">
            <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase mb-3 flex items-center justify-between">
              <span>Shortcuts</span>
              <span className="text-zinc-500 font-normal text-[10px]">Home-Row</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {shortcuts.map((sc, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px] font-mono py-0.5">
                  <span className="text-zinc-400">{sc.action}</span>
                  <div className="flex items-center space-x-0.5">
                    {sc.keys.map((k, kIdx) => (
                      <kbd key={kIdx} className="px-1.5 py-0.2 rounded bg-zinc-900 border border-white/10 text-[10px] text-zinc-300 font-semibold">
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks Card */}
          <div className="p-4 rounded-lg bg-[#090a10] border border-white/5 text-left">
            <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase mb-2.5 flex items-center justify-between">
              <span>Benchmarks</span>
              <span className="text-[#ccff00] text-[10px]">vs. Electron</span>
            </h3>

            <div className="divide-y divide-white/5 text-[11px] font-mono">
              {benchmarks.map((b, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5">
                  <span className="text-zinc-400">{b.metric}</span>
                  <div className="flex items-center space-x-3 text-right">
                    <span className="text-[#ccff00] font-bold">{b.hyper}</span>
                    <span className="text-zinc-600 line-through text-[10px]">{b.other}</span>
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
