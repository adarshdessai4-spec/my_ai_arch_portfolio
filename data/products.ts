export type Block = {
  id: string;
  label: string;
  description: string;
};

export const blocks: Block[] = [
  { id: "booking", label: "Booking", description: "Inventory + scheduling" },
  { id: "payments", label: "Payments", description: "Checkout + billing" },
  { id: "kyc", label: "KYC", description: "Identity + verification" },
  { id: "notifications", label: "Notifications", description: "SMS, email, WhatsApp" },
  { id: "agent", label: "AI Agent", description: "RAG + tools" },
  { id: "automation", label: "Automation", description: "Workflows + triggers" },
  { id: "analytics", label: "Analytics", description: "Dashboards + KPIs" },
  { id: "admin", label: "Admin Panel", description: "Ops console" },
  { id: "dashboard", label: "Dashboard", description: "Realtime monitoring" },
  { id: "identity", label: "Identity/Blockchain", description: "Trust + provenance" },
  { id: "video", label: "Video", description: "Short-form media" },
  { id: "moderation", label: "Moderation", description: "Safety + filters" },
  { id: "coins", label: "Coins/Gifts", description: "Monetization" },
  { id: "catalog", label: "Catalog", description: "Products + inventory" },
  { id: "crm", label: "CRM", description: "Leads + customers" },
  { id: "workflow", label: "Workflow", description: "Case routing" },
  { id: "escalation", label: "Escalation", description: "Multi-level approvals" },
  { id: "forms", label: "Forms", description: "Data capture" },
  { id: "storage", label: "Storage", description: "Secure vault" },
  { id: "provenance", label: "Provenance", description: "Audit trail" },
  { id: "memory", label: "Memory", description: "Long-term context" },
  { id: "triggers", label: "Triggers", description: "Event sources" },
  { id: "integrations", label: "Integrations", description: "Connectors" },
  { id: "feed", label: "Feed", description: "Discovery + ranking" }
];

export type Product = {
  id: string;
  name: string;
  description: string;
  blocks: string[];
  tags: string[];
  cta: string;
};

export const products: Product[] = [
  {
    id: "paparooms",
    name: "PapaRooms",
    description: "AI-first booking engine for smart stays.",
    blocks: ["booking", "payments", "notifications", "admin", "analytics"],
    tags: ["hospitality", "booking"],
    cta: "View demo"
  },
  {
    id: "bharat-snapchat",
    name: "Bharat Snapchat",
    description: "Short-video platform with realtime moderation.",
    blocks: ["video", "feed", "moderation", "coins", "analytics"],
    tags: ["media", "community"],
    cta: "Explore build"
  },
  {
    id: "bharat-tiktok",
    name: "Bharat TikTok",
    description: "Creator ecosystem with gifting and discovery.",
    blocks: ["video", "feed", "moderation", "coins", "analytics"],
    tags: ["creator", "platform"],
    cta: "Explore build"
  },
  {
    id: "manki-jewels",
    name: "Manki Jewels",
    description: "Luxury commerce pipeline with CRM intelligence.",
    blocks: ["catalog", "payments", "crm", "notifications", "analytics"],
    tags: ["commerce", "luxury"],
    cta: "See stack"
  },
  {
    id: "public-grievance",
    name: "Public Grievance Portal",
    description: "Citizen complaint resolution with visibility.",
    blocks: ["forms", "workflow", "escalation", "dashboard", "analytics"],
    tags: ["gov", "workflow"],
    cta: "Case study"
  },
  {
    id: "life-os",
    name: "Life OS",
    description: "Identity + AI vault for lifelong context.",
    blocks: ["identity", "agent", "storage", "provenance"],
    tags: ["identity", "future"],
    cta: "See vision"
  },
  {
    id: "personal-ai",
    name: "Personal AI Assistant",
    description: "RAG assistant with memory and tools.",
    blocks: ["agent", "memory", "integrations"],
    tags: ["assistant", "productivity"],
    cta: "Chat demo"
  },
  {
    id: "automations",
    name: "Automations",
    description: "Trigger-driven workflows across the stack.",
    blocks: ["triggers", "automation", "integrations", "analytics"],
    tags: ["ops", "automation"],
    cta: "See automations"
  }
];

export const productDock = [
  "PapaRooms",
  "Bharat Snapchat",
  "Bharat TikTok",
  "Manki Jewels",
  "Public Grievance Portal",
  "Life OS",
  "Personal AI Assistant",
  "Automations"
];
