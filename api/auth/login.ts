import express from 'express'

const login = express.Router({
  mergeParams: true
})

login.post('', async function (req, res, next) {
  res.end('hello!')
})

export default login
