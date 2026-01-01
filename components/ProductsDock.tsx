"use client";

import { productDock, products } from "@/data/products";
import { useModalStore } from "@/lib/store";

export function ProductsDock() {
  const { openProduct } = useModalStore();
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {productDock.map((name) => {
          const product = products.find((item) => item.name === name);
          return (
            <button
              key={name}
              onClick={() => product && openProduct(product.id)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 transition hover:border-neon-blue hover:text-white"
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
