import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8 bg-[#050608] text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-zinc-400">HyperGrid</span>
          <span>•</span>
          <span>Native Multi-Grid Terminal Workspace for macOS</span>
        </div>
        <div className="text-zinc-600">
          Swift 6 • Metal • AppKit
        </div>
      </div>
    </footer>
  );
}
