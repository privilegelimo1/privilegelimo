"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect password. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(171,84,97,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-sm relative">
        {/* Logo mark */}
        <div className="flex flex-col items-center mb-10">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
            style={{
              background: "rgba(171,84,97,0.12)",
              border: "1px solid rgba(171,84,97,0.25)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#AB5461"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-white text-base font-light tracking-widest mb-1">
            Privilege Limo
          </h1>
          <p className="text-white/25 text-xs tracking-wider">
            Content Studio
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-white/60 text-xs tracking-widest uppercase mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Password field */}
            <div>
              <label className="block text-white/30 text-xs tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  suppressHydrationWarning
                  autoComplete="current-password"
                  className="w-full pr-10 pl-4 py-3 rounded-xl text-white text-sm placeholder-white/15 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: error
                      ? "1px solid rgba(255,80,80,0.4)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => {
                    if (!error)
                      e.currentTarget.style.border =
                        "1px solid rgba(171,84,97,0.4)";
                  }}
                  onBlur={(e) => {
                    if (!error)
                      e.currentTarget.style.border =
                        "1px solid rgba(255,255,255,0.08)";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                  tabIndex={-1}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400/70 text-xs mt-2 tracking-wide">
                  {error}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !password}
              suppressHydrationWarning
              className="w-full py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-all duration-200 disabled:opacity-40 flex items-center justify-center gap-2"
              style={{
                background: "rgba(171,84,97,0.85)",
                border: "1px solid rgba(171,84,97,0.4)",
                color: "white",
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-white/10 text-[10px] tracking-widest mt-6 uppercase">
          Privilege Limo · Admin
        </p>
      </div>
    </div>
  );
}