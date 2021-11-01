//@ts-check
const {BaseFragment, Input, Button} = require('../../../../lib')

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
    this.usernameReg = this.init('input[placeholder="Ім\'я користувача"]', 'UsernameReg Field', Input) // root-элемента фрагмента на странице
    this.nameReg = this.init('input[placeholder="Ім\'я"]', 'NameReg Field', Input) // root-элемента фрагмента на странице
    this.emailReg = this.init('input[placeholder="Імейл"]', 'EmailReg Field', Input) // root-элемента фрагмента на странице
    this.passwordReg = this.init('input[placeholder="пароль"]', 'PasswordReg Field', Input) // root-элемента фрагмента на странице
    this.signUpReg = this.init('.btn.btn-primary', 'SignUpReg Button', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  RegistrationFragment
}