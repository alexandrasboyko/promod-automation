// @ts-check
const {BasePage} = require('../../../lib')
const {TogglersFragment} = require('./fragments/togglers')
const {UserFormFragment} = require('./fragments/new.user')


/**
 * @typedef {import ('./fragments/new.user').UserFormCommonAction} UserFormCommonAction
 * @typedef {import ('./fragments/new.user').UserFormSendKeysAction} UserFormSendKeysAction
 * @typedef {import ('./fragments/new.user').UserFormGetResAction} UserFormGetResAction
 * @typedef {import ('./fragments/togglers').TogglersCommonAction} TogglersCommonAction
 * @typedef {import ('./fragments/togglers').TogglersGetResAction} TogglersGetResAction
 */

/**
 * @typedef {object} AdminPageInteractionInterface
 * @property {(data:{
 * userForm?: UserFormCommonAction
 * togglers?: TogglersCommonAction
 * })=>Promise<void>} click click-method
 *
 * @property {(data: {
 * userForm?: UserFormSendKeysAction
 * })=>Promise<void>} sendKeys sendKeys-method
 *
 * @property {(data: {
 * togglers?: TogglersCommonAction
 * userForm?: UserFormCommonAction
 * })=>Promise<{
 * togglers?: TogglersGetResAction
 * userForm?: UserFormGetResAction
 * }>} getData getData-method
 */


class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin Page')
    this.togglers = this.init('.view_toggler', 'Toggler Buttons', TogglersFragment)
    this.userForm = this.init('.admin_new_user', 'New User creation form', UserFormFragment)

  }
}

/**
 *@returns {AdminPageInteractionInterface} interaction interface
 */
function getAdmin() {
  return new AdminPage()
}

module.exports = {
  AdminPage, getAdmin
}