"use client";
import { useClients } from "@/hooks/useClients";
import ClientCard from "@/components/ClientCard";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/agents/loading";

const ClientList = () => {
  const { clients, loading } = useClients();
  console.log(clients);
  const searchParams = new URLSearchParams(useSearchParams());
  const waitTimeFilter = searchParams.get("waitTime");

  const filteredClients = clients.filter((client) => {
    if (!waitTimeFilter) return true; // Si no hay filtro, mostrar todos los clientes

    const [minWaitTime, maxWaitTime] = waitTimeFilter.split("-").map(Number);
    return client.waitTime >= minWaitTime && client.waitTime <= maxWaitTime;
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center w-full h-full ">
      <ul className="mt-10 flex flex-wrap justify-center">
        {filteredClients.map((client) => (
          <ClientCard
            key={client.id}
            name={client.name}
            waitTime={client.waitTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
