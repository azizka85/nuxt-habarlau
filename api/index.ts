import express from 'express'
import bodyParser from 'body-parser'
import login from './auth/login'
import user from './auth/user'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/auth/login', login)
app.use('/auth/user', user)

export default app
