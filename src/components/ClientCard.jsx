export default function ClientCard({ name, waitTime }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="font-bold">{name}</h3>
      <p>Tiempo de espera: {waitTime} min</p>
    </div>
  );
}
