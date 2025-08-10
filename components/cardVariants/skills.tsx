'use client'

import { About } from '@/sanity/types'
import { Card } from '../card'
import { CSSProperties, useState } from 'react'
import Image from 'next/image'
import smiley from '@/public/smiley.svg'
import { Modal } from '../modal'
import { Icon } from '../icon'
import { ModalCard } from '../modalCard'

export const Skills = ({ about }: { about: About }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Card title='Skills' onClick={() => setOpenModal(true)}>
        <Image src={smiley} alt='a drawn thumb figure' className='w-20' />
      </Card>

      {openModal && (
        <Modal centered close={() => setOpenModal(false)}>
          <ModalCard>
            <h3 className='w-full text-lg'>Skills</h3>
            <ul className='flex flex-wrap gap-6'>
              {about.skills.map((skill) => {
                return (
                  <li
                    key={skill.label}
                    className='transition hover:text-[var(--logo-color)]'
                    style={{ '--logo-color': skill.color } as CSSProperties}
                  >
                    <a href={skill.url} className='flex gap-1'>
                      <Icon name={skill.icon} />
                      {skill.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </ModalCard>
        </Modal>
      )}
    </>
  )
}
