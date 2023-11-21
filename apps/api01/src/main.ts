import express from 'express';
import * as fs from 'fs/promises'
import { createReadStream } from 'fs'


const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;


const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});


app.get('/video', async (req, res) => {
  try {
    const videoPath = 'apps/api01/src/assets/SampleVideo_1280x720_1mb.mp4';
    const stats = await fs.stat(videoPath)
    res.writeHead(200, {
      'Content-Length': stats.size,
      'Content-Type': 'video/mp4'
    });

    createReadStream(videoPath).pipe(res)
  }
  catch (error) {
    res.status(400).json({ error: error.name })
  }
});


app.listen(PORT, HOST, () => {
  console.log(`[ ready ] http://${HOST}:${PORT}`);
});
