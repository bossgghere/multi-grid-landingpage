import React, { useState } from 'react';
import { Download, Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function EmailAccessGate() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('HYPER2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Free webhook support (e.g. Formspree or Google Apps Script)
  // If set, it will automatically POST to this URL
  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!code || code.trim().length < 3) {
      setError('Please enter an access code (e.g. HYPER2026).');
      return;
    }

    setIsLoading(true);

    // 1. Record lead locally in localStorage ledger so you never lose any download lead
    try {
      const existing = JSON.parse(localStorage.getItem('hypergrid_subscribers') || '[]');
      existing.push({
        email: email.trim(),
        code: code.trim(),
        timestamp: new Date().toISOString(),
        platform: navigator.platform || 'macOS'
      });
      localStorage.setItem('hypergrid_subscribers', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // 2. If a webhook URL (Formspree, Google Script, or custom API) is configured, POST to it
    if (FORMSPREE_URL) {
      try {
        await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ email, code, timestamp: new Date().toISOString() })
        });
      } catch (err) {
        console.warn('Webhook post error:', err);
      }
    }

    // Instant unlock transition
    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
      // Automatically trigger download
      window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
    }, 400);
  };

  const handleManualDownload = () => {
    window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
  };

  return (
    <section id="download" className="py-24 px-6 max-w-xl mx-auto">
      <div className="p-8 sm:p-10 rounded-2xl bg-[#090a10] border border-white/10 shadow-2xl text-center">
        {!isUnlocked ? (
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Get HyperGrid for macOS
            </h2>
            <p className="text-sm text-zinc-400 mt-2 mb-8">
              Enter your email to unlock the direct installer.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono text-zinc-400">
                    Access Code
                  </label>
                  <span className="text-[11px] font-mono text-[#ccff00]">
                    Default: HYPER2026
                  </span>
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="HYPER2026"
                  className="w-full px-4 py-3 rounded-lg bg-[#0e1017] border border-white/10 focus:border-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs outline-none transition-colors uppercase tracking-wider"
                />
              </div>

              {error && (
                <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 shadow-sm cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Unlocking...</span>
                ) : (
                  <>
                    <span>Unlock Download (.dmg)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-4">
            <div className="w-12 h-12 rounded-full bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Download Started!
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-6">
              Your .dmg download has started automatically. If it didn't start, click below:
            </p>

            <button
              onClick={handleManualDownload}
              className="w-full py-3.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download HyperGrid.dmg (2.4 MB)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
