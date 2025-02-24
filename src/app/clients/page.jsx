import ClientList from "@/components/ClientList";
import Header from "@/components/Header";
import ClientFilters from "@/components/ClientFilters";

export default async function AgentsPage() {
  return (
    <div className=" flex flex-row  bg-blue-100 text-white min-h-screen relative">
      <Header />
      <div className="flex-1 flex flex-col p-4 h-screen overflow-y-auto">
        <div className="flex flex-col items-center h-screen bg-blue-100 text-white">
          <h1 className="text-7xl text-center text-black py-10">Clientes</h1>
          <ClientFilters />
          <ClientList />
        </div>
      </div>
    </div>
  );
}
