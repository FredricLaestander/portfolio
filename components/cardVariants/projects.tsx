'use client'

import { useState } from 'react'
import { Card } from '../card'
import { Project } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import { Modal } from '../modal'
import { ModalCard } from '../modalCard'
import { ArrowUpRight } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import gradient from '../../public/gradient.jpg'

export const Projects = ({ projects }: { projects: Project[] }) => {
  const [openModal, setOpenModal] = useState(false)
  const images = projects.map((project) => project.images[1])
  const card =
    'row-1 aspect-[4/7] rounded-md border-2 border-slate-200 object-cover object-top'

  return (
    <>
      <Card
        title='Works'
        onClick={() => {
          setOpenModal(true)
        }}
        grid
      >
        {images.slice(0, 3).map((image, index) => {
          const url = urlFor(image).width(128).quality(100).url()
          return (
            <Image
              key={url}
              src={url}
              alt={image.alt}
              width={image.metadata.dimensions.width}
              height={image.metadata.dimensions.height}
              className={`${card} ${index === 0 && '-rotate-6'} ${index === 1 && 'z-10 mb-2'} ${index === 2 && 'rotate-6'}`}
              style={{ gridColumn: `${index + 1} / ${index + 3}` }}
            />
          )
        })}
        {images.length < 3 && (
          <Image
            src={gradient}
            alt='a blue swirl'
            className={`${card} rotate-6`}
            style={{ gridColumn: '3 / 5' }}
          />
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
                <div className='mb-6 flex w-full justify-center gap-2 md:gap-4'>
                  {project.images.map((image) => {
                    const url = urlFor(image).url()
                    return (
                      <Image
                        key={url}
                        src={url}
                        alt={image.alt}
                        width={image.metadata.dimensions.width}
                        height={image.metadata.dimensions.height}
                        className='w-24 rounded-xl md:w-40'
                      />
                    )
                  })}
                </div>

                <div className='mb-2 flex w-full flex-col justify-between gap-1 md:flex-row md:gap-0'>
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
      <ArrowUpRight className='text-skyblue size-6' />
      {children}
    </a>
  )
}
