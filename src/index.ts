import express from "express"
import { serverConfig } from "./config/index.ts"
import userRouter from "./routers/users.router.ts"

// config app
const app = express()

// setup routes
app.use("/users", userRouter)

// spin up the server
app.listen(serverConfig.PORT, () => {
  console.log(`Server listening on http://localhost:${serverConfig.PORT}`)
})
