import React from 'react';

const metrics = [
  {
    name: 'Binary Size',
    hypergrid: '2.4 MB',
    electron: '450 MB+',
    difference: '99% smaller',
    note: 'Zero node runtime or chromium bundle',
  },
  {
    name: 'Memory (6 Active Panes)',
    hypergrid: '< 40 MB',
    electron: '1.2 GB+',
    difference: '30× lighter',
    note: 'Native Swift memory footprint',
  },
  {
    name: 'Cold Launch Time',
    hypergrid: '12 ms',
    electron: '2,400 ms',
    difference: 'Instant',
    note: 'Ready before your hand leaves ⌘Space',
  },
  {
    name: 'Keystroke Latency',
    hypergrid: '0.4 ms',
    electron: '45 ms',
    difference: '120 FPS sync',
    note: 'Metal GPU accelerated render engine',
  },
  {
    name: 'Crash & Process Recovery',
    hypergrid: 'Instant Restore',
    electron: 'Lost Shell State',
    difference: 'Zero loss',
    note: 'Independent daemon process supervisor',
  },
];

export default function BenchmarksSection() {
  return (
    <section id="performance" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
          Engineering Performance
        </h2>
        <p className="mt-3 text-base text-[#86868b] max-w-xl mx-auto font-normal">
          Built purely in Swift 6 and Metal. No Chromium, no web views, zero bloat.
        </p>
      </div>

      <div className="apple-card rounded-3xl overflow-hidden border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white/95">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.06] bg-[#fbfbfd]">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#86868b]">Metric</th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                  HyperGrid (Native)
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Electron Terminals
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-right text-[#86868b]">
                  Advantage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.05] text-sm">
              {metrics.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f5f5f7]/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-[#1d1d1f]">
                    {row.name}
                    <div className="text-xs text-[#86868b] font-normal mt-0.5">{row.note}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-[#0071e3]">
                    {row.hypergrid}
                  </td>
                  <td className="py-4 px-6 text-[#86868b] font-mono text-xs">
                    {row.electron}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#0071e3]/10 text-[#0071e3]">
                      {row.difference}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
