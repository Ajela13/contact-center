"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function AgentFilters() {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());

  const handleFilterChange = (e) => {
    const state = e.target.value;
    if (state) {
      searchParams.set("state", state); // Agregar parámetro a la URL
    } else {
      searchParams.delete("state"); // Eliminar si es vacío
    }
    router.push(`?${searchParams.toString()}`, { scroll: false }); // Evita recargar la página
  };

  return (
    <div className="flex justify-center shadow-lg shadow-black rounded-lg ">
      <select
        className="text-2xl text-center bg-sky-900 text-white p-2 rounded-lg min-w-80"
        onChange={handleFilterChange}
        value={searchParams.get("state") || ""}
      >
        <option value="">Todos</option>
        <option value="available">Disponible</option>
        <option value="busy">Ocupado</option>
        <option value="paused">En pausa</option>
      </select>
    </div>
  );
}
