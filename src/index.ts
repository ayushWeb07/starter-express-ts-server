import express from "express"

// config app
const app = express()
const PORT = 3000

// setup route
app.get('/ping', (req, res) => {
  res.status(200).send(`Pong`)
})

// spin up the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
