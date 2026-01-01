import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RoleKey } from "@/data/services";

type RoleState = {
  role: RoleKey;
  setRole: (role: RoleKey) => void;
};

export const useRoleStore = create<RoleState>()(
  persist(
    (set) => ({
      role: "founder",
      setRole: (role) => set({ role })
    }),
    { name: "adi-role" }
  )
);

type CommandPaletteState = {
  open: boolean;
  query: string;
  openPalette: () => void;
  closePalette: () => void;
  setQuery: (query: string) => void;
};

export const useCommandPaletteStore = create<CommandPaletteState>((set) => ({
  open: false,
  query: "",
  openPalette: () => set({ open: true }),
  closePalette: () => set({ open: false, query: "" }),
  setQuery: (query) => set({ query })
}));

type ModalState = {
  serviceId: string | null;
  productId: string | null;
  openService: (id: string) => void;
  closeService: () => void;
  openProduct: (id: string) => void;
  closeProduct: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  serviceId: null,
  productId: null,
  openService: (id) => set({ serviceId: id }),
  closeService: () => set({ serviceId: null }),
  openProduct: (id) => set({ productId: id }),
  closeProduct: () => set({ productId: null })
}));

type AIState = {
  isThinking: boolean;
  stepIndex: number;
  confidence: number;
  setThinking: (isThinking: boolean) => void;
  setStep: (stepIndex: number) => void;
  setConfidence: (confidence: number) => void;
};

export const useAIState = create<AIState>((set) => ({
  isThinking: false,
  stepIndex: 0,
  confidence: 0.64,
  setThinking: (isThinking) => set({ isThinking }),
  setStep: (stepIndex) => set({ stepIndex }),
  setConfidence: (confidence) => set({ confidence })
}));
