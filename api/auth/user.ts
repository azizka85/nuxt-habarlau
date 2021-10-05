import express from 'express'
import { PrismaClient } from '@prisma/client'

const user = express.Router({
  mergeParams: true
})

user.get('', async function (req, res, next) {
  const prisma = new PrismaClient()

  prisma.user.create({
    data: {
      name: 'Aziz',
      email: 'aziz.kudaikulov@gmail.com',
      password: 'lock'
    }
  })

  const allUsers = await prisma.user.findMany()

  res.end(JSON.stringify(allUsers))
})

export default user
