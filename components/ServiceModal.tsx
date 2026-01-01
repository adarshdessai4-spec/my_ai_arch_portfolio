"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useModalStore, useRoleStore } from "@/lib/store";
import { servicesBase } from "@/data/services";

export function ServiceModal() {
  const { serviceId, closeService } = useModalStore();
  const { role } = useRoleStore();
  const service = servicesBase.find((item) => item.id === serviceId);
  const roleNote: Record<string, string> = {
    founder: "Focus: roadmap clarity + AI moat for leadership teams.",
    ops: "Focus: automation coverage + operational visibility.",
    government: "Focus: compliance, audit trails, and citizen-grade UX.",
    builder: "Focus: fast MVP + scale-ready architecture.",
    agency: "Focus: repeatable delivery + margin expansion."
  };

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeService}
        >
          <motion.div
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b1220]/95 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <button
                onClick={closeService}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Tailored for <span className="text-neon-blue">{role}</span> teams
              with AI-first outcomes.
            </p>
            <p className="mt-1 text-xs text-white/50">{roleNote[role]}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">What you get</p>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  {service.modal.get.map((item) => (
                    <li key={item}>* {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">Timeline</p>
                <p className="mt-2 text-sm text-white/80">
                  {service.modal.timeline}
                </p>
                <p className="mt-4 text-xs uppercase text-white/50">
                  Typical stack
                </p>
                <p className="mt-2 text-sm text-white/80">
                  {service.modal.stack.join("  /  ")}
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/50">Example project</p>
              <p className="mt-2 text-sm text-white/80">
                {service.modal.example}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
