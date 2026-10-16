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
    <section id="features" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered for Speed
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
          Everything you need for a distraction-free multi-terminal workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#090a10] border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] mb-4">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
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
