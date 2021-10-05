import express from 'express'

const logout = express.Router({
  mergeParams: true
})

logout.post('', async function (req, res, next) {
  res.end('hello!')
})

export default logout
