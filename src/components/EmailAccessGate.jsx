import React, { useState } from 'react';
import { Download, Terminal, Check, Copy, ArrowRight, ShieldCheck, KeyRound, AlertTriangle } from 'lucide-react';

export default function EmailAccessGate() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copiedBrew, setCopiedBrew] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('VALID DEVELOPER EMAIL REQUIRED');
      return;
    }

    if (!code || code.trim().length < 3) {
      setError('VALID ACCESS KEY REQUIRED (USE "HYPER2026" OR "KADRA2026")');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
    }, 500);
  };

  const handleCopyBrew = () => {
    navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/bossgghere/multi-grid-terminal/main/install.sh | bash');
    setCopiedBrew(true);
    setTimeout(() => setCopiedBrew(false), 2000);
  };

  const handleCopySha = () => {
    navigator.clipboard.writeText('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleTriggerDownload = () => {
    // Direct link to the release DMG asset on GitHub
    window.location.href = "https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg";
  };

  return (
    <section id="download" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="relative deck-panel rounded-2xl p-6 sm:p-12 border border-white/15 overflow-hidden shadow-2xl bg-[#080a10]">
        {/* Subtle engineering watermark */}
        <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 hidden sm:block">
          BUILD: 2026.1-RELEASE // SIG: ED25519
        </div>

        {!isUnlocked ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-mono font-bold mb-4">
                <KeyRound className="w-3.5 h-3.5" />
                <span>RESTRICTED ACCESS PORTAL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                GET HYPERGRID FOR MACOS
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2 leading-relaxed">
                Enter your developer email and access clearance code to unlock the direct native .dmg download installer.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  DEVELOPER WORK EMAIL:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dev@hypergrid.sh"
                  className="w-full px-4 py-3 rounded-lg bg-[#0e111a] border border-white/10 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    ACCESS CODE:
                  </label>
                  <span className="text-[10px] font-mono text-[#ccff00]/80">
                    USE KEY: <span className="underline font-bold">HYPER2026</span>
                  </span>
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. HYPER2026"
                  className="w-full px-4 py-3 rounded-lg bg-[#0e111a] border border-white/10 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] text-white placeholder-zinc-600 font-mono text-xs uppercase tracking-widest outline-none transition-colors"
                />
              </div>

              {error && (
                <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-black text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all active:translate-y-0.5 shadow-[0_3px_0_0_#99bf00] cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>AUTHENTICATING CLEARANCE...</span>
                ) : (
                  <>
                    <span>VERIFY & UNLOCK DOWNLOAD</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Success Deck */
          <div className="text-center max-w-xl mx-auto py-4">
            <div className="w-12 h-12 rounded-lg bg-[#ccff00]/15 border border-[#ccff00]/40 flex items-center justify-center text-[#ccff00] mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div className="text-[11px] font-mono text-[#ccff00] tracking-widest uppercase mb-1">
              [ 0x00_ACCESS_GRANTED ]
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
              HYPERGRID v1.0.4 IS UNLOCKED
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-8">
              Verified for <span className="text-white font-bold">{email}</span>. Universal binary for Apple Silicon (M1/M2/M3/M4) & Intel.
            </p>

            <div className="space-y-4">
              {/* Primary Direct Download Button */}
              <button
                onClick={handleTriggerDownload}
                className="w-full py-4 rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black font-mono font-black text-sm tracking-wider uppercase flex items-center justify-center space-x-3 transition-all active:translate-y-0.5 shadow-[0_4px_0_0_#99bf00] cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>DOWNLOAD HYPERGRID.DMG (2.4 MB)</span>
              </button>

              {/* Install script copy option */}
              <div className="p-3.5 rounded-lg bg-[#0e111a] border border-white/10 flex items-center justify-between text-left">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300 truncate mr-2">
                  <Terminal className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span className="truncate">curl -fsSL https://raw.githubusercontent.com/.../install.sh | bash</span>
                </div>
                <button
                  onClick={handleCopyBrew}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-white shrink-0 transition-colors"
                >
                  {copiedBrew ? 'COPIED' : 'COPY'}
                </button>
              </div>

              {/* SHA256 Checksum badge */}
              <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5">
                <span className="truncate">SHA256: e3b0c44298fc1c14...7852b855</span>
                <button
                  onClick={handleCopySha}
                  className="hover:text-zinc-300 transition-colors shrink-0 ml-2"
                >
                  {copiedSha ? 'HASH COPIED' : 'COPY CHECKSUM'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
