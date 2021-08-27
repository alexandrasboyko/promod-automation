const {BaseFragment} = require('../../../../lib')

class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.usernameReg = root.$('input[placeholder="Ім\'я користувача"]')
    this.nameReg = root.$('input[placeholder="Ім\'я"]')
    this.emailReg = root.$('input[placeholder="Імейл"]')
    this.passwordReg = root.$('input[placeholder="пароль"]')
    this.chekbox = root.$('input[type="checkbox"]')
    this.createNewUser = root.$('.btn.btn-primary')
  }
}

module.exports = {
  RegistrationFragment
}