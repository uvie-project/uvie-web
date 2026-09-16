"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type DemoWord = { raw: string; rendered: string; toneKey: string };

const WORDS: DemoWord[] = [
  { raw: "chaof", rendered: "chào", toneKey: "f" },
  { raw: "nghieengs", rendered: "nghiếng", toneKey: "s" },
  { raw: "dduowcj", rendered: "được", toneKey: "j" },
  { raw: "hoas", rendered: "hoá", toneKey: "s" },
];

type State = { word: number; keys: number; done: boolean };

// Deterministic initial state: first word fully typed. Identical on the
// server and on first client render — no hydration mismatch, and the
// Vietnamese text is present in the SSR HTML for crawlers.
const INITIAL: State = { word: 0, keys: WORDS[0].raw.length, done: true };

const KEY_MS = 260;
const HOLD_MS = 2200;

export function TypingDemo() {
  const [state, setState] = useState<State>(INITIAL);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function tick(current: State) {
      if (cancelled) return;
      const word = WORDS[current.word];
      if (current.keys < word.raw.length) {
        timer = setTimeout(() => {
          if (cancelled) return;
          const next = { ...current, keys: current.keys + 1 };
          next.done = next.keys >= WORDS[current.word].raw.length;
          setState(next);
          tick(next);
        }, KEY_MS);
      } else {
        timer = setTimeout(() => {
          if (cancelled) return;
          const nextWord = (current.word + 1) % WORDS.length;
          const next = { word: nextWord, keys: 1, done: false };
          setState(next);
          tick(next);
        }, HOLD_MS);
      }
    }
    // Start asynchronously so the SSR state (first word completed) paints first.
    const start: State = { word: 0, keys: 1, done: false };
    timer = setTimeout(() => {
      setState(start);
      tick(start);
    }, HOLD_MS);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduce]);

  const current = WORDS[state.word];
  const isTypingRaw = !state.done;
  const visible = isTypingRaw
    ? current.raw.slice(0, state.keys)
    : current.rendered;

  return (
    <div className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">
          Telex
        </span>
        <span className="ml-auto rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
          V
        </span>
      </div>

      <div className="min-h-16 px-5 py-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${state.word}-${state.done}`}
            initial={false}
            animate={{ opacity: 1 }}
            className="font-heading text-2xl font-bold tracking-tight"
          >
            {visible}
            <span className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 animate-pulse rounded-full bg-primary" />
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 border-t border-border px-5 py-3.5">
        {current.raw.split("").map((ch, i) => (
          <kbd
            key={`${state.word}-${i}`}
            className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md border px-1.5 font-mono text-xs transition-colors duration-150 ${
              i < state.keys
                ? "border-primary/40 bg-accent text-accent-foreground shadow-sm"
                : "border-border bg-muted/50 text-muted-foreground/60"
            } ${i === state.keys - 1 && !isTypingRaw ? "ring-2 ring-primary/30" : ""}`}
          >
            {ch}
          </kbd>
        ))}
        <span className="ml-auto text-[11px] text-muted-foreground">
          {state.done ? `→ ${current.rendered}` : "\u00A0"}
        </span>
      </div>
    </div>
  );
}
