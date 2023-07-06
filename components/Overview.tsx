import { Prisma } from '@prisma/client'
import { FC } from 'react'

const userWithExperince = Prisma.validator<Prisma.UserArgs>()({
  include: { experiences: true },
})

type UserWithExperince = Prisma.UserGetPayload<typeof userWithExperince>

const formatDate = date =>
  new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

const OverviewCard: FC<{ user: UserWithExperince }> = ({ user }) => {
  const remoteCount = user.experiences?.filter(t => t.type === 'REMOTE').length

  return (
    <div>
      <div>
        <span className='text-sm text-gray-300'>
          {formatDate(user.createdAt)}
        </span>
      </div>
      <div className='mb-6'>
        <span className='text-3xl text-gray-600'>{user.firstname}</span>
      </div>
      <div className='mb-2'>
        <span className='text-gray-400'>{remoteCount} remote</span>
      </div>
    </div>
  )
}

export default OverviewCard
