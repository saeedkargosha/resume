import { IconProps, createIcon } from './IconBase'

export function MenuIcon(props: IconProps) {
  return createIcon(
    <path
      d='M4 6H20M4 12H20M4 18H20'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />,

    props
  )
}
