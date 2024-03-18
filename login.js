
const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')

function swapPos() {
    loginForm.classList.toggle('above')
    loginForm.classList.toggle('below')
    signupForm.classList.toggle('above')
    signupForm.classList.toggle('below')

}

