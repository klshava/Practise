
const button = document.getElementById('signup')
button.addEventListener('click', () => {
  if (document.getElementById('name').value === '') {
    require()
  }
  if (document.getElementById('surname').value === '') {
    require()
  }
  if (document.getElementById('username').value === '') {
    require()
  }
  if (document.getElementById('email').value === '') {
    require()
  }
  if (document.getElementById('password').value === '') {
    require()
  }
  if (document.getElementById('password').value.length < 8) {
    window.alert('Password Must Be At Least 8 Characters')
    document.getElementById('password').innerHTML = ''
    return
  }
  if (document.getElementById('password').value !== document.getElementById('password2').value) {
    window.alert('Passwords Do Not Match')
    document.getElementById('password2').innerHTML = ''
  }
}, false)
