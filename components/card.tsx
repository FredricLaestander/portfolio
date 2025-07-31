'use client'

import Image from 'next/image'
import { Modal } from './modal'
import { useState } from 'react'
import { About } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'

export const Card = ({ title, about }: { title: string; about: About }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true)
        }}
        className='flex h-60 w-48 flex-col gap-4 rounded-lg border-2 border-slate-200 bg-slate-100 p-8'
      >
        <div className='bg-skyblue size-32 rounded-full'>
          {about.images.map((image) => {
            const url = urlFor(image).url()
            return <Image key={url} src={url} alt='' width={45} height={80} />
          })}
        </div>

        <p className='text-lg font-bold text-slate-700'>{title}</p>
      </button>

      {openModal && <Modal about={about} />}
    </>
  )
}
