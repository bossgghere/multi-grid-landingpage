import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu } from 'lucide-react';

export default function UnifiedSection() {
  const features = [
    {
      icon: LayoutGrid,
      title: "Dynamic Grid Matrix",
      desc: "Switch between 1×1, 1×2, 2×1, 2×2, 2×3, and 3×3 layouts instantly without juggling multiple windows.",
    },
    {
      icon: Layers,
      title: "Preserved Sessions",
      desc: "Downsizing a layout never kills your shells. Background processes stay active and restore immediately.",
    },
    {
      icon: Keyboard,
      title: "Instant ⌘1–⌘9 Navigation",
      desc: "Jump focus across any terminal cell in 0 milliseconds using native macOS home-row keybindings.",
    },
    {
      icon: Cpu,
      title: "Swift 6 & Metal Engine",
      desc: "Under 40MB memory footprint, instantaneous cold start, and GPU-accelerated glyph rasterization.",
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
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: 4 Core Features (7 columns) */}
        <div className="lg:col-span-7">
          <div className="text-left mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Designed for speed. Built for Mac.
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-lg">
              Every detail is engineered with native AppKit architecture for zero latency and minimal battery consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 text-left hover:border-white/15 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-[#2997ff] mb-3.5 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Shortcuts & Benchmarks (5 columns) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Shortcuts Card */}
          <div className="p-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 text-left">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3.5 flex items-center justify-between">
              <span>Keyboard Navigation</span>
              <span className="text-zinc-500 font-normal normal-case text-xs">macOS Native</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {shortcuts.map((sc, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1">
                  <span className="text-zinc-400">{sc.action}</span>
                  <div className="flex items-center space-x-1">
                    {sc.keys.map((k, kIdx) => (
                      <kbd key={kIdx} className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-300 font-medium">
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks Card */}
          <div className="p-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 text-left">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3.5 flex items-center justify-between">
              <span>Performance</span>
              <span className="text-[#2997ff] font-normal normal-case text-xs">Native vs. Electron</span>
            </h3>

            <div className="divide-y divide-white/5 text-xs">
              {benchmarks.map((b, idx) => (
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-zinc-400">{b.metric}</span>
                  <div className="flex items-center space-x-3 text-right font-mono">
                    <span className="text-[#2997ff] font-semibold text-xs sm:text-sm">{b.hyper}</span>
                    <span className="text-zinc-600 line-through text-[11px]">{b.other}</span>
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
