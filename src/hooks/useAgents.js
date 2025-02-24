"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";

export const useAgents = () => {
  const { agents, setAgents } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5248/ws/agents");

    socket.onmessage = (event) => {
      const updatedAgents = JSON.parse(event.data);
      setAgents(updatedAgents);
      setLoading(false);
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Agentes):", error);
      setLoading(false);
    };

    return () => {
      socket.close();
    };
  }, [setAgents]);

  return { agents, loading };
};
