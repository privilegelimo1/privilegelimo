"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const router   = useRouter();
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#AB5461] flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-sm font-semibold text-[#0a0a0a] tracking-wide">
              Privilege Limo
            </span>
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#0a0a0a]">
            Admin Portal
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#efefef] shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-8">
          <h1 className="text-lg font-light text-[#0a0a0a] mb-1 tracking-tight">
            Sign in
          </h1>
          <p className="text-sm text-[#0a0a0a] font-light mb-6">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                placeholder="admin@privilegelimo.com"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-light mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#AB5461] transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#AB5461] hover:bg-[#923847] disabled:opacity-50 text-white text-[11px] tracking-[0.25em] uppercase font-medium py-3.5 rounded-full transition-colors"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}