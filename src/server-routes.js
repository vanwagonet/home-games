import { Router } from 'express'
import bodyParser from 'body-parser'
import session from 'cookie-session'
import client from './client-server'
import witchHunt from './witch-hunt/server-routes'

const api = Router()
  .use(bodyParser.json())
  .use(session({ name: 'player' }))
  .use('/witch-hunt', witchHunt)
  .use((err, req, res, next) => {
    let status = err.status || 500
    let message = err.message
    if (err.code === 'ENOENT') {
      status = 404
      message = 'No such game'
    }
    console.error(err.stack)
    res.status(status).send({
      error: { message: message }
    })
  })

export default Router()
	.use('/api/v1', api)
	.use(express.static('dist', {
		index: false,
		redirect: false,
		maxAge: 0
	}))
	.use(client)