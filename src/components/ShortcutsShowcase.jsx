import React from 'react';
import { Keyboard, Command, Sparkles } from 'lucide-react';

const shortcuts = [
  { keys: ['⌘', '1...9'], action: 'FOCUS PANE #N', desc: 'Jump focus immediately to corresponding terminal cell' },
  { keys: ['⌘', '+'], action: 'GLOBAL ZOOM IN', desc: 'Increase font size across all terminal viewports simultaneously' },
  { keys: ['⌘', '-'], action: 'GLOBAL ZOOM OUT', desc: 'Decrease font size across all terminal viewports simultaneously' },
  { keys: ['⌘', '0'], action: 'RESET ZOOM', desc: 'Restore default crisp 13pt terminal font rasterization' },
  { keys: ['⌘', 'K'], action: 'CLEAR VIEWPORT', desc: 'Clear the active terminal viewport and erase scrollback' },
  { keys: ['⌘', '⌥', '1...6'], action: 'QUICK TOPOLOGY', desc: 'Toggle presets (1×1, 1×2, 2×1, 2×2, 2×3, 3×3)' },
  { keys: ['⌘', '⇧', 'M'], action: 'MAXIMIZE TOGGLE', desc: 'Expand active terminal to full window, press again to restore' },
  { keys: ['⌘', '⇧', 'R'], action: 'HARD RESTART', desc: 'Kill and respawn clean PTY subshell in active pane' },
];

export default function ShortcutsShowcase() {
  return (
    <section id="shortcuts" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#ccff00] mb-2">
            <span>[ 04 // CONTROLS ]</span>
            <span>•</span>
            <span className="text-zinc-400">ZERO MOUSE OVERHEAD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            KEYBOARD-FIRST FLIGHT CONTROLS
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xs">
          Engineered so your hands never have to leave the home row.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {shortcuts.map((sc, index) => (
          <div
            key={index}
            className="p-4 rounded-lg deck-panel border border-white/10 flex items-center justify-between hover:border-white/20 transition-all group"
          >
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase group-hover:text-[#ccff00] transition-colors">
                {sc.action}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                {sc.desc}
              </div>
            </div>

            <div className="flex items-center space-x-1.5 shrink-0 ml-4">
              {sc.keys.map((k, kIdx) => (
                <span
                  key={kIdx}
                  className="keycap px-2.5 py-1 rounded text-xs font-mono font-bold text-zinc-200 cursor-default"
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
