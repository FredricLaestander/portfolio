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
      className={`modal flex w-full flex-col gap-4 rounded-3xl px-4 py-8 md:w-3xl md:px-20 md:py-8 ${lightText ? 'text-slate-50' : 'text-slate-800'}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  )
}
