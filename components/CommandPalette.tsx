"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCommandPaletteStore, useModalStore } from "@/lib/store";
import { cx } from "@/lib/utils";

export function CommandPalette() {
  const router = useRouter();
  const { open, query, openPalette, closePalette, setQuery } =
    useCommandPaletteStore();
  const { openProduct } = useModalStore();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open ? closePalette() : openPalette();
      }
      if (event.key === "Escape") {
        closePalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openPalette, closePalette]);

  const actions = useMemo(
    () => [
      { label: "Open Products", action: () => router.push("/projects") },
      { label: "Open Demos", action: () => router.push("/demos") },
      { label: "Estimate Project", action: () => router.push("/#estimator") },
      { label: "Book Call", action: () => router.push("/contact") },
      {
        label: "Show PapaRooms",
        action: () => {
          router.push("/projects");
          setTimeout(() => openProduct("paparooms"), 250);
        }
      },
      {
        label: "Show Automations",
        action: () => {
          router.push("/projects");
          setTimeout(() => openProduct("automations"), 250);
        }
      }
    ],
    [router, openProduct]
  );

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const onSelect = (index: number) => {
    const selected = filtered[index];
    if (!selected) return;
    selected.action();
    closePalette();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePalette}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0a0f1e]/95 p-4 shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <Search className="h-4 w-4 text-white/60" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent text-sm text-white outline-none"
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setActiveIndex((prev) =>
                      Math.min(prev + 1, filtered.length - 1)
                    );
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setActiveIndex((prev) => Math.max(prev - 1, 0));
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    onSelect(activeIndex);
                  }
                }}
              />
            </div>
            <div className="mt-4 space-y-2">
              {filtered.length === 0 && (
                <p className="text-sm text-white/60">No commands found.</p>
              )}
              {filtered.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => onSelect(index)}
                  className={cx(
                    "w-full rounded-lg px-4 py-2 text-left text-sm transition",
                    index === activeIndex
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
