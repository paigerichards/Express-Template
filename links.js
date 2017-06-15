//When GET/links is received
app.get('/photos',(req, res) => {
  res.json({
    items: [
      'First',
      'Second'
    ]
  })
})
