const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`Endpoint called using HTTP GET`)
  res.send('Hello World 123!')
})

app.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})