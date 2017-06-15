// import express
const express = require('express')
// Create Express app
const app = express()

//When GET/links is received
app.get('/links',(req, res) => {
  res.json({
    items: [
      'First',
      'Second'
    ]
  })
})

// Start web server (port)
app.listen(7000, () => {
  console.log('Server started at localhost:7000')
})
