import Image from 'next/image'
import happy from '../public/happy.svg'
import { Github, Linkedin, Mail } from 'lucide-react'
import { getAbout } from '@/sanity/routes'
import { Card } from '@/components/card'
import { urlFor } from '@/sanity/lib/image'

export default async function Home() {
  // const heroText = await getHeroText();
  const about = await getAbout()

  return (
    <main className='flex h-screen flex-col items-center justify-between p-20'>
      <div className='flex w-full items-center gap-2'>
        <Image src={happy} alt='Happy squares logo' className='size-8' />
        <p className='font-bold text-slate-900'>Fredric Laestander</p>
      </div>

      <section className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl leading-[4rem] font-bold'>{about.heroText}</h1>

        <div className='flex gap-4'>
          {/* <Card title="Work" />
          <Card title="Skills" /> */}
          <Card title='about' about={about} />
        </div>
      </section>

      <div className='flex gap-3'>
        <a
          href='https://github.com/FredricLaestander/'
          className='flex items-center gap-1 text-sm font-bold text-slate-800'
        >
          <Github className='size-6' />
          <p className='text-sm'>Github</p>
        </a>

        <a
          href='https://www.linkedin.com/in/fredric-laestander/'
          className='flex items-center gap-1 text-sm font-bold text-slate-800'
        >
          <Linkedin className='size-6' />
          LinkedIn
        </a>

        <a
          href='https://github.com/FredricLaestander/'
          className='flex items-center gap-1 text-sm font-bold text-slate-800'
        >
          <Mail className='size-6' />
          Mail
        </a>
      </div>
    </main>
  )
}
