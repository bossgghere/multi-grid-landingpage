import React from 'react';
import { LayoutGrid, Zap, Keyboard, Cpu, FolderGit2, Shield, Sliders, Layers } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: "Dynamic Grid Matrix",
    description: "Switch seamlessly between 1×1, 1×2, 2×1, 2×2, 2×3, 2×4, 3×3, or custom row/column layouts without opening separate windows.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "Zero Session Loss",
    description: "Changing layouts never terminates your active shells. Hidden sessions remain active in memory and seamlessly restore when returning to larger grids.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Keyboard,
    title: "Instant ⌘1–⌘9 Navigation",
    description: "Jump to any pane instantly with Command+1 through Command+9 shortcuts, illuminated by an electric neon focus border.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cpu,
    title: "Native Metal & <40MB RAM",
    description: "No Electron or web-wrapper overhead. Built 100% natively in Swift, SwiftUI, and AppKit with GPU-accelerated glyph rasterization.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Sliders,
    title: "Proportional Split Resizing",
    description: "Interactive draggable splitters between rows and columns with proportional resizing. Double-click any divider to equalize panes.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FolderGit2,
    title: "Independent Directory Tracking",
    description: "Each terminal operates in its own project directory independently, dynamically reporting git branch and working folder without constraints.",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>Architected for Power Users</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Everything You Need. Nothing You Don't.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Kadra strips away the clutter of traditional terminal emulators and replaces it with native macOS speed and visual grid control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <div
              key={index}
              className="p-7 rounded-2xl glass-panel border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} p-[1px] mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                <div className="w-full h-full bg-[#0a0c12] rounded-[11px] flex items-center justify-center text-white">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                {feat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
