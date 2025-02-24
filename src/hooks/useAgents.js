"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { fetchAgents } from "@/services/api";

export const useAgents = (stateFilter) => {
  const { agents, setAgents } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Filtrando por estado:", stateFilter, fetchAgents(stateFilter));
    // Función para obtener los agentes desde la API
    const fetchAgentsData = async () => {
      setLoading(true);
      try {
        const data = await fetchAgents(stateFilter); // Pasamos el filtro aquí si es necesario
        setAgents(data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false);
      }
    };

    // Ejecuta la función de obtención de datos
    fetchAgentsData();

    // WebSocket
    const socket = new WebSocket("ws://localhost:5248/ws/agents");

    socket.onmessage = (event) => {
      const updatedAgents = JSON.parse(event.data);
      setAgents(updatedAgents); // Actualiza los datos globales de agentes
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket (Agentes):", error);
    };

    // Limpiar WebSocket al desmontar el componente
    return () => {
      socket.close();
    };
  }, [setAgents, stateFilter]); // Añadimos `stateFilter` a las dependencias del efecto para que el filtro se aplique siempre que cambie

  // Aplicar el filtro sobre los datos más recientes
  const filteredAgents = stateFilter
    ? agents.filter((agent) => agent.status === stateFilter)
    : agents;
  return { agents: filteredAgents, loading };
};
