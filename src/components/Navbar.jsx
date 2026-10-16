import React from 'react';
import { Terminal, Sparkles, Download } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar({ onDownloadClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/8 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0d0f16] rounded-[6px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Kadra
            </span>
            <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              macOS v1.0
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#demo" className="hover:text-cyan-400 transition-colors">
            Interactive Grid
          </a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#shortcuts" className="hover:text-cyan-400 transition-colors">
            Shortcuts
          </a>
          <a 
            href="https://github.com/bossgghere/multi-grid-terminal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onDownloadClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs tracking-wide shadow-md shadow-cyan-500/25 transition-all duration-200 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get Early Access</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
