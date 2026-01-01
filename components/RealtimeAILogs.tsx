"use client";

import { useEffect, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const seedLogs = [
  "Booting Adarsh AI Console...",
  "Indexing portfolio knowledge...",
  "Routing intent: 'automations'...",
  "Generating solution map...",
  "Loading demo: Personal AI Assistant...",
  "Syncing product blocks...",
  "Warming decision engine...",
  "Compiling service map..."
];

export function RealtimeAILogs() {
  const [logs, setLogs] = useState<string[]>(seedLogs.slice(0, 4));
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = seedLogs[Math.floor(Math.random() * seedLogs.length)];
      setLogs((prev) => [next, ...prev].slice(0, 6));
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Realtime AI Activity</p>
        <button
          onClick={() => setSoundOn((prev) => !prev)}
          className="rounded-full border border-white/10 p-2 text-white/70"
          aria-label="Toggle sound"
        >
          {soundOn ? (
            <Volume2 className="h-4 w-4" />
          ) : (
            <VolumeX className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="mt-3 space-y-2 text-xs text-neon-blue">
        {logs.map((line, index) => (
          <motion.p
            key={`${line}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
