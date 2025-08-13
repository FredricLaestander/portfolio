'use client'

import { PortableText } from 'next-sanity'
import { Card } from '../card'
import { Modal } from '../modal'
import { urlFor } from '@/sanity/lib/image'
import { About as TAbout } from '@/sanity/types'
import { useState } from 'react'
import { ModalCard } from '../modalCard'
import Image from 'next/image'
import gradient from '../../public/gradient.jpg'

export const About = ({ about }: { about: TAbout }) => {
  const [openModal, setOpenModal] = useState(false)
  const card =
    'row-1 aspect-[4/7] rounded-md border-2 border-slate-200 object-cover object-top'

  return (
    <>
      <Card title='About' onClick={() => setOpenModal(true)} grid>
        {about.images.slice(0, 3).map((image, index) => {
          const url = urlFor(image).width(256).quality(100).url()
          return (
            <Image
              key={url}
              src={url}
              alt=''
              width={image.metadata.dimensions.width}
              height={image.metadata.dimensions.height}
              className={`${card} ${index === 0 && '-rotate-6'} ${index === 1 && 'z-10 mb-2'} ${index === 2 && 'rotate-6'}`}
              style={{ gridColumn: `${index + 1} / ${index + 3}` }}
            />
          )
        })}
        {about.images.length < 3 && (
          <Image
            src={gradient}
            alt='a blue swirl'
            className={`${card} rotate-6`}
            style={{ gridColumn: '3 / 5' }}
          />
        )}
      </Card>

      {openModal && (
        <Modal centered close={() => setOpenModal(false)}>
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
