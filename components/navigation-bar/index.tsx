'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ROUTES } from './routes'

export default function NavigationBar() {
  let pathname = usePathname() || '/'
  return (
    <nav className='flex xl:hidden justify-center items-center py-5 bg-neutral-50 shadow-xl text-neutral-400'>
      <ul className='flex gap-10 items-center'>
        {Object.entries(ROUTES).map(([path, { icon }]) => {
          const isActive = path === pathname
          const Icon = icon as any
          return (
            <li key={path}>
              <Link href={path}>
                <Icon
                  size={isActive ? 36 : 24}
                  className={clsx({ '!text-accent-600': isActive })}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
