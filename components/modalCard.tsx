import { ReactNode } from 'react'

export const ModalCard = ({
  children,
  bgColor,
  lightText,
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
      className={`modal flex w-full flex-col gap-4 rounded-3xl bg-white px-4 py-8 text-slate-800 md:w-3xl md:px-20 md:py-8 dark:bg-slate-950 dark:text-slate-50`}
      style={{
        backgroundColor: bgColor,
        color:
          lightText === undefined
            ? ''
            : lightText
              ? 'var(--color-slate-50)'
              : 'var(--color-slate-800)',
      }}
    >
      {children}
    </div>
  )
}
