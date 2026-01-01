import { BlocksExplorer } from "@/components/BlocksExplorer";
import { ProductModal } from "@/components/ProductModal";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-neon-blue">Products + Blocks</p>
        <h1 className="text-3xl font-semibold text-white">
          Products as Building Blocks
        </h1>
        <p className="mt-2 text-white/70">
          Every product is a modular system. Tap a block to see what it powers.
        </p>
      </div>
      <BlocksExplorer />
      <ProductModal />
    </div>
  );
}
