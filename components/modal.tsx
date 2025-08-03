import { ReactNode } from 'react'

export const Modal = ({
  children,
  close,
}: {
  children: ReactNode
  close: () => void
}) => {
  return (
    <>
      <div
        onClick={close}
        className='fixed inset-0 bg-white/20 backdrop-blur-lg'
      ></div>

      <div className='absolute top-1/2 left-1/2 z-10 flex w-3xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-3xl bg-white px-20 py-8'>
        {children}
      </div>
    </>
  )
}
