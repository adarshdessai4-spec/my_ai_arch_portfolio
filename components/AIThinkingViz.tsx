"use client";

import { useAIState } from "@/lib/store";

const steps = ["Intent", "Services", "Products", "Demos", "CTA"];

export function AIThinkingViz() {
  const { isThinking, stepIndex, confidence } = useAIState();

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">AI Thinking Visualization</p>
        <span className="text-xs text-white/60">
          {isThinking ? "Active" : "Idle"}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 text-xs">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 text-center">
            <div
              className={`mx-auto mb-2 h-3 w-3 rounded-full ${
                index <= stepIndex && isThinking
                  ? "bg-neon-blue shadow-glow"
                  : "bg-white/20"
              }`}
            />
            <span className="text-white/70">{step}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Confidence</span>
          <span>{Math.round(confidence * 100)}%</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-white/10">
          <div
            className="h-2 rounded-full bg-neon-orange transition-all"
            style={{ width: `${Math.min(confidence, 0.96) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
