"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { roles } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { useModalStore, useRoleStore } from "@/lib/store";
import { LivePortrait } from "@/components/LivePortrait";
import { AppTiles } from "@/components/AppTiles";
import { RealtimeAILogs } from "@/components/RealtimeAILogs";
import { AskAdiChat } from "@/components/AskAdiChat";
import { AIThinkingViz } from "@/components/AIThinkingViz";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceModal } from "@/components/ServiceModal";
import { ProductModal } from "@/components/ProductModal";
import { ProductsDock } from "@/components/ProductsDock";
import { ProblemSolutionSimulator } from "@/components/ProblemSolutionSimulator";
import { LiveDecisionEngine } from "@/components/LiveDecisionEngine";
import { SkillsGraph } from "@/components/SkillsGraph";

const roleProductMap: Record<string, string[]> = {
  founder: ["paparooms", "life-os", "personal-ai"],
  ops: ["automations", "public-grievance", "personal-ai"],
  government: ["public-grievance", "life-os", "automations"],
  builder: ["paparooms", "manki-jewels", "personal-ai"],
  agency: ["automations", "paparooms", "bharat-snapchat"]
};

const roleCaseStudyMap: Record<string, string[]> = {
  founder: ["hospitality-ai", "commerce-automation"],
  ops: ["commerce-automation", "hospitality-ai"],
  government: ["gov-portal", "hospitality-ai"],
  builder: ["hospitality-ai", "commerce-automation"],
  agency: ["commerce-automation", "gov-portal"]
};

export default function HomePage() {
  const { role, setRole } = useRoleStore();
  const { openProduct } = useModalStore();
  const selectedRole = roles.find((item) => item.key === role) ?? roles[0];
  const recommendedProducts = roleProductMap[role]
    .map((id) => products.find((product) => product.id === id))
    .filter((item): item is (typeof products)[number] => Boolean(item));
  const highlightedCaseStudies = roleCaseStudyMap[role]
    .map((id) => caseStudies.find((item) => item.id === id))
    .filter((item): item is CaseStudy => Boolean(item));

  return (
    <div className="space-y-14">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neon-blue">
              AI OS Dashboard
            </p>
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-2 text-xs text-neon-blue shadow-glow">
              <span className="h-2 w-2 animate-pulse rounded-full bg-neon-orange" />
              Adarsh Dessai - AI Architect
            </div>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
              I build AI-first products that ship fast.
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Scale, Automate & Innovate your business with AI.
            </p>
          </div>
          <AppTiles />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#ask-adi"
              className="rounded-full border border-neon-blue bg-neon-blue/10 px-5 py-2 text-sm font-semibold text-neon-blue"
            >
              Let's Chat
            </Link>
            <Link
              href="https://calendly.com/placeholder"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/70"
            >
              {selectedRole.cta}
            </Link>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  AI Consultant Mode
                </p>
                <p className="text-xs text-white/60">
                  Who are you? We adapt the entire OS for you.
                </p>
              </div>
              <span className="text-xs text-neon-blue">Live</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {roles.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setRole(item.key)}
                  className={`rounded-full border px-4 py-2 text-xs transition ${
                    role === item.key
                      ? "border-neon-blue text-white"
                      : "border-white/10 text-white/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {recommendedProducts.map((product) => (
                <button
                  key={product?.id}
                  onClick={() => product && openProduct(product.id)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/80"
                >
                  {product?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center">
            <LivePortrait />
          </div>
          <div className="w-full">
            <RealtimeAILogs />
          </div>
        </div>
      </section>

      <section
        id="ask-adi"
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <AskAdiChat />
        <AIThinkingViz />
      </section>

      <ServicesGrid />
      <ServiceModal />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ProblemSolutionSimulator />
        <LiveDecisionEngine />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neon-blue">Product Dock</p>
            <h2 className="text-2xl font-semibold text-white">
              Products-as-Building-Blocks
            </h2>
          </div>
          <Link href="/projects" className="text-sm text-white/60">
            View all
          </Link>
        </div>
        <ProductsDock />
        <ProductModal />
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neon-blue">Highlighted case studies</p>
            <h2 className="text-2xl font-semibold text-white">
              Architecture decisions in the wild
            </h2>
          </div>
          <Link href="/case-studies" className="text-sm text-white/60">
            Explore
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {highlightedCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white">{study.title}</h3>
              <p className="mt-2 text-sm text-white/70">{study.problem}</p>
              <p className="mt-3 text-xs text-white/60">Outcome</p>
              <p className="text-sm text-white/80">
                {study.outcome.join("  /  ")}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <SkillsGraph />
    </div>
  );
}
