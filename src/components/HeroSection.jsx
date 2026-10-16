import React, { useState } from 'react';
import { Download, Check, AlertCircle, Apple } from 'lucide-react';

export default function HeroSection({ emailInputRef }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Save lead locally
    try {
      const existing = JSON.parse(localStorage.getItem('hypergrid_subscribers') || '[]');
      existing.push({ email: email.trim(), date: new Date().toISOString() });
      localStorage.setItem('hypergrid_subscribers', JSON.stringify(existing));
    } catch (err) {}

    // Send to Resend via API endpoint
    try {
      await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
    } catch (err) {
      console.warn('API call fallback:', err);
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
      window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
    }, 350);
  };

  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      {/* Category Tag */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
        <span className="text-xs font-medium text-[#1d1d1f]">
          Native Multi-Grid Terminal Workspace
        </span>
      </div>

      {/* Main Apple Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.06] mb-5">
        Nine terminals. <br className="hidden sm:inline" />
        Zero clutter.
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        A fast, minimalist macOS terminal workspace. Choose any grid layout from 1×1 to 3×3, navigate instantly with <kbd className="px-1.5 py-0.5 rounded bg-white text-[#1d1d1f] font-mono text-xs border border-black/10 shadow-sm font-semibold">⌘1–⌘9</kbd>, and run independent shells without closing sessions.
      </p>

      {/* Apple-style Frictionless Download Pill */}
      <div className="max-w-md mx-auto">
        <div className="p-1.5 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.08]">
          {!isUnlocked ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-1.5">
              <input
                ref={emailInputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-transparent text-sm text-[#1d1d1f] placeholder-[#86868b] outline-none"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm tracking-tight flex items-center justify-center space-x-2 transition-all active:scale-[0.98] shadow-md shadow-[#0071e3]/20 cursor-pointer shrink-0 disabled:opacity-60"
              >
                <Download className="w-4 h-4" />
                <span>{isLoading ? 'Preparing...' : 'Download for macOS'}</span>
              </button>
            </form>
          ) : (
            <div className="py-2.5 px-4 flex items-center justify-center space-x-2 text-sm font-medium text-[#1d1d1f]">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Download started. Check your inbox for the link.</span>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-2 text-red-600 text-xs flex items-center justify-center space-x-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Minimal macOS Spec Strip */}
        <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-[#86868b]">
          <span className="flex items-center space-x-1">
            <Apple className="w-3.5 h-3.5 text-[#1d1d1f]" />
            <span>macOS Sonoma or later</span>
          </span>
          <span>•</span>
          <span>Apple Silicon & Intel</span>
          <span>•</span>
          <span>2.4 MB</span>
        </div>
      </div>
    </section>
  );
}
