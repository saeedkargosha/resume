import clsx from 'clsx'
import { FunctionComponent } from 'react'

export function NavItem({
  name,
  isActive,
  icon,
}: {
  name: string
  isActive: boolean
  icon: FunctionComponent
}) {
  const Icon = icon as any
  return (
    <div
      className={clsx(
        'lg:h-20 flex flex-row gap-3 lg:gap-5 w-full items-center lg:pl-11 rounded-s-full mb-1 text-neutral-500 relative',
        {
          'lg:bg-neutral-100': isActive,
        }
      )}>
      <div
        className={clsx('hidden lg:block', { 'nav-item__active-up': isActive })}
      />
      <span
        className={clsx('text-neutral-400 flex justify-center items-center', {
          '!text-accent-600': isActive,
        })}>
        <Icon size={isActive ? 36 : 28} />
      </span>
      <span
        className={clsx('text-base text-neutral-400 lg:text-xl', {
          '!text-accent-600': isActive,
        })}>
        {name}
      </span>
      <div
        className={clsx('hidden lg:block', {
          'nav-item__active-down': isActive,
        })}
      />
    </div>
  )
}
