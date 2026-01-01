import { GlassCard } from "@/components/GlassCard";
import { CardReveal } from "@/components/CardReveal";

export function AppTiles() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {["10+ AI Products", "500+ Automations", "Full-stack + AI Architect"].map(
        (item, index) => (
          <CardReveal key={item} delay={index * 0.05}>
            <GlassCard className="px-4 py-3">
              <p className="text-sm font-semibold text-white">{item}</p>
            </GlassCard>
          </CardReveal>
        )
      )}
    </div>
  );
}
