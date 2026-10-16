import React from 'react';
import { Command, Keyboard } from 'lucide-react';

const shortcuts = [
  { keys: ['⌘', '1...9'], action: 'Focus Panes', desc: 'Instantly jump focus to corresponding terminal 1 through 9' },
  { keys: ['⌘', '+'], action: 'Zoom In', desc: 'Increase global font size across all terminals' },
  { keys: ['⌘', '-'], action: 'Zoom Out', desc: 'Decrease global font size across all terminals' },
  { keys: ['⌘', '0'], action: 'Reset Zoom', desc: 'Reset font size back to crisp 13pt default' },
  { keys: ['⌘', 'K'], action: 'Clear Screen', desc: 'Clear the active terminal viewport and scrollback' },
  { keys: ['⌘', '⌥', '1...7'], action: 'Switch Layout', desc: 'Instantly toggle presets (1×1, 1×2, 2×1, 2×2, 2×3, 3×3)' },
  { keys: ['⌘', '⇧', 'M'], action: 'Maximize Pane', desc: 'Toggle full-window view for active terminal and restore' },
  { keys: ['⌘', '⇧', 'R'], action: 'Restart Shell', desc: 'Restart the shell process in the active pane' },
];

export default function ShortcutsShowcase() {
  return (
    <section id="shortcuts" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Keyboard className="w-3.5 h-3.5" />
          <span>Keyboard-First Workflow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Keep Your Hands on the Home Row
        </h2>
        <p className="text-sm text-slate-400 mt-2.5">
          Everything in Kadra can be navigated instantly with standard macOS keyboard shortcuts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shortcuts.map((sc, index) => (
          <div
            key={index}
            className="p-4 rounded-xl glass-panel border border-white/8 flex items-center justify-between hover:border-white/15 transition-all"
          >
            <div>
              <div className="text-sm font-semibold text-white">{sc.action}</div>
              <div className="text-xs text-slate-400">{sc.desc}</div>
            </div>
            <div className="flex items-center space-x-1.5 shrink-0 ml-4">
              {sc.keys.map((k, kIdx) => (
                <kbd
                  key={kIdx}
                  className="px-2.5 py-1 rounded-md bg-[#161a24] border border-white/10 text-cyan-300 font-mono text-xs font-semibold shadow-inner"
                >
                  {k}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
