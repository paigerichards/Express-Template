// import express
const express = require('express')
// Create Express app
const app = express()
// Adding routes
app.use(linksRouter)

// Start web server (port)
app.listen(7000, () => {
  console.log('Server started at localhost:7000')
})
