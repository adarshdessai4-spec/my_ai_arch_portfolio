export type SkillNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
  products: string[];
  demos: string[];
};

export type SkillEdge = {
  from: string;
  to: string;
};

export const skillNodes: SkillNode[] = [
  {
    id: "node",
    label: "Node.js",
    x: 80,
    y: 60,
    description: "Event-driven backend services and API orchestration.",
    products: ["Automations", "Public Grievance Portal"],
    demos: ["Automation Builder"]
  },
  {
    id: "mongodb",
    label: "MongoDB",
    x: 240,
    y: 40,
    description: "Flexible document storage for rapid builds.",
    products: ["Personal AI Assistant"],
    demos: ["Personal AI Assistant"]
  },
  {
    id: "rag",
    label: "RAG",
    x: 380,
    y: 70,
    description: "Retrieval-first assistants with private knowledge.",
    products: ["Personal AI Assistant", "Life OS"],
    demos: ["Personal AI Assistant"]
  },
  {
    id: "langchain",
    label: "LangChain",
    x: 520,
    y: 50,
    description: "Composable AI agent tooling.",
    products: ["Personal AI Assistant"],
    demos: ["Personal AI Assistant"]
  },
  {
    id: "langgraph",
    label: "LangGraph",
    x: 650,
    y: 90,
    description: "Deterministic agent flows and state machines.",
    products: ["Automations"],
    demos: ["Automation Builder"]
  },
  {
    id: "docker",
    label: "Docker",
    x: 120,
    y: 180,
    description: "Containerized deployments for repeatable ops.",
    products: ["Bharat Snapchat", "Bharat TikTok"],
    demos: ["Booking Flow Demo"]
  },
  {
    id: "cicd",
    label: "CI/CD",
    x: 260,
    y: 190,
    description: "Continuous delivery pipelines.",
    products: ["Manki Jewels"],
    demos: ["Resume Builder"]
  },
  {
    id: "razorpay",
    label: "Razorpay",
    x: 420,
    y: 200,
    description: "Payments + subscription infrastructure.",
    products: ["PapaRooms", "Manki Jewels"],
    demos: ["Booking Flow Demo"]
  },
  {
    id: "react",
    label: "React",
    x: 580,
    y: 190,
    description: "Experience-driven UI systems.",
    products: ["All products"],
    demos: ["All demos"]
  },
  {
    id: "next",
    label: "Next.js",
    x: 720,
    y: 160,
    description: "Full-stack product delivery.",
    products: ["All products"],
    demos: ["All demos"]
  },
  {
    id: "blockchain",
    label: "Blockchain",
    x: 760,
    y: 40,
    description: "Identity + provenance systems.",
    products: ["Life OS"],
    demos: ["Personal AI Assistant"]
  }
];

export const skillEdges: SkillEdge[] = [
  { from: "node", to: "rag" },
  { from: "node", to: "docker" },
  { from: "rag", to: "langchain" },
  { from: "langchain", to: "langgraph" },
  { from: "docker", to: "cicd" },
  { from: "razorpay", to: "react" },
  { from: "react", to: "next" },
  { from: "next", to: "blockchain" }
];
