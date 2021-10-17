// @ts-check
const {BaseFragment, Button, Input, Text} = require('../../../../lib')

/**
 * @typedef {object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] password
 * @property {null} [signInLog] signIn
 */
/**
 * @typedef {object} LoginGetResAction
 * @property {string} [username] username
 * @property {string} [password] password
 * @property {string} [signInLog] signIn
 */

/**
 * @typedef {object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('input[placeholder="Ім\'я користувача"]', 'Username field', Input)
    this.password = this.init('input[placeholder="пароль"]', 'Password field', Input)
    this.signInLog = this.init('.btn.btn-primary', 'Sign In Button', Button)
  }
}

module.exports = {
  LoginFragment
}