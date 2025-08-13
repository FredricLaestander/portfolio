import Image from 'next/image'
import happy from '../public/happy.svg'
import linkedIn from '../public/linkedIn.svg'
import { Mail } from 'lucide-react'
import { getAbout, getProjects } from '@/sanity/routes'
import { About } from '@/components/cardVariants/about'
import { Skills } from '@/components/cardVariants/skills'
import { Projects } from '@/components/cardVariants/projects'
import { SiGithub } from '@icons-pack/react-simple-icons'

export default async function Home() {
  // const heroText = await getHeroText();
  const about = await getAbout()
  const projects = await getProjects()

  return (
    <main className='flex h-screen flex-col items-center justify-between p-20'>
      <div className='flex w-full items-center gap-2'>
        <Image src={happy} alt='Happy squares logo' className='size-8' />
        <p className='font-bold text-slate-900'>Fredric Laestander</p>
      </div>

      <section className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl leading-[4rem] font-bold text-slate-900'>
          {about.heroText}
        </h1>

        <div className='group flex h-60 w-[38rem] gap-4'>
          <Projects projects={projects} />
          <Skills about={about} />
          <About about={about} />
        </div>
      </section>

      <div className='flex gap-3'>
        <a
          href='https://github.com/FredricLaestander/'
          className='flex items-center gap-1 text-sm font-bold'
        >
          <SiGithub className='size-6' />
          Github
        </a>

        <a
          href='https://www.linkedin.com/in/fredric-laestander/'
          className='flex items-center gap-1 text-sm font-bold'
        >
          <Image src={linkedIn} alt='linkedin' className='size-6' />
          LinkedIn
        </a>

        <a
          href='https://github.com/FredricLaestander/'
          className='flex items-center gap-1 text-sm font-bold'
        >
          <Mail className='size-6' />
          Mail
        </a>
      </div>
    </main>
  )
}
