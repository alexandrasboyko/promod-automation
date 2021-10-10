// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')
const {RegistrationFragment} = require('./fragments/registration')

class MainPage extends BasePage {
  constructor() {
    super('#main_page', 'Main Page')
    this.header = this.init('.main_header', 'Header', HeaderFragment)
    this.nameReg = this.init('.login_form', 'Login', LoginFragment)
    this.emailReg = this.init('.registration_form', 'Registration', RegistrationFragment)
  }
}

function getMain() {
  return new MainPage()
}

module.exports = {
  MainPage, getMain
}