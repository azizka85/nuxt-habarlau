import express from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import User from '../../types/User'

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
  
    const userData = await prisma.user.findFirst({
      where: {email: decodedToken.email}
    })
  
    if(userData) {
      const user: User = {
        ...userData
      }

      res.status(200).json({
        user
      })
    } else {
      throw new Error("User not found!")
    }
  } catch(err) {
    next(err)
  }
})

user.get('/list', async function (req, res, next) {
  try {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
  } catch(err) {
    next(err)
  }
})

user.post('/create', async function (req, res, next) {
  const { name, email, password, photo } = req.body

  try {
    const user = await prisma.user.create({
      data: {email, name, password, photo}
    })

    res.status(201).json(user)
  } catch(err) {
    next(err)
  }
})

export default user
