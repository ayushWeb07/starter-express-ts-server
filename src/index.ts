import express from "express"
import { serverConfig } from "./config/index.ts"
import v1Router from "./routers/v1/index.router.ts"

// config app
const app = express()

// setup routes
app.use("/api/v1", v1Router)

// spin up the server
app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on http://localhost:${serverConfig.PORT}`)
})
