import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fredric Laestander | Fullstack Web Developer',
  description:
    'Fredric Laestander is a developer who creates fullstack open source projects and modern web applications, combining clean code with responsive, engaging design.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  appleWebApp: { title: 'Laestander' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={`${outfit.className} w-full bg-slate-50 font-medium text-slate-800 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
