'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = {
  '/': {
    name: 'Summary',
  },
  '/experience': {
    name: 'Experience',
  },
  '/skill': {
    name: 'Skill',
  },
  '/education': {
    name: 'Education',
  },
  '/contact': {
    name: 'Contact Us',
  },
}

function NavItem({ name, isActive }: { name: string; isActive: boolean }) {
  return (
    <div
      className={clsx(
        'h-20 flex flex-row gap-5 w-full items-center pl-11 rounded-s-full mb-1 text-neutral-400 relative',
        {
          'bg-neutral-100': isActive,
          'text-orange-500': isActive,
        }
      )}>
      <div className={clsx({ 'nav-item__active-up': isActive })} />
      <svg
        width='24'
        height='22'
        viewBox='0 0 24 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.66667 0.5C1.19583 0.5 0 1.84531 0 3.5V18.5C0 20.1547 1.19583 21.5 2.66667 21.5H21.3333C22.8042 21.5 24 20.1547 24 18.5V3.5C24 1.84531 22.8042 0.5 21.3333 0.5H2.66667ZM6 12.5H8.66667C10.5083 12.5 12 14.1781 12 16.25C12 16.6625 11.7 17 11.3333 17H3.33333C2.96667 17 2.66667 16.6625 2.66667 16.25C2.66667 14.1781 4.15833 12.5 6 12.5ZM4.66667 8C4.66667 7.20435 4.94762 6.44129 5.44772 5.87868C5.94781 5.31607 6.62609 5 7.33333 5C8.04058 5 8.71885 5.31607 9.21895 5.87868C9.71905 6.44129 10 7.20435 10 8C10 8.79565 9.71905 9.55871 9.21895 10.1213C8.71885 10.6839 8.04058 11 7.33333 11C6.62609 11 5.94781 10.6839 5.44772 10.1213C4.94762 9.55871 4.66667 8.79565 4.66667 8ZM15.3333 6.5H20.6667C21.0333 6.5 21.3333 6.8375 21.3333 7.25C21.3333 7.6625 21.0333 8 20.6667 8H15.3333C14.9667 8 14.6667 7.6625 14.6667 7.25C14.6667 6.8375 14.9667 6.5 15.3333 6.5ZM15.3333 9.5H20.6667C21.0333 9.5 21.3333 9.8375 21.3333 10.25C21.3333 10.6625 21.0333 11 20.6667 11H15.3333C14.9667 11 14.6667 10.6625 14.6667 10.25C14.6667 9.8375 14.9667 9.5 15.3333 9.5ZM15.3333 12.5H20.6667C21.0333 12.5 21.3333 12.8375 21.3333 13.25C21.3333 13.6625 21.0333 14 20.6667 14H15.3333C14.9667 14 14.6667 13.6625 14.6667 13.25C14.6667 12.8375 14.9667 12.5 15.3333 12.5Z'
          fill='currentColor'
        />
      </svg>
      <span className='text-xl'>{name}</span>
      <div className={clsx({ 'nav-item__active-down': isActive })} />
    </div>
  )
}

export default function Navbar() {
  let pathname = usePathname() || '/'
  return (
    <aside className='flex flex-col md:w-[356px] md:flex-shrink-0 py-11 h-screen bg-neutral-50'>
      <div className='flex flex-col items-center mb-8'>
        <div className='w-28 h-28 rounded-full bg-red-500 mb-3'></div>
        <h1 className='text-neutral-800 text-xl font-semibold mb-1'>
          {'Saeed Kargosha'}
        </h1>
        <span className='text-neutral-500 text-base font-medium'>
          {'Senior Front End Developer'}
        </span>
      </div>
      <nav className='flex flex-col mt-14 w-full pl-16'>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname
          return (
            <Link key={path} href={path}>
              <NavItem name={name} isActive={isActive} />
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
