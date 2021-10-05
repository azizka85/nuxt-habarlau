import express from 'express'
import login from './auth/login'
import logout from './auth/logout'
import user from './auth/user'

const app = express()

app.use('/auth/login', login)
app.use('/auth/logout', logout)
app.use('/auth/user', user)

export default app
