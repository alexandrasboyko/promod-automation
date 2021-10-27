//@ts-check
const {BaseFragment} = require('../../../../lib')

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
//Логин-Фрагмент
class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.root.$('input[placeholder="Ім\'я користувача"]') // root-элемента фрагмента на странице
    this.password = this.root.$('input[placeholder="пароль"]') // root-элемента фрагмента на странице
    this.signInLog = this.root.$('.btn.btn-primary') // root-элемента фрагмента на странице
  }
}

module.exports = {
  LoginFragment
}