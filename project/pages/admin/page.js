//@ts-check
const {BasePage} = require('../../../lib')
const {NewUserFormFragment} = require('./fragments/new.user')
const {TogglersFragment} = require('./fragments/togglers')
const {UsersListFragment} = require('./fragments/usersList')

//@typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
/**
 *@typedef {import('./fragments/new.user').NewUserFormCommonAction} NewUserFormCommonAction
 *@typedef {import('./fragments/new.user').NewUserFormSendKeysAction} NewUserFormSendKeysAction
 *@typedef {import('./fragments/new.user').NewUserFormGetResAction} NewUserFormGetResAction

 *@typedef {import('./fragments/togglers').TogglersCommonAction} TogglersCommonAction
 *@typedef {import('./fragments/togglers').TogglersGetResAction} TogglersGetResAction

 *@typedef {import('./fragments/usersList').UsersListCommonAction} UsersListCommonAction
 *@typedef {import('./fragments/usersList').UsersListGetResAction} UsersListGetResAction
 */

/**
 *@typedef {object} AdminPageInteractionInterface
 *@property {(data:{
 *userForm?: NewUserFormSendKeysAction
 *})=> Promise<void>} sendKeys sendKeys method
 *@property {(data:{
 *togglers?: TogglersCommonAction
 *userForm?: NewUserFormCommonAction
 *})=> Promise<void>} click click method
 *@property {(data:{
  *togglers?: TogglersCommonAction
  *userForm?: NewUserFormCommonAction
  *usersList?: UsersListCommonAction
  *})=> Promise<{
  *togglers?:TogglersGetResAction
  *userForm?:NewUserFormGetResAction
  *usersList?: UsersListGetResAction
  *}>} getData click-getData method
  */

// Admin-страница
class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin Page') // root и имя страницы
    this.togglers = this.init('.view_toggler', 'Toggler buttons', TogglersFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
    this.userForm = this.init('.admin_new_user', 'New user creation form', NewUserFormFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
    //this.userItem = this.init('.', 'User Item', UserItemFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
    this.usersList = this.init('.admin_user_list_root', 'Users List', UsersListFragment)
  }
}
/**
 * @returns {AdminPageInteractionInterface} Interaction Interface
 */

function getAdmin() { // функция для создания экзепляра страницы
  return new AdminPage()
}

module.exports = {
  AdminPage, getAdmin
}