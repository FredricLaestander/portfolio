import { ComponentType, ReactNode } from 'react'

export const Social = ({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: ComponentType<{ className?: string }>
  children: ReactNode
}) => {
  return (
    <a
      href={href}
      className='flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-bold transition hover:bg-slate-200'
    >
      <Icon className='size-6' />
      {children}
    </a>
  )
}
