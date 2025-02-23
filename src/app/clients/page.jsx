import ClientList from "@/components/ClientList";
export default async function AgentsPage() {
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div className="grid grid-cols-3 gap-4">
        <ClientList />
      </div>
    </div>
  );
}
