export default function AgentCard({ id, name, status, waitTime }) {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>
        Estado: <span>{status}</span>
      </p>
      <p>Tiempo en espera: {waitTime} min</p>
    </li>
  );
}
