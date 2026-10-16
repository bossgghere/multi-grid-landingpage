import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu, Sliders, FolderGit2, Zap, Terminal } from 'lucide-react';

const specs = [
  {
    tag: "01 // MATRIX",
    title: "1×1 TO 3×3 DYNAMIC TOPOLOGY",
    desc: "Switch between 1×1, 1×2, 2×1, 2×2, 2×3, 2×4, 3×3, or arbitrary custom splits. Panes automatically distribute across your display with zero window-snapping headaches.",
    icon: LayoutGrid,
    accent: "text-[#ccff00]",
  },
  {
    tag: "02 // STATE",
    title: "ZERO SESSION TERMINATION",
    desc: "Downsizing a 3×3 grid to 1×1 will never kill your background tasks. Hidden PTY sessions remain alive in memory and re-appear instantly when restoring the matrix.",
    icon: Layers,
    accent: "text-[#00f0ff]",
  },
  {
    tag: "03 // NAV",
    title: "INSTANT ⌘1–⌘9 PANE HOPS",
    desc: "Jump focus across any grid cell in 0 milliseconds using standard macOS keyboard keybindings. Active pane is visibly spotlighted with an electric laser rim.",
    icon: Keyboard,
    accent: "text-[#ccff00]",
  },
  {
    tag: "04 // KERNEL",
    title: "SWIFT 6 & PURE APPKIT",
    desc: "Zero web views, zero Node processes. Compiled directly with Swift 6 and Metal glyph rasterization for ultra-low battery consumption and zero heat spikes.",
    icon: Cpu,
    accent: "text-purple-400",
  },
  {
    tag: "05 // GEOMETRY",
    title: "PROPORTIONAL RESIZE DIVIDERS",
    desc: "Drag any row or column splitter to customize pane dimensions. Double-click any divider to automatically equalize grid distribution.",
    icon: Sliders,
    accent: "text-amber-400",
  },
  {
    tag: "06 // ISOLATION",
    title: "INDEPENDENT CWD & GIT TRACKING",
    desc: "Every pane runs its own isolated subshell. Seamlessly cd into different microservices, run separate AI agents, and observe multiple git repos side by side.",
    icon: FolderGit2,
    accent: "text-pink-400",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#ccff00] mb-2">
            <span>[ 03 // ARCHITECTURE ]</span>
            <span>•</span>
            <span className="text-zinc-400">ENGINEERING BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            DESIGNED FOR TERMINAL MAXIS
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
          Built for engineers who juggle local AI models, Docker containers, dev servers, and git branches simultaneously.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specs.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="deck-panel rounded-lg p-6 border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    {item.tag}
                  </span>
                  <div className={`p-2 rounded bg-white/[0.03] ${item.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-black tracking-tight text-white uppercase mb-2 group-hover:text-[#ccff00] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>HYPERGRID_SUBSYS</span>
                <span className="text-zinc-500">READY</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
