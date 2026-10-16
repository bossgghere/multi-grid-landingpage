import React from 'react';
import { Keyboard } from 'lucide-react';

const shortcuts = [
  { keys: ['⌘', '1...9'], action: 'Focus Pane', desc: 'Jump focus to terminal 1 through 9' },
  { keys: ['⌘', '+'], action: 'Zoom In', desc: 'Increase global font size across all panes' },
  { keys: ['⌘', '-'], action: 'Zoom Out', desc: 'Decrease global font size across all panes' },
  { keys: ['⌘', '0'], action: 'Reset Zoom', desc: 'Restore default 13pt font size' },
  { keys: ['⌘', 'K'], action: 'Clear Buffer', desc: 'Clear active terminal scrollback' },
  { keys: ['⌘', '⇧', 'M'], action: 'Maximize', desc: 'Toggle full-window view for active pane' },
];

export default function ShortcutsSection() {
  return (
    <section id="shortcuts" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-2">
          Keep your hands on the home row.
        </h2>
        <p className="text-sm text-[#86868b]">
          Every action is accessible via standard macOS keyboard shortcuts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {shortcuts.map((sc, index) => (
          <div
            key={index}
            className="apple-card p-4 rounded-2xl flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-semibold text-[#1d1d1f]">{sc.action}</div>
              <div className="text-xs text-[#86868b] mt-0.5">{sc.desc}</div>
            </div>
            <div className="flex items-center space-x-1.5 shrink-0 ml-4">
              {sc.keys.map((k, kIdx) => (
                <span
                  key={kIdx}
                  className="apple-keycap px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
