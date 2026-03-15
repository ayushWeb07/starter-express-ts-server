import express from "express"
import { serverConfig } from "./config/index.ts"

// config app
const app = express()

// setup route
app.get('/ping', (req, res) => {
  res.status(200).send(`Pong`)
})

// spin up the server
app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on http://localhost:${serverConfig.PORT}`)
})
