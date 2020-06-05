const path = require('path')
const express = require('express')
const router = express.Router()
const users = require('../../models/users')
const errors = require('../../models/errors')

// get all users
router.get('/', (req, res) => {
  res.json(users)
})

// To handle signing up
router.get('/signup', function (_req, res) {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

// Added ON
router.post('/signup', (req, res) => {
  const { name, surname, username, email, password, password2 } = req.body

  if (!name || !surname || !username || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' })
  }

  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' })
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' })
  }

  if (errors.length > 0) {
    res.redirect('/signup')
  } else {
    const newUser = {
      name,
      surname,
      username,
      email,
      password
    }
    users.push(newUser)
    res.redirect('/login')
  }
})

// router.post('/signup', (req, res) => {
//   // id:100 signifies a new user
//   const newUser = {
//     id: 100,
//     name: req.body.name,
//     surname: req.body.surname,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   }
//   users.push(newUser)
//   // res.json(users)
//   // res.send(`Welcome to FairShare, ${newUser.name}`)
//   res.redirect('/login')
// })

// router.post('/login', (req, res) => {
//   const userName = req.body.username
//   const passWord = req.body.password
//   const registeredUser = users.findIndex(function (user) {
//     return user.name === userName && user.password === passWord
//   })
//   if (registeredUser !== -1) {
//     res.redirect('/')
//   } else {
//     return res.status(400).json({ msg: 'Please enter the correct username and password' })
//   }
// })

module.exports = router
