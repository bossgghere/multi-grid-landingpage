import React from 'react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 bg-[#040507] text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-zinc-300">HyperGrid</span>
          <span>•</span>
          <span>macOS Terminal Workspace</span>
          <span>•</span>
          <span>MIT License</span>
        </div>

        <a
          href="https://github.com/bossgghere/multi-grid-terminal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center space-x-1.5"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
