import { Social } from './socials'

export function SocialItem({ social }: { social: Social }) {
  const Icon = social.icon
  return (
    <a
      className='flex flex-row gap-3 items-center'
      href={social.link}
      target='_blank'>
      <i className='bg-neutral-200 rounded-full h-7 w-7 lg:w-11 lg:h-11 flex justify-center items-center'>
        <Icon />
      </i>
      <span className='hidden xl:inline-block text-neutral-500 text-base'>
        {social.name}
      </span>
    </a>
  )
}
