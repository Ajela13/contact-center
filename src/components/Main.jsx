import Header from "./Header";
export default function Main() {
  return (
    <main className="flex-1 flex flex-col p-4 h-screen overflow-auto">
      <div className="bg-blue-950/30 p-10 rounded-4xl m-6">
        <h1 className="text-center text-4xl mb-10 text-blue-950">
          Bienvenido al Contact Center
        </h1>
        <p className="text-lg text-blue-950">
          Bienvenido al <strong>Panel de Contact Center</strong>, una plataforma
          de monitoreo en tiempo real para gestionar de manera eficiente a
          agentes y clientes.
        </p>

        <h2 className="text-2xl text-blue-950 mt-4">🔹 Sección de Agentes</h2>
        <p className="text-lg text-blue-950">
          Haz clic en <strong>"Agentes"</strong> para ver actualizaciones en
          vivo sobre el estado de los agentes, su disponibilidad, tiempos de
          espera y actividad.
        </p>

        <h2 className="text-2xl text-blue-950 mt-4">🔹 Sección de Clientes</h2>
        <p className="text-lg text-blue-950">
          Haz clic en <strong>"Clientes"</strong> para seguir las interacciones
          de los clientes, sus tiempos de espera y su estado actual en el
          soporte.
        </p>

        <p className="text-lg text-blue-950 mt-4">
          Gracias a la sincronización en tiempo real, nuestra plataforma
          facilita el monitoreo, permitiendo optimizar el rendimiento del equipo
          y mejorar los tiempos de respuesta. 🚀
        </p>
      </div>
    </main>
  );
}
