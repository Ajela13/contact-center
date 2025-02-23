"use client";
import { useEffect } from "react";
import { useStore } from "@/store/store";

export const useAgents = () => {
  const { agents, setAgents } = useStore();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5248/ws/agents");

    socket.onmessage = (event) => {
      const updatedAgents = JSON.parse(event.data);
      setAgents(updatedAgents);
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Agentes):", error);
    };

    return () => {
      socket.close();
    };
  }, [setAgents]);

  return { agents };
};
