import React from 'react';

const shortcuts = [
  { keys: ['⌘', '1...9'], action: 'Focus Pane', desc: 'Jump focus to terminal 1 through 9' },
  { keys: ['⌘', '+'], action: 'Zoom In', desc: 'Increase font size across all panes' },
  { keys: ['⌘', '-'], action: 'Zoom Out', desc: 'Decrease font size across all panes' },
  { keys: ['⌘', '0'], action: 'Reset Zoom', desc: 'Restore default font size (13pt)' },
  { keys: ['⌘', 'K'], action: 'Clear Screen', desc: 'Clear active terminal buffer' },
  { keys: ['⌘', '⇧', 'M'], action: 'Maximize', desc: 'Toggle full-window view for active pane' },
];

export default function ShortcutsShowcase() {
  return (
    <section id="shortcuts" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Keyboard Shortcuts
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Navigate your entire workspace without reaching for your mouse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {shortcuts.map((sc, index) => (
          <div
            key={index}
            className="p-3.5 rounded-lg bg-[#090a10] border border-white/5 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold text-white">{sc.action}</div>
              <div className="text-[11px] text-zinc-500">{sc.desc}</div>
            </div>
            <div className="flex items-center space-x-1 shrink-0 ml-4">
              {sc.keys.map((k, kIdx) => (
                <kbd
                  key={kIdx}
                  className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-xs font-mono font-semibold text-zinc-300"
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
