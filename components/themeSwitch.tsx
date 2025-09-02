'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      aria-label='Toggle theme'
      onClick={toggleTheme}
      className='flex h-6 w-12 cursor-pointer items-center rounded-full border-2 border-slate-200 bg-slate-100 p-0.5 transition dark:border-slate-800 dark:bg-slate-700'
    >
      <div className='theme-toggle-transition flex size-5 items-center justify-center rounded-full bg-slate-200 dark:translate-x-[100%] dark:bg-slate-800'>
        <Sun className='size-4 rounded-full text-slate-700 dark:hidden dark:text-slate-400' />
        <Moon className='hidden size-4 rounded-full text-slate-400 dark:block dark:text-slate-200' />
      </div>
    </button>
  )
}
