import clsx from 'clsx'
import { ReactNode } from 'react'

export function NavItem({
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
        'h-20 flex flex-row gap-5 w-full items-center pl-11 rounded-s-full mb-1 text-neutral-500 relative',
        {
          'bg-neutral-100': isActive,
          '!text-accent-600': isActive,
        }
      )}>
      <div className={clsx({ 'nav-item__active-up': isActive })} />
      <span
        className={clsx('text-neutral-400', { '!text-accent-600': isActive })}>
        {icon}
      </span>
      <span className='text-xl'>{name}</span>
      <div className={clsx({ 'nav-item__active-down': isActive })} />
    </div>
  )
}
