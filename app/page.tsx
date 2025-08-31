import Image from 'next/image'
import happy from '../public/happy.svg'
import { Mail } from 'lucide-react'
import { getAbout, getProjects } from '@/sanity/routes'
import { About } from '@/components/cardVariants/about'
import { Skills } from '@/components/cardVariants/skills'
import { Projects } from '@/components/cardVariants/projects'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Social } from '@/components/social'
import { ThemeSwitch } from '@/components/themeSwitch'
import { LinkedinIcon } from '@/components/linkedinIcon'

export default async function Home() {
  const about = await getAbout()
  const projects = await getProjects()

  return (
    <main className='flex flex-col items-center gap-8 p-4 md:h-screen md:p-20'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src={happy} alt='Happy squares logo' className='size-8' />
          <p className='font-bold'>Fredric Laestander</p>
        </div>
        <ThemeSwitch />
      </div>

      <section className='flex h-full w-full flex-col justify-center'>
        <div className='flex flex-col items-center gap-6 pb-16'>
          <h1 className='w-full py-8 text-center text-3xl font-bold md:text-5xl md:leading-[4rem]'>
            {about.heroText}
          </h1>

          <div className='group flex w-full flex-col gap-4 md:h-60 md:w-[38rem] md:flex-row'>
            <Projects projects={projects} />
            <Skills about={about} />
            <About about={about} />
          </div>
        </div>
      </section>

      <footer className='fixed bottom-0 z-20 flex w-full justify-center gap-4 bg-slate-50/50 py-2 backdrop-blur-md dark:bg-slate-900/50'>
        <Social href='https://github.com/FredricLaestander/' icon={SiGithub}>
          Github
        </Social>

        <Social
          href='https://www.linkedin.com/in/fredric-laestander/'
          icon={LinkedinIcon}
        >
          LinkedIn
        </Social>

        <Social href='mailto:fredriclaestander@gmail.com' icon={Mail}>
          Mail
        </Social>
      </footer>
    </main>
  )
}
