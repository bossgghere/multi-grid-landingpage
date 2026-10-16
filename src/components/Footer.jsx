import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 px-4 sm:px-6 bg-[#040507] text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-zinc-300">HyperGrid</span>
          <span>•</span>
          <span>macOS Terminal Workspace</span>
          <span>•</span>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  );
}
