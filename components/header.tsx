import { ReactNode } from 'react'
import {
  DribbbleIcon,
  EmailIcon,
  GithubIcon,
  LinkdinIcon,
  LocationIcon,
  PhoneIcon,
} from './icons'

type SocialType = {
  name: string
  link: string
  icon: ReactNode
}

const socials = {
  dribble: {
    link: 'https://dribbble.com/Sa0ee1d',
    name: 'Sa0ee1d',
    icon: <DribbbleIcon />,
  },
  linkdin: {
    link: 'https://www.linkedin.com/in/saeedkargosha',
    name: 'saeedkargosha',
    icon: <LinkdinIcon />,
  },
  github: {
    link: 'https://github.com/saeedkargosha',
    name: 'saeedkargosha',
    icon: <GithubIcon />,
  },
  email: {
    link: 'mailto:saeedkargosha@gmail.com',
    name: 'saeedkargosha@gmail.com',
    icon: <EmailIcon />,
  },
  phone: {
    link: '',
    name: '(+98) 936 078 1422',
    icon: <PhoneIcon />,
  },
  location: {
    link: '',
    name: 'Iran (open to relocate)',
    icon: <LocationIcon />,
  },
}

function SocialItem({ data }: { data: SocialType }) {
  return (
    <a
      className='flex flex-row gap-3 items-center'
      href={data.link}
      target='_blank'>
      <i className='bg-neutral-200 rounded-full w-11 h-11 flex justify-center items-center'>
        {data.icon}
      </i>
      <span className='text-neutral-500 text-base'>{data.name}</span>
    </a>
  )
}

export default function Header() {
  return (
    <header className='flex flex-row justify-between gap-7 mb-8'>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem data={socials.dribble} />
        <SocialItem data={socials.linkdin} />
      </div>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem data={socials.github} />
        <SocialItem data={socials.email} />
      </div>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem data={socials.phone} />
        <SocialItem data={socials.location} />
      </div>
    </header>
  )
}
