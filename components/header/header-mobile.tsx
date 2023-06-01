'use client'

import { usePathname } from 'next/navigation'
import { MenuIcon } from '../icons'
import { SocialItem } from './social-item'
import { SOCIALS } from './socials'
import { ROUTES } from '../navigation-bar/routes'

export default function HeaderMobile() {
  const pathname = usePathname() || '/'

  return (
    <header className='flex xl:hidden w-full justify-between px-5 pt-8 items-center relative'>
      <MenuIcon />
      <span className='text-accent-500 text-base font-medium absolute left-[50%] -translate-x-[50%]'>
        {ROUTES[pathname].name}
      </span>
      <div className='flex justify-between gap-1'>
        <SocialItem social={SOCIALS.github} />
        <SocialItem social={SOCIALS.dribble} />
        <SocialItem social={SOCIALS.linkdin} />
      </div>
    </header>
  )
}
