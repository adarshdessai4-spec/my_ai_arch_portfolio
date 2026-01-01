"use client";

import { useEffect, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAIState, useModalStore, useRoleStore } from "@/lib/store";

const quickActions = [
  "Show PapaRooms",
  "Show Automations",
  "Estimate my project",
  "Book a call"
] as const;

const knowledgeBase = [
  {
    id: "automations",
    keywords: ["automation", "workflow", "zapier", "n8n"],
    response:
      "Automation suite: AI-triggered workflows, CRM sync, WhatsApp routing, and real-time ops dashboards."
  },
  {
    id: "paparooms",
    keywords: ["booking", "hotel", "paparooms"],
    response:
      "PapaRooms is a smart booking engine with AI concierge, notifications, and revenue dashboards."
  },
  {
    id: "consulting",
    keywords: ["strategy", "architecture", "roadmap"],
    response:
      "Architecture sprint: system map, AI roadmap, and build phases tailored to your team."
  }
];

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
};

export function AskAdiChat() {
  const router = useRouter();
  const { openProduct } = useModalStore();
  const { role } = useRoleStore();
  const { setThinking, setStep, setConfidence } = useAIState();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome to Adarsh Dessai's portfolio. Ask me about services, products, or automations.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [typing, setTyping] = useState(false);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const newMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      time
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setTyping(true);
    setThinking(true);
    setStep(0);

    const match = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => content.toLowerCase().includes(keyword))
    );

    const response = match
      ? match.response
      : `For ${role} teams, I recommend mapping intent to AI agent to automation to dashboard. Ask me to show products or estimate a project.`;

    const steps = [0, 1, 2, 3, 4];
    let stepIndex = 0;

    const stepTimer = setInterval(() => {
      setStep(steps[stepIndex]);
      setConfidence(0.6 + stepIndex * 0.08);
      stepIndex += 1;
      if (stepIndex >= steps.length) {
        clearInterval(stepTimer);
      }
    }, 180);

    setTimeout(() => {
      const reply: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
      setThinking(false);
    }, 900);
  };

  const actions = useMemo(
    () => ({
      "Show PapaRooms": () => {
        router.push("/projects");
        setTimeout(() => openProduct("paparooms"), 200);
      },
      "Show Automations": () => {
        router.push("/projects");
        setTimeout(() => openProduct("automations"), 200);
      },
      "Estimate my project": () => router.push("/#estimator"),
      "Book a call": () => router.push("/contact")
    }),
    [router, openProduct]
  ) satisfies Record<(typeof quickActions)[number], () => void>;

  useEffect(() => {
    return () => {
      setThinking(false);
      setStep(0);
    };
  }, [setThinking, setStep]);

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Ask Adi</p>
        <span className="text-xs text-white/50">Local AI Mode</span>
      </div>
      <div className="mt-3 max-h-64 space-y-3 overflow-y-auto pr-2 text-sm">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-xl border border-white/10 px-3 py-2 ${
              message.role === "user"
                ? "ml-6 bg-white/10"
                : "mr-6 bg-white/5"
            }`}
          >
            <p className="text-white/90">{message.content}</p>
            <p className="mt-1 text-xs text-white/40">{message.time}</p>
          </div>
        ))}
        {typing && (
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
            Adi is thinking...
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => actions[action]?.()}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white"
          >
            {action}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about services or products..."
          className="w-full bg-transparent text-sm text-white outline-none"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              sendMessage(input);
            }
          }}
        />
        <button
          onClick={() => sendMessage(input)}
          className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
