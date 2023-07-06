import '@/styles/global.css'
import { Lexend } from 'next/font/google'
import clsx from 'clsx'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Saeed Kargosha',
  description: 'Developer, writer, and creator.',
}

export default function DashboardLayout({
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
        {children}
        <div id='modal'></div>
      </body>
    </html>
  )
}
