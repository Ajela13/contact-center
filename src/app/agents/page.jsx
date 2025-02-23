import { fetchAgents } from "@/services/api";
import Filters from "@/components/Filters";
import AgentsList from "@/components/AgentsList";

export default async function AgentsPage() {
  const agents = await fetchAgents();

  return (
    <div>
      <h1>Lista de Agentes</h1>
      <Filters />
      <div className="grid grid-cols-3 gap-4">
        <AgentsList />
      </div>
    </div>
  );
}
