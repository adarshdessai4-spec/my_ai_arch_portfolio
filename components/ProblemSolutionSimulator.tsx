"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "@/lib/store";

const industries = ["Hotels", "E-commerce", "Government", "Creator", "SaaS"];
const pains = [
  "Too many queries",
  "Manual ops",
  "No analytics",
  "Payment issues",
  "Lead leakage"
];

export function ProblemSolutionSimulator() {
  const [industry, setIndustry] = useState(industries[0]);
  const [pain, setPain] = useState(pains[0]);
  const { openService, openProduct } = useModalStore();

  const seed = `${industry}-${pain}`
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const outcome = {
    hours: (seed % 12) + 18,
    response: (seed % 3) + 1,
    coverage: (seed % 20) + 70
  };

  const serviceMap: Record<string, string> = {
    "Too many queries": "agents",
    "Manual ops": "automations",
    "No analytics": "analytics",
    "Payment issues": "integrations",
    "Lead leakage": "automations"
  };

  const productMap: Record<string, string> = {
    Hotels: "paparooms",
    "E-commerce": "manki-jewels",
    Government: "public-grievance",
    Creator: "bharat-tiktok",
    SaaS: "personal-ai"
  };

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Problem to Solution Simulator
          </p>
          <p className="text-xs text-white/60">
            Tune inputs to preview the AI pipeline.
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs text-white/50">Industry</label>
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
          >
            {industries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-white/50">Pain</label>
          <select
            value={pain}
            onChange={(event) => setPain(event.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-white"
          >
            {pains.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase text-white/50">Pipeline</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/70">
          {["Intake", "AI Agent", "Automation", "Dashboard", "Outcome"].map(
            (step, index) => (
              <motion.div
                key={step}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {step}
              </motion.div>
            )
          )}
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <p className="text-white/60">Hours saved/week</p>
          <p className="text-lg font-semibold text-neon-blue">
            {outcome.hours}+
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <p className="text-white/60">Lead response time</p>
          <p className="text-lg font-semibold text-neon-blue">
            {outcome.response} min
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <p className="text-white/60">Automation coverage</p>
          <p className="text-lg font-semibold text-neon-blue">
            {outcome.coverage}%
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
        For {industry} teams facing "{pain}", I recommend AI agents + automation
        workflows with a realtime decision dashboard.
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => openService(serviceMap[pain])}
          className="rounded-full border border-neon-blue px-3 py-1 text-xs text-neon-blue"
        >
          Recommended service
        </button>
        <button
          onClick={() => openProduct(productMap[industry])}
          className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
        >
          Recommended product
        </button>
      </div>
    </div>
  );
}
