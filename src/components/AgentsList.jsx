"use client";
import { useAgents } from "@/hooks/useAgents";
import AgentCard from "@/components/AgentCard";
import { useSearchParams } from "next/navigation";

const AgentsList = () => {
  const { agents } = useAgents();
  const searchParams = useSearchParams();
  const filterState = searchParams.get("state");

  const filteredAgents = filterState
    ? agents.filter((agent) => agent.status === filterState)
    : agents;
  console.log(filterState, agents);
  return (
    <div>
      <h2>Lista de Agentes</h2>
      <ul>
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            status={agent.status}
            waitTime={agent.waitTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default AgentsList;
