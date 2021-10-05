import { PrismaClient } from '.prisma/client'
import express from 'express'
import jwt from 'jsonwebtoken'

const login = express.Router({
  mergeParams: true
})

const prisma = new PrismaClient()

login.post('', async function (req, res, next) {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findFirst({
      where: { email }
    })

    if(user && user.password == password) {
      const token = jwt.sign({email: user.email}, 'secret', {
        expiresIn: '30d'
      })

      res.status(200).json({
        token
      })
    } else {
      throw new Error("user not found!")
    }
  } catch(err) {
    next(err)
  }
})

export default login
