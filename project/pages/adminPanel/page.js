// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {ViewerFragment} = require('./fragments/viewPanel')
const {RegistrationFragment} = require('./fragments/formRegistration')
const {UsersListFragment} = require('./fragments/formUsersList')
const {UserDetailsFragment} = require('./fragments/formUserDetails')

class Admin extends BasePage {
  constructor() {
    super('#app', 'admin page')
    this.header = this.init('.header', 'Header', HeaderFragment)
    this.viewer = this.init('.view_toggler', 'View form', ViewerFragment)
    this.registration = this.init('.admin_new_user', 'Registration form', RegistrationFragment)
    this.usersList = this.init('.list', 'UsersList form', UsersListFragment)
    this.userDetails = this.init('.admin_user_form"', 'UserDetails form', UserDetailsFragment)
  }
}

module.exports = {
  Admin
}