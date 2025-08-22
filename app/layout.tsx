import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fredric Laestander | Fullstack Web Developer',
  description:
    'Fredric Laestander is a developer who creates fullstack open source projects and modern web applications, combining clean code with responsive, engaging design.',
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} w-full bg-slate-50 font-medium text-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
