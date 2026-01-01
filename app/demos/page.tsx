"use client";

import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { CardReveal } from "@/components/CardReveal";

export default function DemosPage() {
  const [automationPrompt, setAutomationPrompt] = useState("");
  const [automationSteps, setAutomationSteps] = useState<string[]>([]);
  const [resumeText, setResumeText] = useState("");
  const [resumePreview, setResumePreview] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(0);
  const [assistantMessages, setAssistantMessages] = useState<string[]>([
    "Assistant ready. Ask about bookings or ops."
  ]);
  const [assistantInput, setAssistantInput] = useState("");

  const buildAutomation = () => {
    if (!automationPrompt.trim()) return;
    setAutomationSteps([
      "Capture request",
      "Classify intent",
      "Trigger workflow",
      "Notify team",
      "Log KPI"
    ]);
  };

  const buildResume = () => {
    if (!resumeText.trim()) return;
    setResumePreview(
      "AI Architect | Full-stack delivery | Agentic workflows | Product strategy"
    );
  };

  const bookingStages = [
    "Search stays",
    "Select room",
    "Confirm payment",
    "Booking success"
  ];

  const sendAssistant = () => {
    if (!assistantInput.trim()) return;
    setAssistantMessages((prev) => [
      ...prev,
      `You: ${assistantInput}`,
      "Assistant: I recommend an AI concierge with automation + analytics."
    ]);
    setAssistantInput("");
  };

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm text-neon-blue">Demos Lab</p>
        <h1 className="text-3xl font-semibold text-white">
          Interactive AI Demos
        </h1>
        <p className="mt-2 text-white/70">
          Lightweight mock demos that feel alive.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <CardReveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">
              Automation Builder
            </h3>
          <p className="mt-2 text-sm text-white/60">
            Prompt to workflow steps.
          </p>
          <textarea
            value={automationPrompt}
            onChange={(event) => setAutomationPrompt(event.target.value)}
            placeholder="Describe the automation..."
            className="mt-4 h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
          />
          <button
            onClick={buildAutomation}
            className="mt-3 rounded-xl border border-neon-blue px-4 py-2 text-sm text-neon-blue"
          >
            Generate workflow
          </button>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            {automationSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                {index + 1}. {step}
              </div>
            ))}
          </div>
          {automationSteps.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
              {automationSteps.map((step) => (
                <span
                  key={`${step}-node`}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {step}
                </span>
              ))}
            </div>
          )}
          </GlassCard>
        </CardReveal>
        <CardReveal delay={0.05}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Resume Builder</h3>
          <p className="mt-2 text-sm text-white/60">
            Paste text to resume preview card.
          </p>
          <textarea
            value={resumeText}
            onChange={(event) => setResumeText(event.target.value)}
            placeholder="Paste raw notes..."
            className="mt-4 h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
          />
          <button
            onClick={buildResume}
            className="mt-3 rounded-xl border border-neon-blue px-4 py-2 text-sm text-neon-blue"
          >
            Generate resume
          </button>
          {resumePreview && (
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p className="text-xs text-white/50">Preview</p>
              <p className="mt-2 font-semibold text-white">Adi -- AI Architect</p>
              <p className="mt-1">{resumePreview}</p>
            </div>
          )}
          </GlassCard>
        </CardReveal>
        <CardReveal delay={0.1}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Booking Flow</h3>
            <p className="mt-2 text-sm text-white/60">
              Multi-step UI demo.
            </p>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase text-white/50">Step</p>
            <p className="mt-2 text-lg text-white">
              {bookingStages[bookingStep]}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setBookingStep((prev) => Math.max(prev - 1, 0))}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
              >
                Back
              </button>
              <button
                onClick={() =>
                  setBookingStep((prev) =>
                    Math.min(prev + 1, bookingStages.length - 1)
                  )
                }
                className="rounded-full border border-neon-blue px-3 py-1 text-xs text-neon-blue"
              >
                Next
              </button>
            </div>
          </div>
          </GlassCard>
        </CardReveal>
        <CardReveal delay={0.15}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">
              Personal AI Assistant
            </h3>
          <p className="mt-2 text-sm text-white/60">
            Scenario-based assistant.
          </p>
          <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/80">
            {assistantMessages.map((message, index) => (
              <p key={`${message}-${index}`}>{message}</p>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={assistantInput}
              onChange={(event) => setAssistantInput(event.target.value)}
              placeholder="Ask about your scenario..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
            />
            <button
              onClick={sendAssistant}
              className="rounded-xl border border-neon-blue px-3 py-2 text-sm text-neon-blue"
            >
              Send
            </button>
          </div>
          </GlassCard>
        </CardReveal>
      </div>
    </div>
  );
}
