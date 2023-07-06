import { FunctionComponent } from 'react'
import {
  AcademicCapIcon,
  ArchiveIcon,
  ClipboardIcon,
  NewspapperIcon,
  PhoneMissedCallIcon,
} from '../icons'

export const ROUTES: Record<string, { name: string; icon: FunctionComponent }> =
  {
    '/': {
      name: 'Summary',
      icon: NewspapperIcon, // refactor with name
    },
    '/experience': {
      name: 'Experience',
      icon: ClipboardIcon,
    },
    '/skill': {
      name: 'Skill',
      icon: ArchiveIcon,
    },
    '/education': {
      name: 'Education',
      icon: AcademicCapIcon,
    },
    '/contact': {
      name: 'Contact me',
      icon: PhoneMissedCallIcon,
    },
  }
