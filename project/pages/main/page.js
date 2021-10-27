//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {LoginFragment} = require('./fragments/login')
const {RegistrationFragment} = require('./fragments/registration')

/**
 *@typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
 *@typedef {import('./fragments/login').LoginCommonAction} LoginCommonAction
 *@typedef {import('./fragments/login').LoginSendKeysAction} LoginSendKeysAction
 *@typedef {import('./fragments/registration').RegistrationCommonAction} RegistrationCommonAction
 *@typedef {import('./fragments/registration').RegistrationSendKeysAction} RegistrationSendKeysAction
 */

/**
 *@typedef {object} MainPageInteractionInterface
 *@property {(data:{
 *login?: LoginSendKeysAction
 *register?: RegistrationSendKeysAction
 *})=> Promise<void>} sendKeys sendKeys method
 *
 *@property {(data:{
  *header?:HeaderCommonAction
  *login?: LoginCommonAction
  *register?: RegistrationCommonAction
  *})=> Promise<void>} click click method
  */
// Main-страница
class MainPage extends BasePage {
  constructor() {
    super('#main_page', 'Main Page') // root и имя страницы
    this.header = this.init('.main_header', 'Header', HeaderFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
    this.login = this.init('.login_form', 'Login', LoginFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
    this.register = this.init('.registration_form', 'Registration', RegistrationFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
  }
}
/**
 * @returns {MainPageInteractionInterface} Interaction Interface
 */

function getMain() { // функция для создания экзепляра страницы
  return new MainPage()
}

module.exports = {
  MainPage, getMain
}