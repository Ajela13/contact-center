import AgentFilters from "@/components/AgentFilters";
import AgentsList from "@/components/AgentsList";
import Header from "@/components/Header";

export default async function AgentsPage() {
  return (
    <div className=" flex flex-row  bg-blue-100 text-white min-h-screen relative">
      <Header />
      <div className="flex-1 flex flex-col p-4 h-screen overflow-y-auto">
        <div className="flex flex-col items-center h-screen bg-blue-100 text-white">
          <h1 className="text-7xl text-center text-blue-950 py-10">Agentes</h1>
          <AgentFilters />
          <AgentsList />
        </div>
      </div>
    </div>
  );
}
