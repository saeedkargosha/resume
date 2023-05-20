import './global.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Sidebar from '../components/sidebar'

const inter = Inter({ subsets: ['latin'] })

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
      className={clsx('text-black bg-neutral-100', inter.className)}>
      <body className='flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar />
        <main className='flex flex-col flex-auto px-9 py-11'>
          <header className='flex flex-row justify-between gap-7 mb-8'>
            <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
            </div>
            <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
            </div>
            <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <div className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'></div>
                <span className='text-neutral-500 text-base'>
                  {'@saeedkargosha'}
                </span>
              </div>
            </div>
          </header>
          <section className='flex-grow flex flex-col overflow-hidden overflow-y-auto bar'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
