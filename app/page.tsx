import Image from "next/image";
import happy from "../public/happy.svg";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 h-screen items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <Image src={happy} alt="Happy squares logo" className="size-32" />
        <h1 className="text-4xl">Welcome to Fredric Laestanders portfolio</h1>
        <h2 className="text-2xl">
          This website is under construction... stay tuned!
        </h2>
      </div>
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="https://github.com/FredricLaestander/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="light:invert"
          src="/github.svg"
          alt="Github logomark"
          width={20}
          height={20}
        />
        Portfolio source code
      </a>
    </main>
  );
}
