const {seleniumWD} = require('promod')
const {$} = seleniumWD

class LoginFragment {
  constructor(root = $('.login_form')) {
    this.userName = root.$('input[placeholder="Ім\'я користувача"]')
    this.password = root.$('input[placeholder="пароль"]')
    this.signIn = root.$('.btn.btn-primary')
  }
}

module.exports = {
  LoginFragment
}