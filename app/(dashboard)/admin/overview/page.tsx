import OverviewCard from '@/components/Overview'
import { getUserFromCookie } from '@/lib/auth'
import { db } from '@/lib/db'
import delay from '@/lib/delay'
import { cookies } from 'next/headers'

const getData = async () => {
  await delay(2000)
  const user = await getUserFromCookie(cookies())
  const _user = await db.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      experiences: true,
    },
  })

  return { user: _user }
}

export default async function OverviewPage() {
  const { user } = await getData()
  return (
    <div>
      <div>{'Overview:'}</div>
      <OverviewCard user={user} />
    </div>
  )
}
