import React from 'react';
import { Terminal, Heart } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 px-6 bg-[#040507]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-300">Kadra for macOS</span>
          <span>•</span>
          <span>MIT License</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/bossgghere/multi-grid-terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <span>•</span>
          <span>100% Native Swift & AppKit</span>
        </div>
      </div>
    </footer>
  );
}
