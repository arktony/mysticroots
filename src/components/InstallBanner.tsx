"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "mr-install-dismissed";
const DISMISS_DAYS = 14;

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true)
  );
}

function isIos() {
  const ua = navigator.userAgent;
  const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return /iPhone|iPad|iPod/.test(ua) || iPadOS;
}

function recentlyDismissed() {
  try {
    const t = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return Date.now() - t < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

/**
 * A small home-screen install banner.
 * Android/Chrome: uses the native install prompt.
 * iPhone/iPad Safari: shows the Share → Add to Home Screen steps, since iOS has no prompt API.
 */
export default function InstallBanner() {
  const [mode, setMode] = useState<"hidden" | "android" | "ios">("hidden");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    if (isStandalone() || recentlyDismissed()) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setMode("android");
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isIos()) timer = setTimeout(() => setMode("ios"), 6000);

    const onInstalled = () => setMode("hidden");
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    setMode("hidden");
  };

  const install = async () => {
    if (mode === "ios") {
      setShowSteps(true);
      return;
    }
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    if (outcome === "accepted") setMode("hidden");
    else dismiss();
  };

  if (mode === "hidden") return null;

  return (
    <div className="fixed inset-x-3 bottom-24 z-40 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:w-[22rem]">
      <div className="card bg-surface/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)] backdrop-blur">
        <div className="flex items-start gap-3">
          <Image src="/icons/icon-192.png" alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-xl" />
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg leading-tight text-ink">Add Mystic Roots to your home screen</p>
            <p className="mt-1 text-xs text-ink-muted">
              Open it like an app, with one tap to WhatsApp, even when your signal is weak.
            </p>
            {showSteps ? (
              <ol className="mt-3 space-y-1.5 text-xs text-ink">
                <li>1. Tap the <strong>Share</strong> button at the bottom of Safari (the square with an arrow).</li>
                <li>2. Scroll and tap <strong>Add to Home Screen</strong>.</li>
                <li>3. Tap <strong>Add</strong> in the top corner.</li>
              </ol>
            ) : (
              <div className="mt-3 flex gap-2">
                <button onClick={install} className="btn btn-gold px-4 py-2 text-xs">
                  {mode === "ios" ? "Show me how" : "Install app"}
                </button>
                <button onClick={dismiss} className="btn btn-ghost px-4 py-2 text-xs">
                  Not now
                </button>
              </div>
            )}
          </div>
          <button onClick={dismiss} aria-label="Close" className="text-ink-muted hover:text-ink">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
