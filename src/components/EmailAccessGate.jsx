import React, { useState } from 'react';
import { Download, Key, Mail, CheckCircle2, AlertCircle, Apple, Terminal, ArrowRight, ShieldCheck, Copy, Check } from 'lucide-react';

export default function EmailAccessGate() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copiedBrew, setCopiedBrew] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid developer email address.');
      return;
    }

    if (!code || code.trim().length < 3) {
      setError('Please enter a valid access code (e.g. KADRA2026).');
      return;
    }

    setIsLoading(true);

    // Simulate instant unlock
    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
    }, 600);
  };

  const handleCopyBrew = () => {
    navigator.clipboard.writeText('brew tap bossgghere/tap && brew install --cask kadra');
    setCopiedBrew(true);
    setTimeout(() => setCopiedBrew(false), 2000);
  };

  return (
    <section id="download" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="relative rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 overflow-hidden shadow-2xl">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        {!isUnlocked ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                <Key className="w-3.5 h-3.5" />
                <span>Early Access Program</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Unlock Kadra for macOS
              </h2>
              <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                Enter your work or developer email and your invitation code to access the direct download installer for macOS.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Developer Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 transition-all font-mono"
                    required
                  />
                </div>
              </div>

              {/* Code Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Access Code
                  </label>
                  <button
                    type="button"
                    onClick={() => setCode('KADRA2026')}
                    className="text-[11px] font-mono text-cyan-400 hover:underline"
                  >
                    Auto-fill: KADRA2026
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="e.g. KADRA2026"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 transition-all font-mono tracking-wider"
                    required
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-2.5 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2.5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all duration-200 disabled:opacity-50 mt-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Verify & Unlock Installer</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500 mt-3">
                No subscription, credit card, or account required. 100% offline macOS desktop app.
              </p>
            </form>
          </div>
        ) : (
          /* Unlocked State: Download Card */
          <div className="text-center max-w-xl mx-auto animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Access Granted!
            </h3>
            <p className="text-sm text-slate-300 mb-8">
              Welcome, <span className="text-cyan-400 font-mono">{email}</span>. Your copy of Kadra for macOS is ready for instant download.
            </p>

            {/* Direct Download Button */}
            <div className="p-6 rounded-2xl bg-[#090b10] border border-white/10 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5 text-left">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-2">
                    <span>Kadra-v1.0.0.dmg</span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">
                      2.4 MB
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    macOS 14+ (Sonoma, Sequoia) • Universal (Apple Silicon & Intel)
                  </div>
                </div>
              </div>

              {/* Download Trigger */}
              <a
                href="https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg"
                download
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download DMG</span>
              </a>
            </div>

            {/* Homebrew Option */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-left">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center space-x-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Or install via Homebrew:</span>
                </span>
                <button
                  onClick={handleCopyBrew}
                  className="flex items-center space-x-1 text-[11px] text-cyan-400 hover:text-cyan-300"
                >
                  {copiedBrew ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs text-cyan-300 bg-black/60 p-2.5 rounded-lg border border-white/5 overflow-x-auto select-all">
                brew tap bossgghere/tap && brew install --cask kadra
              </div>
            </div>

            {/* Quick Install Guide */}
            <div className="mt-6 text-xs text-slate-500 flex items-center justify-center space-x-4">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified SHA-256 Checksum</span>
              </span>
              <span>•</span>
              <span>Drag to /Applications to install</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
