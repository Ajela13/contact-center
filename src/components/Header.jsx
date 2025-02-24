import Link from "next/link";
import Image from "next/image";
import NavBar from "./Navbar";
export default function Header() {
  return (
    <header className="flex flex-col items-center w-50 h-screen bg-blue-900 relative">
      <div className="size-full absolute bg-black/60 p-4"></div>
      <Link className="z-10" href="/">
        <Image
          className="size-35 p-4 rounded-full z-10"
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </Link>

      <NavBar />
    </header>
  );
}
