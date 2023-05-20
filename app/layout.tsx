import './global.css'
import { Lexend } from 'next/font/google'
import clsx from 'clsx'
import Sidebar from '../components/sidebar'
import Header from '@/components/header'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Saeed Kargosha',
  description: 'Developer, writer, and creator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={clsx('text-black bg-neutral-100', lexend.className)}>
      <body className='flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar />
        <main className='flex flex-col flex-auto px-9 py-11'>
          <Header />
          <section className='flex-grow flex flex-col overflow-hidden overflow-y-auto bar'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
