"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const goals = [
  "Launch AI assistant",
  "Automate operations",
  "Build AI product",
  "Government workflow",
  "Analytics upgrade"
];
const channels = ["WhatsApp", "Web", "Mobile App", "All channels"];
const scales = ["<1k users", "1k-10k users", "10k-100k users", "100k+ users"];
const urgency = ["Relaxed", "Normal", "Urgent"];

type EstimateResponse = {
  architecture: string;
  phases: string[];
  timeline: string;
  budget: string;
  deliverables: string[];
  reasoning: string;
};

export function LiveDecisionEngine() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<EstimateResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    goal: goals[0],
    channel: channels[0],
    scale: scales[1],
    urgency: urgency[1]
  });

  const onSubmit = async () => {
    setLoading(true);
    const response = await fetch("/api/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = (await response.json()) as EstimateResponse;
    setResult(data);
    setLoading(false);
  };

  return (
    <div id="estimator" className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Live Decision Engine</p>
          <p className="text-xs text-white/60">
            Estimate architecture, phases, and budget.
          </p>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <label className="text-xs text-white/50">Goal</label>
                <select
                  value={form.goal}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, goal: event.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
                >
                  {goals.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-white/50">Channels</label>
                <select
                  value={form.channel}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, channel: event.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
                >
                  {channels.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-white/50">Users scale</label>
                <select
                  value={form.scale}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, scale: event.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
                >
                  {scales.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-white/50">Timeline urgency</label>
                <select
                  value={form.urgency}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, urgency: event.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
                >
                  {urgency.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={onSubmit}
              className="mt-4 rounded-xl border border-neon-blue bg-neon-blue/10 px-4 py-2 text-sm font-semibold text-neon-blue"
            >
              {loading ? "Estimating..." : "Run Estimate"}
            </button>
            {result && (
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <p className="text-xs uppercase text-white/50">Suggested architecture</p>
                <p className="mt-1 text-white">{result.architecture}</p>
                <p className="mt-3 text-xs uppercase text-white/50">Phases</p>
                <p className="mt-1">{result.phases.join(" to ")}</p>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase text-white/50">Timeline</p>
                    <p>{result.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/50">Budget range</p>
                    <p>{result.budget}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs uppercase text-white/50">Deliverables</p>
                <p className="mt-1">{result.deliverables.join("  /  ")}</p>
                <p className="mt-3 text-xs uppercase text-white/50">
                  Why this approach
                </p>
                <p className="mt-1">{result.reasoning}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
