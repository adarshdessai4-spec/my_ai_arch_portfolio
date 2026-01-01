export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  constraints: string[];
  approach: string[];
  outcome: string[];
  before: string;
  after: string;
  tradeoffs: string[];
  diagram: {
    nodes: string[];
    edges: Array<[number, number]>;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "hospitality-ai",
    title: "Hospitality AI Ops",
    problem: "High booking drop-offs and manual guest coordination.",
    constraints: ["Legacy PMS", "Lean team", "24/7 support"],
    approach: [
      "Mapped guest journey + intent",
      "Deployed AI concierge + automation workflows",
      "Built executive dashboard"
    ],
    outcome: ["35% faster response", "2x bookings", "50% ops time saved"],
    before: "Manual follow-ups, inconsistent guest experience.",
    after: "Realtime AI concierge with proactive workflows.",
    tradeoffs: ["Phased rollout to protect uptime", "Hybrid bot-human routing"],
    diagram: {
      nodes: ["Guest", "AI Concierge", "Automation", "PMS", "Dashboard"],
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4]
      ]
    }
  },
  {
    id: "gov-portal",
    title: "Public Grievance Portal",
    problem: "Citizen complaints stuck in long queues with no transparency.",
    constraints: ["Compliance", "Multi-department", "Audit readiness"],
    approach: [
      "Unified intake with workflow engine",
      "Escalation + SLA tracking",
      "Real-time reporting for leadership"
    ],
    outcome: ["60% faster resolution", "Audit-ready trail", "Citizen trust"],
    before: "Email-based complaints with manual routing.",
    after: "Structured workflows with clear accountability.",
    tradeoffs: ["Strict permission model", "Gradual department onboarding"],
    diagram: {
      nodes: ["Citizen", "Intake", "Workflow", "Escalation", "Leaders"],
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4]
      ]
    }
  },
  {
    id: "commerce-automation",
    title: "Commerce Automation Suite",
    problem: "Leads leaked across marketing + sales handoffs.",
    constraints: ["Multiple channels", "Legacy CRM", "Fast launch"],
    approach: [
      "Unified lead capture",
      "Automated handoffs + alerts",
      "Built revenue intelligence dashboard"
    ],
    outcome: ["40% higher conversions", "24h response SLA", "Clear attribution"],
    before: "Manual lead follow-ups and siloed data.",
    after: "Automated routing with always-on analytics.",
    tradeoffs: ["Custom CRM connectors", "Training for sales teams"],
    diagram: {
      nodes: ["Lead", "AI Router", "CRM", "Automation", "Analytics"],
      edges: [
        [0, 1],
        [1, 2],
        [1, 3],
        [3, 4]
      ]
    }
  }
];
