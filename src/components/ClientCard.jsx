import Image from "next/image";
export default function ClientCard({ name, waitTime }) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg m-4 bg-black h-57 w-50 relative shadow-lg shadow-black ">
      <Image
        className="size-fit  rounded-t-lg  "
        src="/clients.svg"
        alt="logo"
        width={200}
        height={200}
        priority
      />
      <h3 className="text-2xl  text-white mb-5 absolute w-full text-center rounded-t-lg  bg-black/50  -top-0.5 ">
        {name}
      </h3>
      <p className="text-lg text-white">{waitTime} min</p>
    </div>
  );
}
