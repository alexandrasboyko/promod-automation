// @ts-check
const {BasePage} = require('../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')

class Main extends BasePage {
  constructor() {
    super('#app', 'Main page')
    this.header = this.init('.main_header', 'Header', HeaderFragment)
    this.loginForm = this.init('.login_form', 'Login form', LoginFragment)
  }
}

module.exports = {
  Main
}