'use client'

import { ReactNode } from 'react'

export const Card = ({
  children,
  title,
  onClick,
  grid = false,
}: {
  children: ReactNode
  title: string
  onClick: () => void
  grid?: boolean
}) => {
  return (
    <button
      onClick={onClick}
      className='flex min-w-0 flex-[1_1_0] cursor-pointer flex-col items-center justify-between rounded-lg border-2 border-slate-200 bg-slate-100 p-8 transition-all duration-500 ease-in-out hover:basis-[18%] hover:[&>div]:!size-32 hover:[&>div]:!saturate-100'
    >
      <div
        className={`bg-skyblue size-32 items-center justify-center rounded-full transition-all duration-500 ease-in-out group-hover:size-28 group-hover:saturate-75 ${grid ? 'grid grid-cols-4 p-5' : 'flex'}`}
      >
        {children}
      </div>
      <p className='text-lg font-bold text-slate-700'>{title}</p>
    </button>
  )
}
