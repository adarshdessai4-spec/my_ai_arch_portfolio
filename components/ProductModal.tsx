"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useModalStore } from "@/lib/store";
import { products, blocks } from "@/data/products";

export function ProductModal() {
  const { productId, closeProduct } = useModalStore();
  const product = products.find((item) => item.id === productId);

  if (!product) return null;

  const blockLabels = product.blocks.map((id) => {
    const block = blocks.find((item) => item.id === id);
    return block ? block.label : id;
  });

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProduct}
        >
          <motion.div
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b1220]/95 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <button
                onClick={closeProduct}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-sm text-white/70">{product.description}</p>
            <div className="mt-4">
              <p className="text-xs uppercase text-white/50">Building blocks</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {blockLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase text-white/50">Tags</p>
              <p className="mt-2 text-sm text-white/80">
                {product.tags.join("  /  ")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
