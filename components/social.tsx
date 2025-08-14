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
    <a href={href} className='flex items-center gap-1 text-sm font-bold'>
      <Icon className='size-7' />
      {children}
    </a>
  )
}
