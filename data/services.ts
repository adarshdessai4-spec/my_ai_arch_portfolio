import { LucideIcon, Bot, Workflow, PanelTop, Link2, LineChart, Compass } from "lucide-react";

export type RoleKey = "founder" | "ops" | "government" | "builder" | "agency";

export const roles: { key: RoleKey; label: string; cta: string }[] = [
  { key: "founder", label: "Founder/CEO", cta: "Book a Strategy Call" },
  { key: "ops", label: "Operations Head", cta: "Get Automation Audit" },
  { key: "government", label: "Government/Public Sector", cta: "Plan Citizen Workflow" },
  { key: "builder", label: "Startup Builder", cta: "Ship the MVP" },
  { key: "agency", label: "Agency Owner", cta: "Scale Delivery" }
];

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  bullets: string[];
  cta: string;
  modal: {
    get: string[];
    timeline: string;
    stack: string[];
    example: string;
  };
};

export const servicesBase: Service[] = [
  {
    id: "agents",
    title: "AI Agents & Chatbots",
    icon: Bot,
    bullets: ["RAG copilots", "Support & sales bots", "Intent routing"],
    cta: "Launch AI Agent",
    modal: {
      get: ["Intent map", "RAG pipeline", "Escalation flows", "Analytics"],
      timeline: "2-4 weeks",
      stack: ["Next.js", "LangChain", "Vector DB", "Streaming UI"],
      example: "Personal AI Assistant for internal teams"
    }
  },
  {
    id: "automations",
    title: "Business Automations",
    icon: Workflow,
    bullets: ["n8n/Make/Zapier", "CRM workflows", "WhatsApp flows"],
    cta: "Automate Ops",
    modal: {
      get: ["Process audit", "Workflow maps", "Triggers + alerts", "SLA tracking"],
      timeline: "1-3 weeks",
      stack: ["n8n", "Make", "Zapier", "Webhooks"],
      example: "Lead capture automation for agencies"
    }
  },
  {
    id: "apps",
    title: "AI Web & Mobile Apps",
    icon: PanelTop,
    bullets: ["Full-stack builds", "Fast iterations", "Scalable infra"],
    cta: "Build Product",
    modal: {
      get: ["Product spec", "Rapid prototypes", "Production build", "Deployment"],
      timeline: "4-10 weeks",
      stack: ["Next.js", "React Native", "Postgres", "Vercel"],
      example: "AI-enabled booking platform"
    }
  },
  {
    id: "integrations",
    title: "AI Integrations",
    icon: Link2,
    bullets: ["APIs & payments", "Auth + dashboards", "Vendor orchestration"],
    cta: "Connect Systems",
    modal: {
      get: ["Integration plan", "API orchestration", "Security reviews", "Monitoring"],
      timeline: "2-5 weeks",
      stack: ["Node.js", "Razorpay", "Auth", "Message queues"],
      example: "Payments + CRM sync"
    }
  },
  {
    id: "analytics",
    title: "Analytics & Dashboards",
    icon: LineChart,
    bullets: ["Operational visibility", "Realtime KPIs", "Decision dashboards"],
    cta: "Visualize Ops",
    modal: {
      get: ["KPI design", "Data pipes", "Dashboard UI", "Alerts"],
      timeline: "2-4 weeks",
      stack: ["Next.js", "Postgres", "Metabase", "Supabase"],
      example: "Executive reporting hub"
    }
  },
  {
    id: "consulting",
    title: "Consulting & Architecture",
    icon: Compass,
    bullets: ["AI strategy", "System design", "Roadmap & audits"],
    cta: "Architect with Adi",
    modal: {
      get: ["Roadmap", "Architecture diagrams", "Team enablement", "Risk analysis"],
      timeline: "1-2 weeks",
      stack: ["Docs", "Workshops", "Architecture reviews"],
      example: "AI-first platform blueprint"
    }
  }
];

export const roleServiceOrder: Record<RoleKey, string[]> = {
  founder: ["consulting", "agents", "apps", "integrations", "analytics", "automations"],
  ops: ["automations", "analytics", "integrations", "agents", "consulting", "apps"],
  government: ["consulting", "integrations", "analytics", "automations", "agents", "apps"],
  builder: ["apps", "agents", "consulting", "integrations", "analytics", "automations"],
  agency: ["automations", "agents", "integrations", "apps", "analytics", "consulting"]
};

export const roleHighlights: Record<RoleKey, { headline: string; servicesCopy: string }> = {
  founder: {
    headline: "Architecture-first execution for visionaries",
    servicesCopy: "Prioritize roadmap clarity, investor-ready systems, and AI moat."
  },
  ops: {
    headline: "Operational clarity + automation velocity",
    servicesCopy: "Remove bottlenecks, instrument teams, and automate the busywork."
  },
  government: {
    headline: "Citizen-grade AI systems with compliance built in",
    servicesCopy: "Secure workflows, transparent reporting, and audit-ready infrastructure."
  },
  builder: {
    headline: "Ship the MVP, then scale safely",
    servicesCopy: "Launch fast with AI-native features and growth-ready infrastructure."
  },
  agency: {
    headline: "Scale delivery without scaling headcount",
    servicesCopy: "Automate client ops, build repeatable AI modules, and boost margins."
  }
};
