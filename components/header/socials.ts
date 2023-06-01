import { FunctionComponent } from 'react'
import {
  DribbbleIcon,
  EmailIcon,
  GithubIcon,
  LinkdinIcon,
  LocationIcon,
  PhoneIcon,
} from '../icons'

export type Social = {
  name: string
  link: string
  icon: FunctionComponent
}

type SocialName =
  | 'dribble'
  | 'linkdin'
  | 'github'
  | 'email'
  | 'phone'
  | 'location'

export const SOCIALS: Record<SocialName, Social> = {
  dribble: {
    link: 'https://dribbble.com/Sa0ee1d',
    name: 'Sa0ee1d',
    icon: DribbbleIcon,
  },
  linkdin: {
    link: 'https://www.linkedin.com/in/saeedkargosha',
    name: 'saeedkargosha',
    icon: LinkdinIcon,
  },
  github: {
    link: 'https://github.com/saeedkargosha',
    name: 'saeedkargosha',
    icon: GithubIcon,
  },
  email: {
    link: 'mailto:saeedkargosha@gmail.com',
    name: 'saeedkargosha@gmail.com',
    icon: EmailIcon,
  },
  phone: {
    link: '',
    name: '(+98) 936 078 1422',
    icon: PhoneIcon,
  },
  location: {
    link: '',
    name: 'Iran (open to relocate)',
    icon: LocationIcon,
  },
}
