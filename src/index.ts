import * as net from 'net'

// brew install telnet
// telnet localhost 3333
// ctrl-], close
//

const port = process.env.PORT || 3333
const host = process.env.HOST || '0.0.0.0'

//const BACKLOG = 100

const server = net.createServer()

server.on('connection', (socket: net.Socket) => {
  const remote = `${socket.remoteAddress}:${socket.remotePort}`
  console.log(`New connection from ${remote}`)
  socket.on('close', function (data) {
    console.log(`Socket closed ${remote}`)
  })

  socket.write('Echo server\r\n')
  socket.pipe(socket)
})

// server.on('error', e => {
//   if (e.code === 'EADDRINUSE') {
//     console.log('Address in use, retrying...')
//     setTimeout(() => {
//       server.close()
//       server.listen({host, port})
//     }, 1000)
//   }
// })

server.listen({ host, port }, () => {
  const addr = server.address() as net.AddressInfo
  if (addr) {
    console.log(`Echo server listening on ${addr.address}:${addr.port}`)
  }
})
