import Image from "next/image";


export default function Nav() {
  return (
    <nav className="flex justify-between items-center w-full ">
      <a href="/#">
        <Image src="/img/logo.svg" width={40} height={40} className="h-10 w-auto" alt="nibi taxi media logo" />
      </a>
      <div className="flex items-center rounded-3xl border-black border-2 w-max h-max py-2 md:py-5 gap-5 text-lg md:text-2xl underline">
        <span className="px-2 md:px-5">
          <a href="#about">About Nibi</a>
        </span>
        <span className="relative block w-0.5 h-10 bg-black" />
        <span className="px-2 md:px-5">
          <a href="https://wa.me/2347078065016" target="_blank">Rates</a>
        </span>
      </div>
    </nav>
  );
}
