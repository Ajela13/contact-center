"use client";
import { useStore } from "@/store/store";

export default function AgentFilters() {
  const { setStateFilter } = useStore();

  const handleFilterChange = (e) => {
    setStateFilter(e.target.value);
  };

  return (
    <div className="flex justify-center  ">
      <select
        className="text-2xl text-center bg-sky-900 text-white p-2 rounded-lg min-w-80"
        onChange={handleFilterChange}
      >
        <option value="">Todos</option>
        <option value="available">Disponible</option>
        <option value="busy">Ocupado</option>
        <option value="paused">En pausa</option>
      </select>
    </div>
  );
}
