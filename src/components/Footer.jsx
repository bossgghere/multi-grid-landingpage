import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] text-xs text-[#86868b]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 rounded-md bg-[#1d1d1f] flex items-center justify-center text-white text-[10px] font-bold">
            ⊞
          </div>
          <span className="font-semibold text-[#1d1d1f]">HyperGrid</span>
          <span>•</span>
          <span>Native Multi-Grid Terminal Workspace for macOS</span>
        </div>
        <div className="flex items-center space-x-6 text-[#86868b]">
          <span>Swift 6</span>
          <span>•</span>
          <span>Metal GPU</span>
          <span>•</span>
          <span>AppKit</span>
          <span>•</span>
          <span>Universal (Apple Silicon & Intel)</span>
        </div>
      </div>
    </footer>
  );
}
