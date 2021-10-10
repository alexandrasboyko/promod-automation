// @ts-check
const {BaseFragment} = require('../../../../lib')

class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.usernameReg = this.root.$('input[placeholder="Ім\'я користувача"]')
    this.nameReg = this.root.$('input[placeholder="Ім\'я"]')
    this.emailReg = this.root.$('input[placeholder="Імейл"]')
    this.passwordReg = this.root.$('input[placeholder="пароль"]')
    this.signUpReg = this.root.$('.btn.btn-primary')
  }
}

module.exports = {
  RegistrationFragment
}