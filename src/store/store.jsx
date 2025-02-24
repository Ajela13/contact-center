import { create } from "zustand";

export const useStore = create((set) => ({
  stateFilter: "",
  agents: [],
  clients: [],
  setAgents: (agents) => set({ agents }),
  setClients: (clients) => set({ clients }),
  setStateFilter: (stateFilter) => set({ stateFilter }),
}));
