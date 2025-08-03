'use client'

import { ReactNode } from 'react'

export const Card = ({
  children,
  title,
  onClick,
}: {
  children: ReactNode
  title: string
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className='flex h-60 w-48 cursor-pointer flex-col gap-4 rounded-lg border-2 border-slate-200 bg-slate-100 p-8'
    >
      <div className='bg-skyblue flex size-32 items-center justify-center rounded-full'>
        {children}
      </div>
      <p className='text-lg font-bold text-slate-700'>{title}</p>
    </button>
  )
}
