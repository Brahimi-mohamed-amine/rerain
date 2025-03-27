const signUp = document.querySelector('.btn-sign--up');
signUp.addEventListener('click', (e) => {
  // update text
  const para = document.querySelector('section > p')
  para.textContent = 'Sign up'
  document.querySelector('.btn-login--big').textContent = 'Register'

  // Switching colors
  e.target.style.backgroundColor = 'black';
  e.target.style.color = 'white';
  document.querySelector('.btn-login').style.backgroundColor = 'white'
  document.querySelector('.btn-login').style.color = 'black'

  // removing login inputs
  const elements = document.querySelectorAll('.login-input')
  elements.forEach(node => {
    node.classList.add('d-none'); // Directly set the style
  })

  // adding sign up inputs
  const newElements = document.querySelectorAll('.sign-up')
  newElements.forEach(node => {
    node.classList.remove('d-none')
  })
})
const login = document.querySelector('.btn-login')
login.addEventListener('click', (e) => {
  // update text
  const para = document.querySelector('section > p')
  para.textContent = 'Login'
  document.querySelector('.btn-login--big').textContent = 'Login'

  // Switching colors
  e.target.style.backgroundColor = 'black';
  e.target.style.color = 'white';
  document.querySelector('.btn-sign--up').style.backgroundColor = 'white'
  document.querySelector('.btn-sign--up').style.color = 'black'

  // remove sign up inputs
  const elements = document.querySelectorAll('.sign-up')
  elements.forEach(node => {
    node.classList.add('d-none'); // Directly set the style
  })

  // display login inputs
  const newElements = document.querySelectorAll('.login-input')
  newElements.forEach(node => {
    node.classList.remove('d-none')
  })
})

