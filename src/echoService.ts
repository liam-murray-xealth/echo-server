import * as net from 'net'

// brew install telnet
// telnet localhost 3333
// ctrl-], close
//

const port = process.env.PORT || 3333
const host = process.env.HOST || '0.0.0.0'

//const BACKLOG = 100

const server = net.createServer()

function truncate(s: string, max: number = 15) {
  return s.length > max ? `${s.substring(0, max)}...` : s
}

function clean(s: string) {
  // Only include space to tilde (printable)
  return s.replace(/[^ -~]+/g, '?')
}

server.on('connection', (socket: net.Socket) => {
  const remote = `${socket.remoteAddress}:${socket.remotePort}`
  console.log(`New connection from ${remote}`)
  socket.on('close', () => {
    console.log(`Socket closed ${remote}`)
  })
  socket.on('data', data => {
    console.log(`Data: ${clean(truncate(data.toString()))}`)
  })

  socket.write('Echo server\r\n')
  socket.pipe(socket)
})

function listen() {
  server.listen({ host, port }, () => {
    const addr = server.address() as net.AddressInfo
    if (addr) {
      console.log(`Echo service listening on ${addr.address}:${addr.port}`)
    }
  })
}

server.on('error', e => {
  console.log(`Error: ${e}`)
  if ((e as any).code === 'EADDRINUSE') {
    console.log('Retrying...')
    setTimeout(() => {
      listen()
    }, 1000)
  }
})

listen()
