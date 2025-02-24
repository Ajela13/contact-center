"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { fetchClients } from "@/services/api";

export const useClients = (stateFilter) => {
  const { clients, setClients } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de clientes desde la API
    const fetchClientData = async () => {
      setLoading(true);
      try {
        const data = await fetchClients(stateFilter);
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();

    // Establecer la conexión WebSocket
    const socket = new WebSocket("ws://localhost:5248/ws/clients");

    socket.onmessage = (event) => {
      const updatedClients = JSON.parse(event.data);
      setClients(updatedClients);
      // No se cambia el estado `loading` aquí para evitar interferir con los mensajes frecuentes
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Clientes):", error);
      setLoading(false); // Solo para asegurarnos de que loading se apague si ocurre un error
    };

    // Limpiar al desmontar el componente
    return () => {
      socket.close();
    };
  }, [setClients, stateFilter]);

  // Filtro de los clientes según el tiempo de espera
  const filteredClients = clients.filter((client) => {
    if (!stateFilter) return true; // Si no hay filtro, devuelve todos los clientes
    const [minWaitTime, maxWaitTime] = stateFilter.split("-").map(Number);
    return client.waitTime >= minWaitTime && client.waitTime <= maxWaitTime;
  });

  return { clients: filteredClients, loading };
};
