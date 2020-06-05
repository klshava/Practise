const express = require('express')

const app = express()

const path = require('path')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('./public'))
app.use('/api/users/', require(path.join(__dirname, 'routes', 'api', 'usersRoutes')))

// GET home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// GET sign up page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

// GET login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'))
})

// GET T&C page
app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'terms.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
