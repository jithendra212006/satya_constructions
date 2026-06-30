"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function Auth() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const enter = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem("satya_admin_session", "active");
      router.replace("/admin");
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rich-black text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute inset-0 noise opacity-[0.03]" />

      <div className="w-full max-w-[420px] relative z-10 mx-auto">
        <div className="glass-dark rounded-2xl p-8 sm:p-10 glow-violet flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
            <Lock className="w-4 h-4 text-gold" />
          </div>
          <h1 className="font-display text-3xl mb-8">Admin Login</h1>

          <form onSubmit={enter} className="w-full space-y-4">
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm focus:border-gold outline-none transition-colors"
              required
            />

            {error && (
              <p className="text-red-400 text-xs text-left">Invalid password</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-rich-black py-4 rounded-lg text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all flex items-center justify-center gap-3 group"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Login"}
              {!loading && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </div>

        <Link
          href="/"
          className="block text-center mt-8 text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}
