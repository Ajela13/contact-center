import Main from "@/components/Main";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-blue-100 text-white">
      <Header />
      <Main />
    </div>
  );
}
