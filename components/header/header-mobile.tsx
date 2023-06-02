'use client'

import { usePathname } from 'next/navigation'
import {
  CloseIcon,
  EmailIcon,
  EmailOutlineIcon,
  LightBulbIcon,
  LocationIcon,
  LocationOutlineIcon,
  MenuIcon,
  PhoneMissedCallIcon,
  PhoneOutlineIcon,
} from '../icons'
import { SocialItem } from './social-item'
import { SOCIALS } from './socials'
import { ROUTES } from '../navigation-bar/routes'
import Image from 'next/image'
import avatar from '../../app/avatar.jpg'
import { navItems } from '../sidebar'
import Link from 'next/link'
import { NavItem } from '../sidebar/nav-item'
import { useReducer } from 'react'
import clsx from 'clsx'

export default function HeaderMobile() {
  const [isOpen, toggle] = useReducer(prev => !prev, false)
  const pathname = usePathname() || '/'
  return (
    <div className='xl:hidden'>
      <header className='flex w-full justify-between px-5 pt-8 items-center relative'>
        <MenuIcon onClick={toggle} className='cursor-pointer' />
        <span className='text-accent-500 text-base font-medium absolute left-[50%] -translate-x-[50%]'>
          {ROUTES[pathname].name}
        </span>
        <div className='flex justify-between gap-1'>
          <SocialItem social={SOCIALS.github} />
          <SocialItem social={SOCIALS.dribble} />
          <SocialItem social={SOCIALS.linkdin} />
        </div>
      </header>
      <div className={clsx('hidden relative', { '!block': isOpen })}>
        <div className='fixed inset-0 bg-neutral-100'></div>
        <nav
          className={clsx(
            'fixed top-0 -left-[100%] transition-[left] delay-500 bottom-0 flex flex-col w-9/12 max-w-sm py-6 px-5 bg-neutral-50 overflow-y-auto shadow-xl hide-scrollbar',
            {
              '!left-0': isOpen,
            }
          )}>
          <div className='flex flex-col items-center w-fit'>
            <div className='w-20 h-20 text-center rounded-full mb-3 overflow-hidden'>
              <Image
                alt={'Saeed Kargosha'}
                src={avatar}
                className='rounded-full'
                placeholder='blur'
                width={80}
                height={80}
                priority
              />
            </div>
            <h1 className=' text-neutral-800 text-base font-medium mb-1'>
              {'Saeed Kargosha'}
            </h1>
            <span className='text-neutral-500 text-xs font-medium '>
              {'Senior Front End Developer'}
            </span>
          </div>
          <ul className='list-none mt-11 space-y-7'>
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
          <div className='bg-neutral-100 h-[2px] rounded-[2px] my-6' />
          <div className='flex gap-4 mb-8'>
            <SocialItem social={SOCIALS.github} />
            <SocialItem social={SOCIALS.dribble} />
            <SocialItem social={SOCIALS.linkdin} />
          </div>
          <div className='space-y-4 text-neutral-400'>
            <div className='flex items-start space-x-3'>
              <PhoneOutlineIcon />
              <p className='text-sm text-neutral-900 font-medium'>
                {'+98 936 078 1422'}
              </p>
            </div>
            <div className='flex items-start space-x-3'>
              <EmailOutlineIcon />
              <p className='text-sm text-neutral-900 font-medium'>
                {'saeedkargosha@gmail.com'}
              </p>
            </div>
            <div className='flex items-start space-x-3'>
              <LocationOutlineIcon />
              <p className='text-sm text-neutral-900 font-medium'>
                {'Tehran - Iran'}
              </p>
            </div>
          </div>
        </nav>
        <div className='space-y-4 absolute right-0 flex flex-col items-center w-3/12'>
          <div
            className='bg-neutral-900 flex justify-center items-center rounded-full h-9 w-9 text-neutral-50'
            onClick={toggle}>
            <CloseIcon size={20} />
          </div>
          <div className='bg-neutral-200 flex justify-center items-center rounded-full h-9 w-9 text-accent-600'>
            <LightBulbIcon />
          </div>
          <span className='text-neutral-400 text-xs font-normal'>
            {'Dark Mode'}
          </span>
        </div>
      </div>
    </div>
  )
}
