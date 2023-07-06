import { GreetingsSkeleton } from '@/components/Skeleton'
import NewExperice from '@/components/new-experince'
import { getUserFromCookie } from '@/lib/auth'
import delay from '@/lib/delay'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

const getDate = async () => {
  await delay(4000)
  const user = await getUserFromCookie(cookies())
  return user
}

const UseTitle = async () => {
  const user = await getDate()

  return <div>{`email: ${user?.email}`}</div>
}

export default async function Admin() {
  const user = await getDate()
  return (
    <div>
      <Suspense fallback={<GreetingsSkeleton />}>
        <UseTitle />
      </Suspense>
      <div>{`Admin Panel is belong to ${user?.firstname}`}</div>
      <NewExperice />
    </div>
  )
}
