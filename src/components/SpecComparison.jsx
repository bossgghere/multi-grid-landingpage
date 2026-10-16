import React from 'react';

export default function SpecComparison() {
  const comparisons = [
    { metric: "Binary Download Size", hypergrid: "2.4 MB (Native Swift)", other: "450 MB+ (Electron)" },
    { metric: "Memory Usage (6 Panes)", hypergrid: "<40 MB RAM", other: "1.2 GB+ RAM" },
    { metric: "Cold Launch Speed", hypergrid: "Instant (12 ms)", other: "2.5+ seconds" },
    { metric: "Keystroke Latency", hypergrid: "0.4 ms (Metal GPU)", other: "40 ms+ (DOM)" },
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Performance Benchmarks
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
          Native macOS architecture vs. typical web-wrapper terminals.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#090a10] overflow-hidden">
        <div className="grid grid-cols-3 bg-[#0e1017] px-5 py-3 border-b border-white/10 text-xs font-mono font-bold text-zinc-400">
          <div>METRIC</div>
          <div className="text-[#ccff00]">HYPERGRID</div>
          <div className="text-zinc-500">ELECTRON ALTERNATIVES</div>
        </div>

        <div className="divide-y divide-white/5 text-xs font-mono">
          {comparisons.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 px-5 py-3.5 items-center hover:bg-white/[0.02]">
              <div className="text-zinc-300 font-medium">{row.metric}</div>
              <div className="text-[#ccff00] font-bold">{row.hypergrid}</div>
              <div className="text-zinc-500">{row.other}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
