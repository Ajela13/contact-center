"use client";
import { useClients } from "@/hooks/useClients";
import ClientCard from "@/components/ClientCard";

const ClientList = () => {
  const { clients } = useClients();
  console.log(clients);
  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clients.map((clients) => (
          <ClientCard
            key={clients.id}
            name={clients.name}
            waitTime={clients.waitTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
