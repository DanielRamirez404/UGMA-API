import express from 'express'
import config from './config.js' 

const app = express();

app.get("/", (req, res) => {
  res.send("UGMA API!");
})

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}...`)
})

