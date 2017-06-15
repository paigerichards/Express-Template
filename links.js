const express = require('express')
const linksRouter = require('./routes/links')

//Make a new Express Router
const router = express.Router()

const links = [
    {
        title: 'ProgrammableWeb API Directory',
        url: 'https://www.programmableweb.com/apis/directory',
        tags: ['api']
    },
    {
        title: 'Presentational and Container Components',
        url: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0',
        tags: ['react', 'component']
    },
    {
        title: 'Traversing Twists and Turns',
        url: 'https://medium.com/@vicalfieri/traversing-twists-and-turns-c298d9d4636',
        tags: ['vic', 'blog']
    }
]

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
