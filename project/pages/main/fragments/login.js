//@ts-check
const {BaseFragment, Input, Button} = require('../../../../lib')

/**
 * @typedef {object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] password
 * @property {null} [signInLog] signInLog
 */

/**
 * @typedef {object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

/**
 * @typedef {object} LoginGetResAction
 * @property {string} [username] username
 * @property {string} [password] password
 */

//Логин-Фрагмент
class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('input[placeholder="Ім\'я користувача"]', 'Username Field', Input) // root-элемента фрагмента на странице
    this.password = this.init('input[placeholder="пароль"]', 'Password Field', Input) // root-элемента фрагмента на странице
    this.signInLog = this.init('.btn.btn-primary', 'Sign In Log Button', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  LoginFragment
}