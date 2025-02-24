const API_URL = "http://localhost:5248";

export const fetchAgents = async (state) => {
  const url = state ? `${API_URL}/agents?state=${state}` : `${API_URL}/agents`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error fetching agents");

  return res.json();
};

export const fetchClients = async (maxWaitTime) => {
  const url = maxWaitTime
    ? `${API_URL}/clients?maxWaitTime=${maxWaitTime}`
    : `${API_URL}/clients`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error fetching clients");

  return res.json();
};
