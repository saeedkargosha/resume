'use client'

import { SocialItem } from './social-item'
import { SOCIALS } from './socials'

export default function HeaderDesktop() {
  return (
    <header className='hidden xl:flex flex-row justify-between gap-7 mb-8'>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem social={SOCIALS.dribble} />
        <SocialItem social={SOCIALS.linkdin} />
      </div>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem social={SOCIALS.github} />
        <SocialItem social={SOCIALS.email} />
      </div>
      <div className='bg-neutral-50 rounded-2xl h-40 flex-1 p-6 flex flex-col gap-5'>
        <SocialItem social={SOCIALS.phone} />
        <SocialItem social={SOCIALS.location} />
      </div>
    </header>
  )
}
