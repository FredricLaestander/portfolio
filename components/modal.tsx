import { X } from 'lucide-react'
import { ReactNode } from 'react'

export const Modal = ({
  classname,
  children,
  close,
}: {
  classname?: string
  children: ReactNode
  close: () => void
}) => {
  return (
    <>
      <button
        onClick={close}
        className='fixed top-6 right-6 z-40 cursor-pointer rounded-full bg-slate-100 p-2 hover:bg-white'
      >
        <X className='size-6' />
      </button>

      <div
        onClick={close}
        className={`fixed inset-0 z-30 flex flex-col items-center gap-4 overflow-y-scroll bg-slate-400/20 p-4 backdrop-blur-lg md:pt-20 md:pb-8 ${classname}`}
      >
        {children}
      </div>
    </>
  )
}
