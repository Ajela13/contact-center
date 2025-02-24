"use client";
import { useStore } from "@/store/store";

export default function ClientFilters() {
  const { setStateFilter } = useStore();

  const handleFilterChange = (e) => {
    setStateFilter(e.target.value);
  };

  return (
    <div className="flex justify-center  rounded-lg">
      <select
        className="text-2xl text-center bg-black text-white p-2 rounded-lg min-w-80"
        onChange={handleFilterChange}
      >
        <option value="">Todos</option>
        <option value="1-5">1-5 min</option>
        <option value="6-10">6-10 min</option>
        <option value="11-20">10-20 min</option>
      </select>
    </div>
  );
}
