import React from 'react';
import { Check, X, Zap, Cpu, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function SpecComparison() {
  const comparisons = [
    {
      metric: "Binary Bundle Size",
      hypergrid: "2.4 MB (Pure Swift)",
      electron: "480 MB (Chromium + Node runtime)",
      winner: true,
    },
    {
      metric: "RAM with 6 Active Panes",
      hypergrid: "<38 MB resident",
      electron: "1,200 MB – 1.8 GB",
      winner: true,
    },
    {
      metric: "Keystroke Render Latency",
      hypergrid: "0.4 ms (Apple Metal GPU pipeline)",
      electron: "38 ms – 65 ms (DOM Reflow)",
      winner: true,
    },
    {
      metric: "Cold Startup Time",
      hypergrid: "12 ms (Instantaneous)",
      electron: "2.4 seconds (Splash screen)",
      winner: true,
    },
    {
      metric: "Network Privacy",
      hypergrid: "100% Offline, Zero Telemetry",
      electron: "Continuous tracking & analytics",
      winner: true,
    },
    {
      metric: "Cloud & Account Gate",
      hypergrid: "None. Open source & standalone",
      electron: "Mandatory login / subscription",
      winner: true,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#ccff00] mb-2">
          <span>[ 02 // HARDWARE AUDIT ]</span>
          <span>•</span>
          <span className="text-zinc-400">BENCHMARKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          NATIVE METAL VS. ELECTRON BLOAT
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Why waste gigabytes of unified memory running Chrome tabs when you just want a terminal?
        </p>
      </div>

      {/* Comparison Table */}
      <div className="deck-panel rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="grid grid-cols-12 bg-[#0e1118] px-4 sm:px-6 py-4 border-b border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
          <div className="col-span-5 sm:col-span-4 text-zinc-300">BENCHMARK METRIC</div>
          <div className="col-span-4 sm:col-span-4 text-[#ccff00] flex items-center space-x-1.5">
            <span>⚡ HYPERGRID (SWIFT)</span>
          </div>
          <div className="col-span-3 sm:col-span-4 text-zinc-500">ELECTRON ALTERNATIVES</div>
        </div>

        <div className="divide-y divide-white/[0.06] text-xs font-mono">
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 px-4 sm:px-6 py-4 items-center hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-5 sm:col-span-4 font-semibold text-zinc-200">
                {row.metric}
              </div>
              <div className="col-span-4 sm:col-span-4 text-white font-bold flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                <span className="text-[#ccff00]">{row.hypergrid}</span>
              </div>
              <div className="col-span-3 sm:col-span-4 text-zinc-500 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <span>{row.electron}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
