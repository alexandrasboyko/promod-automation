//@ts-check
const {BaseFragment} = require('../../../../lib')

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
 * @property {string|number} [usernameReg] usernameReg
 * @property {string|number} [nameReg] nameReg
 * @property {string|number} [emailReg] emailReg
 * @property {string|number} [passwordReg] passwordReg
 */
// Фрагмент-регистрации
class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.usernameReg = this.root.$('input[placeholder="Ім\'я користувача"]') // root-элемента фрагмента на странице
    this.nameReg = this.root.$('input[placeholder="Ім\'я"]') // root-элемента фрагмента на странице
    this.emailReg = this.root.$('input[placeholder="Імейл"]') // root-элемента фрагмента на странице
    this.passwordReg = this.root.$('input[placeholder="пароль"]') // root-элемента фрагмента на странице
    this.signUpReg = this.root.$('.btn.btn-primary') // root-элемента фрагмента на странице
  }
}

module.exports = {
  RegistrationFragment
}