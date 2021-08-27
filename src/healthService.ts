import express from 'express'
import * as net from 'net'

const app = express()

const port = process.env.HEALTH_PORT || 3334
const host = process.env.HOST || '0.0.0.0'

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
  })
})

const server = app.listen({ host, port }, () => {
  const addr = server.address() as net.AddressInfo
  if (addr) {
    console.log(`Health service listening on http://${addr.address}:${addr.port}`)
  }
})
