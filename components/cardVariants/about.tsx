'use client'

import { PortableText } from 'next-sanity'
import { Card } from '../card'
import { Modal } from '../modal'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { About as TAbout } from '@/sanity/types'
import { useState } from 'react'
import { ModalCard } from '../modalCard'

export const About = ({ about }: { about: TAbout }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Card title='about' onClick={() => setOpenModal(true)}>
        {about.images.slice(0, 3).map((image) => {
          const url = urlFor(image).url()
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
      </Card>

      {openModal && (
        <Modal close={() => setOpenModal(false)}>
          <ModalCard>
            <h3 className='w-full text-lg'>About</h3>

            <PortableText value={about.introduction} />
            <div className='flex w-full gap-2 overflow-hidden rounded-sm'>
              {about.images.map((image) => {
                const url = urlFor(image).url()
                return (
                  <Image
                    key={url}
                    src={url}
                    alt=''
                    width={160}
                    height={256}
                    className='object-cover'
                  />
                )
              })}
            </div>
            <PortableText value={about.description} />
          </ModalCard>
        </Modal>
      )}
    </>
  )
}
