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
    <div
      onClick={close}
      className={`fixed inset-0 z-30 flex flex-col items-center gap-4 overflow-y-scroll bg-slate-400/20 p-6 backdrop-blur-lg md:rounded-3xl md:pt-20 md:pb-8 ${classname}`}
    >
      {children}
    </div>
  )
}
