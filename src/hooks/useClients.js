"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";

export const useClients = () => {
  const { clients, setClients } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5248/ws/clients");

    socket.onmessage = (event) => {
      const updatedClients = JSON.parse(event.data);
      setClients(updatedClients);
      setLoading(false);
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Clientes):", error);
      setLoading(false);
    };

    return () => {
      socket.close();
    };
  }, [setClients]);

  return { clients, loading };
};
