// import { hashPassword } from '@/lib/auth'
import { db } from '@/lib/db'
import { hashPassword } from '@/lib/auth'

async function main() {
  const user = await db.user.upsert({
    where: { email: 'saeedkargosha@gmail.com' },
    update: {},
    create: {
      email: 'saeedkargosha@gmail.com',
      firstname: 'Saeed',
      lastName: 'Kargosha',
      password: await hashPassword('password'),
      phone: '+98 9360781422',
      summary: 'This is Saeed',
    },
  })
  console.log({ user })
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
