import { ReactNode } from 'react'

export const ModalCard = ({
  children,
  bgColor = 'white',
  lightText = false,
}: {
  children: ReactNode
  bgColor?: string
  lightText?: boolean
}) => {
  return (
    <div
      onClick={(event) => {
        event.stopPropagation()
      }}
      className={`modal flex w-3xl flex-col gap-4 rounded-3xl px-20 py-8 ${lightText ? 'text-slate-50' : 'text-slate-800'}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  )
}
