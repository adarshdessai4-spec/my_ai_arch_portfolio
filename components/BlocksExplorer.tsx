"use client";

import { useState } from "react";
import { blocks, products } from "@/data/products";
import { useModalStore } from "@/lib/store";
import { CardReveal } from "@/components/CardReveal";

export function BlocksExplorer() {
  const [selected, setSelected] = useState<string | null>(null);
  const { openProduct } = useModalStore();

  const filtered = selected
    ? products.filter((product) => product.blocks.includes(selected))
    : products;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
      <div className="glass rounded-2xl p-4">
        <p className="text-xs uppercase text-white/50">Blocks</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setSelected(null)}
            className={`rounded-full border px-3 py-1 text-xs ${
              selected === null
                ? "border-neon-blue text-white"
                : "border-white/10 text-white/70"
            }`}
          >
            All Blocks
          </button>
          {blocks.map((block) => (
            <button
              key={block.id}
              onClick={() => setSelected(block.id)}
              className={`rounded-full border px-3 py-1 text-xs ${
                selected === block.id
                  ? "border-neon-blue text-white"
                  : "border-white/10 text-white/70"
              }`}
            >
              {block.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/70">
          {selected
            ? blocks.find((item) => item.id === selected)?.description
            : "Combine blocks to ship AI-first products faster."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((product, index) => (
          <CardReveal key={product.id} delay={index * 0.04}>
            <div className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-white">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-white/70">{product.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.blocks.map((blockId) => (
                  <span
                    key={blockId}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                  >
                    {blocks.find((item) => item.id === blockId)?.label ??
                      blockId}
                  </span>
                ))}
              </div>
              <button
                onClick={() => openProduct(product.id)}
                className="mt-4 text-sm font-semibold text-neon-orange"
              >
                {product.cta} more
              </button>
            </div>
          </CardReveal>
        ))}
      </div>
    </div>
  );
}
