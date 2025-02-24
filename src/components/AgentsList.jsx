"use client";
import { useAgents } from "@/hooks/useAgents";
import AgentCard from "@/components/AgentCard";
import Loading from "@/app/agents/loading";
import { useStore } from "@/store/store";

const AgentsList = () => {
  const { stateFilter } = useStore(); // Obtener filtro del store
  const { agents, loading } = useAgents(stateFilter); // Pasar filtro al hook
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center w-full h-full ">
      <ul className="mt-10 flex flex-wrap justify-center">
        {agents.map((agent) => (
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
