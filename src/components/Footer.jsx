import React from 'react';
import { Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-8 bg-[#040508] text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded bg-[#11141c] border border-white/10 flex items-center justify-center text-[#ccff00] text-xs font-bold font-mono">
            H▞
          </div>
          <span className="font-bold text-zinc-300 uppercase">HYPERGRID TERMINAL</span>
          <span>//</span>
          <span>100% NATIVE MACOS APPKIT & SWIFT 6</span>
        </div>

        <div className="flex items-center space-x-6 text-[11px]">
          <a
            href="https://github.com/bossgghere/multi-grid-terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB SOURCE</span>
          </a>
          <span>•</span>
          <span>MIT LICENSE</span>
          <span>•</span>
          <span className="text-zinc-600">ZERO ELECTRON GUARANTEE</span>
        </div>
      </div>
    </footer>
  );
}
