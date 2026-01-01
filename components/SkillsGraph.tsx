"use client";

import { useState } from "react";
import { skillNodes, skillEdges } from "@/data/skills";

export function SkillsGraph() {
  const [selected, setSelected] = useState(skillNodes[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="glass rounded-2xl p-4">
        <p className="text-sm font-semibold text-white">Skills Map</p>
        <svg
          viewBox="0 0 820 240"
          className="mt-4 h-64 w-full"
          role="img"
          aria-label="Skills map"
        >
          {skillEdges.map((edge) => {
            const from = skillNodes.find((node) => node.id === edge.from);
            const to = skillNodes.find((node) => node.id === edge.to);
            if (!from || !to) return null;
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
              />
            );
          })}
          {skillNodes.map((node) => (
            <g key={node.id} onClick={() => setSelected(node)}>
              <circle
                cx={node.x}
                cy={node.y}
                r={14}
                fill={selected.id === node.id ? "#3DE8FF" : "#1a2335"}
                stroke="rgba(255,255,255,0.3)"
              />
              <text
                x={node.x}
                y={node.y + 28}
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="10"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="glass rounded-2xl p-4">
        <p className="text-xs uppercase text-white/50">Selected node</p>
        <h3 className="mt-2 text-lg font-semibold text-white">
          {selected.label}
        </h3>
        <p className="mt-2 text-sm text-white/70">{selected.description}</p>
        <p className="mt-4 text-xs uppercase text-white/50">Products</p>
        <p className="mt-1 text-sm text-white/80">
          {selected.products.join("  /  ")}
        </p>
        <p className="mt-4 text-xs uppercase text-white/50">Relevant demos</p>
        <p className="mt-1 text-sm text-white/80">
          {selected.demos.join("  /  ")}
        </p>
      </div>
    </div>
  );
}
