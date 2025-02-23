import { create } from "zustand";

export const useStore = create((set) => ({
  agents: [],
  clients: [],
  setAgents: (agents) => set({ agents }),
  setClients: (clients) => set({ clients }),
}));
