"use client";
import { useEffect } from "react";
import { useStore } from "@/store/store";

export const useClients = () => {
  const { clients, setClients } = useStore();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5248/ws/clients");

    socket.onmessage = (event) => {
      const updatedClients = JSON.parse(event.data);
      setClients(updatedClients);
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Clientes):", error);
    };

    return () => {
      socket.close();
    };
  }, [setClients]);

  return { clients };
};
