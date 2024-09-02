const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/something', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'something.html'))
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
