import React, { useState } from 'react';
import { Download, Check, AlertCircle, Apple, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function HeroSection({ emailInputRef }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showGatekeeperTip, setShowGatekeeperTip] = useState(false);

  const triggerDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/GridTerm.dmg';
    downloadLink.download = 'GridTerm.dmg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDownload = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    // 1. Trigger instant download immediately
    triggerDownload();

    // 2. If email was provided, capture it asynchronously
    if (email && email.includes('@')) {
      try {
        const existing = JSON.parse(localStorage.getItem('hypergrid_subscribers') || '[]');
        existing.push({ email: email.trim(), date: new Date().toISOString() });
        localStorage.setItem('hypergrid_subscribers', JSON.stringify(existing));
      } catch (err) {}

      try {
        await fetch('/api/download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim() }),
        });
      } catch (err) {
        console.warn('API lead capture fallback:', err);
      }
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsDownloaded(true);
    }, 250);
  };

  return (
    <section className="pt-20 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      {/* Category Tag */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
        <span className="text-xs font-medium text-[#1d1d1f]">
          Native Multi-Grid Terminal Workspace
        </span>
      </div>

      {/* Main Apple Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.06] mb-3">
        Nine terminals. <br className="hidden sm:inline" />
        Zero clutter.
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#86868b] max-w-2xl mx-auto mb-6 leading-relaxed font-normal">
        A fast, minimalist macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-white text-[#1d1d1f] font-mono text-xs border border-black/10 shadow-sm font-semibold">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
      </p>

      {/* Apple-style Direct 1-Click Download Pill */}
      <div className="max-w-md mx-auto">
        <div className="p-1.5 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.08]">
          {!isDownloaded ? (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-1.5">
              <input
                ref={emailInputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for updates (optional)"
                className="flex-1 px-4 py-3 rounded-xl bg-transparent text-sm text-[#1d1d1f] placeholder-[#86868b] outline-none"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm tracking-tight flex items-center justify-center space-x-2 transition-all active:scale-[0.98] shadow-md shadow-[#0071e3]/20 cursor-pointer shrink-0 disabled:opacity-60"
              >
                <Download className="w-4 h-4" />
                <span>{isLoading ? 'Starting...' : 'Download for macOS'}</span>
              </button>
            </form>
          ) : (
            <div className="py-2.5 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-medium text-[#1d1d1f]">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Downloading GridTerm.dmg (2.4 MB)</span>
              </div>
              <button
                onClick={triggerDownload}
                className="text-xs text-[#0071e3] hover:text-[#0077ed] font-medium underline cursor-pointer"
              >
                Download again
              </button>
            </div>
          )}
        </div>

        {/* Minimal macOS Spec Strip */}
        <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-[#86868b]">
          <span className="flex items-center space-x-1">
            <Apple className="w-3.5 h-3.5 text-[#1d1d1f]" />
            <span>macOS 14+</span>
          </span>
          <span>•</span>
          <span>Apple Silicon & Intel</span>
          <span>•</span>
          <span>2.4 MB DMG</span>
        </div>

        {/* Gatekeeper / First-time Launch Help Accordion */}
        <div className="mt-3.5">
          <button
            onClick={() => setShowGatekeeperTip(!showGatekeeperTip)}
            className="inline-flex items-center space-x-1 text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>First time opening on macOS?</span>
            {showGatekeeperTip ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {showGatekeeperTip && (
            <div className="mt-2.5 p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-left text-xs space-y-2 max-w-sm mx-auto transition-all animate-in fade-in slide-in-from-top-1">
              <div className="font-semibold text-[#1d1d1f]">
                If Apple Gatekeeper blocks first open:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-[#555] leading-relaxed">
                <li>Drag <strong className="text-[#1d1d1f]">GridTerm</strong> into your Applications folder.</li>
                <li>Open <strong className="text-[#1d1d1f]">System Settings → Privacy & Security</strong>.</li>
                <li>Scroll down and click <strong className="text-[#0071e3]">"Open Anyway"</strong>.</li>
              </ol>
              <div className="pt-2 border-t border-black/[0.06] text-[11px] text-[#86868b]">
                Or run in Terminal: <code className="font-mono text-[#1d1d1f] bg-black/[0.04] px-1.5 py-0.5 rounded border border-black/[0.06]">xattr -cr /Applications/GridTerm.app</code>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
