import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="flex flex-col items-center p-4 justify-between ">
      <a
        href="/agents"
        className="flex flex-col items-center size-55 relative my-10 "
      >
        <Image
          className="rounded-lg mb-5  "
          src="/agents.svg"
          alt="agents"
          width={120}
          height={120}
        />
        <p className="text-2xl text-white">Agentes</p>
      </a>
      <a
        href="/clients"
        className="flex flex-col items-center size-55 relative mb-10"
      >
        <Image
          className="rounded-lg mb-5 shadow-lg shadow-black"
          src="/clients.svg"
          alt="clients"
          width={120}
          height={120}
        />
        <p className="text-2xl text-white">Clientes</p>
      </a>
    </nav>
  );
}
