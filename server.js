const express = require('express');
const { createServer } = require('http');
const { Server } = require('ws');
const next = require('next');
const url = require('url');

// Configuración del servidor Next.js
const nextPort = 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Configuración del servidor Express
const expressPort = 3001;
const expressApp = express();
const expressServer = createServer(expressApp);

// Inicializar el servidor WebSocket con el servidor Express
const wss = new Server({ noServer: true });

// Ruta para WebSocket
wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // Enviar el mensaje a todos los clientes conectados
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Connection closed');
  });
});

// Manejar actualizaciones de protocolo para WebSocket
expressServer.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/my-websocket-route') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

// Rutas de Express
expressApp.get('/', (req, res) => {
  res.send('Hello from Express');
});

// Iniciar el servidor Express
expressServer.listen(expressPort, () => {
  console.log(`Express server listening at http://localhost:${expressPort}`);
});

// Preparar y ejecutar Next.js
nextApp.prepare().then(() => {
  const nextServer = createServer((req, res) => handle(req, res));
  nextServer.listen(nextPort, (err) => {
    if (err) throw err;
    console.log(`> Next.js ready on http://localhost:${nextPort}`);
  });
});
