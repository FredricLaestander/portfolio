'use client'

import { useState } from 'react'
import { Card } from '../card'
import { Project } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import gradient from '../../public/gradient.jpg'
import { Modal } from '../modal'
import { ModalCard } from '../modalCard'
import { ArrowUpRight } from 'lucide-react'
import { PortableText } from 'next-sanity'

export const Projects = ({ projects }: { projects: Project[] }) => {
  const [openModal, setOpenModal] = useState(false)
  const images = projects.map((project) => project.images[1])
  return (
    <>
      <Card
        title='work'
        onClick={() => {
          setOpenModal(true)
        }}
      >
        {images.slice(0, 3).map((image) => {
          const url = urlFor(image).width(48).url()
          return (
            <Image
              key={url}
              src={url}
              alt=''
              width={48}
              height={80}
              className='h-20 w-12 object-cover object-top'
            />
          )
        })}
        {images.length < 3 && (
          <Image src={gradient} alt='a blue swirl' className='h-20 w-12' />
        )}
      </Card>

      {openModal && (
        <Modal close={() => setOpenModal(false)}>
          {projects.map((project) => (
            <ModalCard
              key={project._id}
              bgColor={project.background_color}
              lightText={project.light_text}
            >
              <div className='flex flex-col items-center'>
                <div className='mb-6 flex gap-4'>
                  {project.images.map((image) => {
                    const url = urlFor(image).url()
                    return (
                      <Image
                        key={url}
                        src={url}
                        alt=''
                        width={164}
                        height={352}
                        className='rounded-xl'
                      />
                    )
                  })}
                </div>

                <div className='mb-2 flex w-full justify-between'>
                  <h3 className='text-xl font-bold'>{project.title}</h3>
                  <div className='flex gap-4'>
                    {project.links.live_deployment && (
                      <Link href={project.links.live_deployment}>
                        Live version
                      </Link>
                    )}
                    {project.links.repository && (
                      <Link href={project.links.repository}>Source Code</Link>
                    )}
                  </div>
                </div>
                <PortableText value={project.description} />
                <ul className='mt-4 flex w-full flex-wrap gap-2'>
                  {project.tech_stack.map((tech) => (
                    <li key={tech.label}>
                      <a
                        href={tech.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-lg bg-slate-900 px-2.5 py-1 text-xs text-slate-50 transition hover:bg-slate-950'
                      >
                        {tech.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ModalCard>
          ))}
        </Modal>
      )}
    </>
  )
}

const Link = ({ href, children }: { href: string; children: string }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-1'
    >
      <ArrowUpRight className='size-6' />
      {children}
    </a>
  )
}
