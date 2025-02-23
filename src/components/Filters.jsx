"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function Filters() {
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
    <select
      onChange={handleFilterChange}
      value={searchParams.get("state") || ""}
    >
      <option value="">Todos</option>
      <option value="available">Disponible</option>
      <option value="busy">Ocupado</option>
      <option value="paused">En pausa</option>
    </select>
  );
}
