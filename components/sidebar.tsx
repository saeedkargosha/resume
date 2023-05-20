'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'
import avatar from '../app/avatar.jpg'
import {
  AddressCardIcon,
  BriefcaseIcon,
  ContactIcon,
  GraduationCapIcon,
  SettingIcon,
} from './icons'
import { ReactNode } from 'react'

const navItems = {
  '/': {
    name: 'Summary',
    icon: <AddressCardIcon />,
  },
  '/experience': {
    name: 'Experience',
    icon: <BriefcaseIcon />,
  },
  '/skill': {
    name: 'Skill',
    icon: <SettingIcon />,
  },
  '/education': {
    name: 'Education',
    icon: <GraduationCapIcon />,
  },
  '/contact': {
    name: 'Contact Us',
    icon: <ContactIcon />,
  },
}

function NavItem({
  name,
  isActive,
  icon,
}: {
  name: string
  isActive: boolean
  icon: ReactNode
}) {
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
      {icon}
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
      <nav className='flex flex-col mt-14 w-full pl-16'>
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const isActive = path === pathname
          return (
            <Link key={path} href={path}>
              <NavItem name={name} isActive={isActive} icon={icon} />
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
