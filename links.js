const express = require('express')

//Make a new Express Router
const router = express.Router()

//When GET/links is received
app.get('/photos',(req, res) => {
  res.json({
    items: [
      'First',
      'Second'
    ]
  })
})

module.exports = router
// Same as: export default router 
