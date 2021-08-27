// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')
const {RegistrationFragment} = require('./fragments/registration')

class Main extends BasePage {
  constructor() {
    super('#app', 'Main page')
    this.header = this.init('.main_header', 'Header', HeaderFragment)
    this.loginForm = this.init('.login_form', 'Login form', LoginFragment)
    this.registrationForm = this.init('.registration_form', 'Registration form', RegistrationFragment)
  }
}

module.exports = {
  Main
}