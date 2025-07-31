import Image from "next/image";
import happy from "../public/happy.svg";
import { Github, Linkedin, Mail } from "lucide-react";
import { getAboutImages, getHeroText } from "@/sanity/routes";
import { Card } from "@/components/card";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  // const heroText = await getHeroText();
  const { heroText } = await getHeroText();
  const aboutImages = await getAboutImages();
  console.log(aboutImages);

  return (
    <main className="flex flex-col justify-between h-screen items-center p-20">
      <div className="flex gap-2 w-full items-center">
        <Image src={happy} alt="Happy squares logo" className="size-8" />
        <p className="font-bold text-slate-900">Fredric Laestander</p>
      </div>

      <section className="flex flex-col items-center gap-16">
        <h1 className="text-5xl font-bold leading-[4rem]">{heroText}</h1>

        <div className="flex gap-4">
          {/* <Card title="Work" />
          <Card title="Skills" /> */}
          <Card
            title="About"
            images={aboutImages.images.map((image) => urlFor(image).url())}
          />
        </div>
      </section>

      <div className="flex gap-3">
        <a
          href="https://github.com/FredricLaestander/"
          className="flex gap-1 font-bold text-sm items-center text-slate-800"
        >
          <Github className="size-6" />
          <p className="text-sm">Github</p>
        </a>

        <a
          href="https://www.linkedin.com/in/fredric-laestander/"
          className="flex gap-1 font-bold text-sm items-center  text-slate-800"
        >
          <Linkedin className="size-6" />
          LinkedIn
        </a>

        <a
          href="https://github.com/FredricLaestander/"
          className="flex gap-1 font-bold text-sm items-center  text-slate-800"
        >
          <Mail className="size-6" />
          Mail
        </a>
      </div>
    </main>
  );
}
