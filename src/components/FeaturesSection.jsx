import React from 'react';
import { LayoutGrid, Layers, Keyboard, Cpu } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: "Dynamic Grid Matrix",
    desc: "Switch between 1×1, 1×2, 2×1, 2×2, 2×3, and 3×3 layouts instantly without juggling multiple floating windows.",
  },
  {
    icon: Layers,
    title: "Zero Session Loss",
    desc: "Downsizing a layout never terminates your background processes. Hidden shells stay alive in memory and restore immediately.",
  },
  {
    icon: Keyboard,
    title: "Instant ⌘1–⌘9 Navigation",
    desc: "Jump focus across any terminal cell in 0 milliseconds using native macOS home-row keybindings.",
  },
  {
    icon: Cpu,
    title: "Swift 6 & Metal Engine",
    desc: "Under 40MB memory footprint, instantaneous cold startup, and GPU-accelerated glyph rasterization.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
          Designed for speed. <br className="hidden sm:inline" />
          Built for Mac.
        </h2>
        <p className="text-base text-[#86868b]">
          Every pixel and process is engineered with native AppKit architecture for zero input latency and minimal battery consumption.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="apple-card p-6 sm:p-8 rounded-3xl transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#86868b] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
