"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ClientFilters() {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());

  const handleFilterChange = (e) => {
    const waitTimeRange = e.target.value;
    if (waitTimeRange) {
      searchParams.set("waitTime", waitTimeRange); // Agregar parámetro a la URL
    } else {
      searchParams.delete("waitTime"); // Eliminar si es vacío
    }
    router.push(`?${searchParams.toString()}`, { scroll: false }); // Evita recargar la página
  };

  return (
    <div className="flex justify-center  rounded-lg">
      <select
        className="text-2xl text-center bg-black text-white p-2 rounded-lg min-w-80"
        onChange={handleFilterChange}
        value={searchParams.get("waitTime") || ""}
      >
        <option value="">Todos</option>
        <option value="1-5">1-5 min</option>
        <option value="6-10">6-10 min</option>
        <option value="11-20">10-20 min</option>
      </select>
    </div>
  );
}
