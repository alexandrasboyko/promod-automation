// @ts-check
const {BaseFragment} = require('../../../../lib')

class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = root.$('input[placeholder="Ім\'я користувача"]')
    this.password = root.$('input[placeholder="пароль"]')
    this.signIn = root.$('.btn.btn-primary')
  }
}

module.exports = {
  LoginFragment
}