import { IconProps, createIcon } from './IconBase'

export function CloseIcon(props: IconProps) {
  return createIcon(
    <path
      d='M6 18L18 6M6 6L18 18'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />,

    props
  )
}
