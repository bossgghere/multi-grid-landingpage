import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: "Dynamic Grid Matrix",
    desc: "Switch between 1×1, 1×2, 2×1, 2×2, 2×3, 3×3, or custom layouts without managing separate OS windows.",
  },
  {
    icon: Layers,
    title: "Zero Session Loss",
    desc: "Downsizing a 3×3 grid to 1×1 never kills your background tasks. Hidden shells stay active in memory and restore instantly.",
  },
  {
    icon: Keyboard,
    title: "Instant ⌘1–⌘9 Navigation",
    desc: "Jump focus to any terminal cell in 0 milliseconds using native macOS home-row keybindings.",
  },
  {
    icon: Cpu,
    title: "Native Swift & Metal Speed",
    desc: "Built natively with Swift and AppKit. Under 40MB memory usage, instantaneous startup, and GPU-accelerated glyphs.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Engineered for Speed
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-md mx-auto">
          Everything you need for a distraction-free multi-terminal workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#090a10] border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] mb-3">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
