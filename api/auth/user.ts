import express from 'express'
import { PrismaClient } from '@prisma/client'

const user = express.Router({
  mergeParams: true
})

const prisma = new PrismaClient()

user.get('', async function (req, res, next) {

  prisma.user.update({
    where: {id: 1},
    data: {email: 'nuna@nu.ny'}
  })

  const count = await prisma.user.count()
  const allUsers = await prisma.user.findMany()

  res.end(JSON.stringify({
    allUsers,
    count
  }))
})

export default user
