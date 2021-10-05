import express from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const user = express.Router({
  mergeParams: true
})

const prisma = new PrismaClient()

user.get('', async function (req, res, next) {
  const authHeader = req.header("Authorization")
    
  try {
    if(!authHeader) {
      const error = new Error("Not authenticated.")
      
      throw error
    }
  
    const token = authHeader.split(' ')[1]
  
    let decodedToken = jwt.verify(token, "secret") as {email: string}
  
    if (!decodedToken) {
      const error = new Error("Not authenticated.")
      
      throw error
    }
  
    const user = await prisma.user.findFirst({
      where: {email: decodedToken.email}
    })
  
    if(user) {
      res.status(200).json({
        user: {
          name: user.name,
          email: user.email,
          photo: user.photo
        }
      })
    } else {
      throw new Error("User not found!")
    }
  } catch(err) {
    next(err)
  }
})

export default user
