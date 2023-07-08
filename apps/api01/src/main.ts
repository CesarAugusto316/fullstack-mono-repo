// import express from 'express';
import { Server, ServerOptions } from 'https'

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const options = {
  // keepAlive: true,
  // enableTrace: true
} as ServerOptions

const server = new Server(options, (req, res) => {
  if (req.method === 'GET') {
    console.log(req)
  }

  res.end()
});


server.listen(PORT, HOST, () => {
  console.log(`[ ready ] http://${HOST}:${PORT}`);
})

// const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });

// app.listen(PORT, HOST, () => {
//   console.log(`[ ready ] http://${HOST}:${PORT}`);
// });
