const API_URL = "http://localhost:5248";

export const fetchAgents = async () => {
  const res = await fetch(`${API_URL}/agents`);
  if (!res.ok) throw new Error("Error fetching agents");
  return res.json();
};

export const fetchClients = async () => {
  const res = await fetch(`${API_URL}/clients`);
  if (!res.ok) throw new Error("Error fetching clients");
  return res.json();
};
