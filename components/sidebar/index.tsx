'use client'
import { NavItem } from './nav-item'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import avatar from '@/assets/avatar.jpg'
import {
  NewspapperIcon,
  ClipboardIcon,
  PhoneMissedCallIcon,
  AcademicCapIcon,
  ArchiveIcon,
} from '../icons'

export const navItems = {
  '/': {
    name: 'Summary',
    icon: NewspapperIcon,
  },
  '/experience': {
    name: 'Experience',
    icon: ClipboardIcon,
  },
  '/skill': {
    name: 'Skill',
    icon: ArchiveIcon,
  },
  '/education': {
    name: 'Education',
    icon: AcademicCapIcon,
  },
  '/contact': {
    name: 'Contact Us',
    icon: PhoneMissedCallIcon,
  },
}

export default function Navbar() {
  let pathname = usePathname() || '/'
  return (
    <aside className='hidden xl:flex flex-col md:w-[356px] md:flex-shrink-0 py-11 h-screen bg-neutral-50'>
      <div className='flex flex-col items-center mb-8'>
        <div className='w-28 h-28 rounded-full mb-3 overflow-hidden'>
          <Image
            alt={'Saeed Kargosha'}
            src={avatar}
            className='rounded-full'
            placeholder='blur'
            width={112}
            height={112}
            priority
          />
        </div>
        <h1 className='text-neutral-800 text-xl font-semibold mb-1'>
          {'Saeed Kargosha'}
        </h1>
        <span className='text-neutral-500 text-base font-medium'>
          {'Senior Front End Developer'}
        </span>
      </div>
      <nav className='flex flex-col mt-14 w-full'>
        <ul className='list-none'>
          {Object.entries(navItems).map(([path, { name, icon }]) => {
            const isActive = path === pathname
            return (
              <li key={path}>
                <Link href={path}>
                  <NavItem name={name} isActive={isActive} icon={icon} />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
