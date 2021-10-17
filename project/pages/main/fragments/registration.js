// @ts-check
const {BaseFragment, Input, Button, Text} = require('../../../../lib')

/**
 * @typedef {object} RegistrationCommonAction
 * @property {null} [usernameReg] usernameReg
 * @property {null} [nameReg] nameReg
 * @property {null} [emailReg] emailReg
 * @property {null} [passwordReg] passwordReg
 * @property {null} [signUpReg] signUpReg
 */

/**
 * @typedef {object} RegistrationSendKeysAction
 * @property {string|number} [usernameReg] username
 * @property {string|number} [nameReg] name
 * @property {string|number} [emailReg] email
 * @property {string|number} [passwordReg] password
 */


class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.usernameReg = this.init('input[placeholder="Ім\'я користувача"]', 'Username field', Input)
    this.nameReg = this.init('input[placeholder="Ім\'я"]', 'Name field', Input)
    this.emailReg = this.init('input[placeholder="Імейл"]', 'Email field', Input)
    this.passwordReg = this.init('input[placeholder="пароль"]', 'Password field', Input)
    this.signUpReg = this.init('.btn.btn-primary', 'Sign Up button', Button)
  }
}

module.exports = {
  RegistrationFragment
}