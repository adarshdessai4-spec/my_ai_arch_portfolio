"use client";

import { servicesBase, roleServiceOrder, roleHighlights } from "@/data/services";
import { useModalStore, useRoleStore } from "@/lib/store";
import { GlassCard } from "@/components/GlassCard";
import { motion } from "framer-motion";

export function ServicesGrid() {
  const { role } = useRoleStore();
  const { openService } = useModalStore();
  const order = roleServiceOrder[role];
  const sorted = [...servicesBase].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
  );

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-neon-blue">Services</p>
        <h2 className="text-2xl font-semibold text-white">
          {roleHighlights[role].headline}
        </h2>
        <p className="mt-2 text-sm text-white/70">
          {roleHighlights[role].servicesCopy}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {sorted.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard className="group flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <Icon className="h-5 w-5 text-neon-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>* {bullet}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => openService(service.id)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neon-orange"
                >
                  {service.cta} more
                </button>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
