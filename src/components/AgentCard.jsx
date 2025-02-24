import Image from "next/image";
export default function AgentCard({ name, status, waitTime }) {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg m-4 bg-sky-900/90 h-63 w-50 relative  ">
      <Image
        className="size-fit  rounded-t-lg "
        src="/agents.svg"
        alt="logo"
        width={200}
        height={200}
        priority
      />
      <h3 className="text-2xl text-white mb-5 absolute w-full text-center rounded-t-lg  bg-sky-900/50  -top-0 ">
        {name}
      </h3>
      <p className="text-lg text-white">
        <span>{status}</span>
      </p>
      <p className="text-lg text-white">{waitTime} min</p>
    </div>
  );
}
