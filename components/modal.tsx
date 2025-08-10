import { ReactNode } from 'react'

export const Modal = ({
  centered = false,
  children,
  close,
}: {
  centered?: boolean
  children: ReactNode
  close: () => void
}) => {
  return (
    <div
      onClick={close}
      className={`fixed inset-0 z-20 flex flex-col items-center gap-4 overflow-y-scroll rounded-3xl bg-slate-400/20 pt-20 pb-8 backdrop-blur-lg ${centered && 'justify-center'}`}
    >
      {children}
    </div>
  )
}
