"use client";
import { useClients } from "@/hooks/useClients";
import ClientCard from "@/components/ClientCard";
import Loading from "@/app/agents/loading";
import { useStore } from "@/store/store";

const ClientList = () => {
  const { stateFilter } = useStore();
  const { clients, loading } = useClients(stateFilter);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center w-full h-full ">
      <ul className="mt-10 flex flex-wrap justify-center">
        {clients.map((client) => (
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
