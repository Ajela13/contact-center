"use client";
import { useAgents } from "@/hooks/useAgents";
import AgentCard from "@/components/AgentCard";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/agents/loading";

const AgentsList = () => {
  const { agents, loading } = useAgents();
  const searchParams = useSearchParams();
  const filterState = searchParams.get("state");

  const filteredAgents = filterState
    ? agents.filter((agent) => agent.status === filterState)
    : agents;

  if (loading) {
    return <Loading />;
  }
  console.log(agents);
  return (
    <div className="flex justify-center w-full h-full ">
      <ul className="mt-10 flex flex-wrap justify-center">
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
