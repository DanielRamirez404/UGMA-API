import type { Express, Request, Response } from 'express';

import express from 'express';
import morgan from 'morgan';
import config from './config.js'; 

const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("UGMA API");
})

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}...`)
})

