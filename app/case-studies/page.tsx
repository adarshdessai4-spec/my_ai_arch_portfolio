import { caseStudies } from "@/data/caseStudies";
import { CardReveal } from "@/components/CardReveal";

function Diagram({
  nodes,
  edges
}: {
  nodes: string[];
  edges: Array<[number, number]>;
}) {
  const positions = nodes.map((_, index) => ({
    x: 60 + index * 140,
    y: 60
  }));
  return (
    <svg viewBox="0 0 700 140" className="mt-4 h-32 w-full">
      {edges.map(([from, to], index) => (
        <line
          key={`${from}-${to}-${index}`}
          x1={positions[from].x}
          y1={positions[from].y}
          x2={positions[to].x}
          y2={positions[to].y}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />
      ))}
      {nodes.map((label, index) => (
        <g key={label}>
          <circle
            cx={positions[index].x}
            cy={positions[index].y}
            r={20}
            fill="#1a2335"
            stroke="rgba(61,232,255,0.6)"
          />
          <text
            x={positions[index].x}
            y={positions[index].y + 36}
            fill="rgba(255,255,255,0.7)"
            fontSize="10"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-neon-blue">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">
          Proof of Architecture
        </h1>
        <p className="mt-2 text-white/70">
          Three flagship deployments and the trade-offs behind them.
        </p>
      </div>
      <div className="space-y-6">
        {caseStudies.map((study, index) => (
          <CardReveal key={study.id} delay={index * 0.06}>
            <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                {study.title}
              </h2>
              <span className="text-xs text-white/50">Case Study</span>
            </div>
            <p className="mt-3 text-sm text-white/70">{study.problem}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase text-white/50">Constraints</p>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  {study.constraints.map((item) => (
                    <li key={item}>* {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase text-white/50">Approach</p>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  {study.approach.map((item) => (
                    <li key={item}>* {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/50">Outcome</p>
              <p className="mt-2 text-sm text-white/80">
                {study.outcome.join("  /  ")}
              </p>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">Before</p>
                <p className="mt-2 text-sm text-white/80">{study.before}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">After</p>
                <p className="mt-2 text-sm text-white/80">{study.after}</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-white/50">
                Why this, not that?
              </p>
              <ul className="mt-2 space-y-1 text-sm text-white/80">
                {study.tradeoffs.map((item) => (
                  <li key={item}>* {item}</li>
                ))}
              </ul>
            </div>
            <Diagram nodes={study.diagram.nodes} edges={study.diagram.edges} />
            </div>
          </CardReveal>
        ))}
      </div>
    </div>
  );
}
