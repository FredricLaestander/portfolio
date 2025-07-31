import { About } from '@/sanity/types'
import { PortableText, PortableTextBlock } from '@portabletext/react'

export const Modal = ({ about }: { about: About }) => {
  return (
    <div className='flex w-3xl flex-col gap-4 rounded-3xl px-20 pt-8'>
      <h3 className='w-full bg-slate-800 text-lg'>About</h3>
      <PortableText value={about.introduction} />
    </div>
  )
}
