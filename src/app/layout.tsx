import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { ChatList } from '@/components/ChatList'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gado Chat',
  description: 'A chat app for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      <head><meta name="viewport" content="initial-scale=1, width=device-width" />
</head>
      <body>
        <Header />
        <div className='flex flex-row w-full'>
          <div className="items-center flex-auto w-3/5">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
