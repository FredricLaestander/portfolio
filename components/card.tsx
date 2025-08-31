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
      className='card-transition flex cursor-pointer flex-col items-center justify-between rounded-lg border-2 border-slate-200 bg-slate-100 p-4 md:min-w-0 md:flex-[1_1_0] md:p-8 md:hover:basis-[18%] dark:border-slate-700 dark:bg-slate-800 md:hover:[&>div]:!size-32 md:hover:[&>div]:!saturate-100'
    >
      <div
        className={`bg-skyblue card-circle-transition size-32 items-center justify-center rounded-full md:group-hover:size-28 md:group-hover:saturate-75 ${grid ? 'grid grid-cols-4 p-5' : 'flex'}`}
      >
        {children}
      </div>
      <h2 className='text-lg font-bold text-slate-700 dark:text-slate-300'>
        {title}
      </h2>
    </button>
  )
}
