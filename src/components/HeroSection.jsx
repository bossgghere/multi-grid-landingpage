import React, { useState } from 'react';
import { Download, Check, Apple, Terminal, Copy, X, ShieldAlert, ArrowRight } from 'lucide-react';

export default function HeroSection({ emailInputRef }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copiedTerminal, setCopiedTerminal] = useState(false);
  const [copiedXattr, setCopiedXattr] = useState(false);

  const curlCommand = "curl -fsSL https://raw.githubusercontent.com/bossgghere/multi-grid-landingpage/main/public/install.sh | bash";
  const xattrCommand = "xattr -cr /Applications/GridTerm.app";

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

    // 1. Immediately trigger the DMG download in browser
    triggerDownload();

    // 2. Open the visual guide modal so user knows what to expect
    setShowModal(true);

    // 3. Optional async email capture if provided
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
    }, 250);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'curl') {
      setCopiedTerminal(true);
      setTimeout(() => setCopiedTerminal(false), 2000);
    } else {
      setCopiedXattr(true);
      setTimeout(() => setCopiedXattr(false), 2000);
    }
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
              <span>{isLoading ? 'Downloading...' : 'Download for macOS'}</span>
            </button>
          </form>
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

        {/* Alternative 1-Line Terminal Install (Zero Warning Method) */}
        <div className="mt-5 p-2.5 rounded-2xl bg-white/70 border border-black/[0.06] shadow-sm max-w-md mx-auto text-left">
          <div className="flex items-center justify-between text-xs font-medium text-[#1d1d1f] mb-1.5 px-1">
            <span className="flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
              <span>Or install in Terminal (Zero warnings):</span>
            </span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
              Instant
            </span>
          </div>

          <div className="flex items-center justify-between bg-[#1d1d1f] rounded-xl px-3 py-2 text-xs font-mono text-zinc-300">
            <span className="truncate pr-2 select-all text-[11px] text-zinc-200">
              curl -fsSL https://git.io/hypergrid | bash
            </span>
            <button
              onClick={() => copyToClipboard(curlCommand, 'curl')}
              className="text-[#2997ff] hover:text-white shrink-0 text-[11px] flex items-center space-x-1 cursor-pointer pl-2 border-l border-zinc-700"
              title="Copy install command"
            >
              {copiedTerminal ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedTerminal ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Post-Download First-Time Launch Guide Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 transition-all">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative text-left animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/[0.05] hover:bg-black/10 flex items-center justify-center text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1d1d1f]">
                  GridTerm is downloading...
                </h3>
                <p className="text-xs text-[#86868b]">
                  First time opening on macOS? Follow these 3 quick steps:
                </p>
              </div>
            </div>

            {/* 3 Steps */}
            <div className="space-y-3 my-5">
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#f5f5f7]">
                <div className="w-6 h-6 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1d1d1f]">Drag to Applications</div>
                  <div className="text-xs text-[#86868b]">Open the downloaded <code>GridTerm.dmg</code> and drag GridTerm into your Applications folder.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#f5f5f7]">
                <div className="w-6 h-6 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1d1d1f]">If macOS shows "Not Opened", click Done</div>
                  <div className="text-xs text-[#86868b]">Because GridTerm is 100% free & open-source, macOS Gatekeeper shows a standard verification note. Click <strong>Done</strong> (do not click Move to Bin).</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20">
                <div className="w-6 h-6 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0071e3]">Click "Open Anyway"</div>
                  <div className="text-xs text-[#1d1d1f]/80">Go to <strong>System Settings → Privacy & Security</strong>, scroll down to Security, and click <strong className="text-[#0071e3]">"Open Anyway"</strong>. Done!</div>
                </div>
              </div>
            </div>

            {/* One-click Terminal shortcut */}
            <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-5">
              <div className="flex items-center justify-between text-xs text-[#86868b] mb-1">
                <span>Power users terminal shortcut:</span>
                <button
                  onClick={() => copyToClipboard(xattrCommand, 'xattr')}
                  className="text-[#0071e3] hover:underline flex items-center space-x-1 font-medium cursor-pointer"
                >
                  {copiedXattr ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedXattr ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <code className="text-xs font-mono text-[#1d1d1f] block truncate">
                xattr -cr /Applications/GridTerm.app
              </code>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm transition-all active:scale-[0.99] cursor-pointer"
            >
              Got it, let's open GridTerm
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
