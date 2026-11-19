"use client";

// Google ログインの入口。ログインしていなければログイン画面を出し、
// ログインしたら GAS（whoami）に「KPI ダッシュボードを使えるか」を確かめてからダッシュボードを出す。
// 使えるかどうかは FSIF の Access Manager で決まる（画面側では判断しない）。

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AlertTriangle, Loader2 } from "lucide-react";
import { ApiError, api, clearCsvCache } from "@/lib/kpi-api";
import { getIdToken, mountGoogleButton, onTokenChange, signOut, startGoogleAuth } from "@/lib/google-auth";

export type Me = { name: string; email: string };

const AuthContext = createContext<{ me: Me; logout: () => void } | null>(null);

/** ログインしている人とログアウト（AuthGate の内側で使う） */
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthGate({ children }: { children: ReactNode }) {
  const [me, setMe] = useState<Me | null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // ID トークンが変わるたびに：無くなればログイン画面へ。新しく取れたら（未ログインなら）使えるかを確かめる
    const handle = async (token: string | null) => {
      if (!token) {
        setMe(null);
        clearCsvCache();
        return;
      }
      setChecking(true);
      try {
        const r = await api<{ me: Me }>("whoami");
        // 確かめている間にログアウトや取り直しがあれば、古い結果は使わない
        if (getIdToken() !== token) return;
        setError("");
        setMe((cur) => cur ?? r.me);
      } catch (e) {
        if (getIdToken() !== token) return;
        setError((e as Error).message);
        // 使えないアカウントのままにせず、別のアカウントを選べるようにする
        if (e instanceof ApiError && e.code !== "ACCESS_UNAVAILABLE" && e.code !== "NETWORK") signOut();
      } finally {
        setChecking(false);
      }
    };
    const off = onTokenChange((t) => {
      void handle(t);
    });
    startGoogleAuth().catch((e) => setError((e as Error).message));
    const t = getIdToken();
    if (t) void handle(t);
    return off;
  }, []);

  if (!me) return <LoginScreen checking={checking} error={error} />;
  return (
    <AuthContext.Provider
      value={{
        me,
        logout: () => {
          setError("");
          signOut();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function LoginScreen({ checking, error }: { checking: boolean; error: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mountGoogleButton(buttonRef.current);
    return () => mountGoogleButton(null);
  }, []);
  return (
    <div className="min-h-screen cosmic-bg cosmic-stars flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-sm rounded-2xl p-8 text-center">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/CB_icon.png`}
          alt="CB"
          width={48}
          height={48}
          className="mx-auto mb-3"
        />
        <h1 className="text-xl font-bold gradient-text">Cosmo Base Dashboard</h1>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          FSIF Portal と同じ Google アカウントでログインしてください。
        </p>
        <div ref={buttonRef} className="mt-6 flex min-h-[44px] justify-center" />
        {checking && (
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            権限を確認しています…
          </p>
        )}
        {error && (
          <div role="alert" className="mt-4 flex gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-left text-xs leading-relaxed text-red-300">
            <AlertTriangle className="h-4 w-4 flex-none" />
            <span>{error}</span>
          </div>
        )}
        <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
          使えるかどうかは FSIF の Access Manager で決まります。ログインできない場合は、ポータルの全権管理者に KPI ダッシュボードの役割を付けてもらってください。
        </p>
      </div>
    </div>
  );
}
