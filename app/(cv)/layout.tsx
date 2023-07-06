import '@/styles/global.css'
import { Lexend } from 'next/font/google'
import clsx from 'clsx'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header/header-desktop'
import NavigationBar from '@/components/navigation-bar'
import HeaderMobile from '@/components/header/header-mobile'

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
      className={clsx(
        'text-black bg-neutral-100 h-full w-full',
        lexend.className
      )}>
      <body className='flex flex-col xl:flex-row h-full w-full overflow-hidden'>
        <HeaderMobile />
        <Sidebar />
        <main className='flex flex-col overflow-hidden mx-5 my-6 xl:mx-9 xl:my-11 flex-grow'>
          <Header />
          <section className='hide-scrollbar p-3 flex-grow flex flex-col overflow-hidden overflow-y-auto bg-gray-50 rounded-2xl'>
            {children}
          </section>
        </main>
        <NavigationBar />
      </body>
    </html>
  )
}
