import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })
//   console.log(post)
// }

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Sina',
  //     email: 'sina@gmail.com',
  //     posts: {
  //       create: { title: 'Bekesh kenar' },
  //     },
  //     profile: {
  //       create: { bio: 'maximulus' },
  //     },
  //   },
  // })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })