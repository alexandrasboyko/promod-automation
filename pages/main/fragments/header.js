const {seleniumWD} = require('promod')
const {$} = seleniumWD

class HeaderFragment {
  constructor(root = $('.main_header')) {
    this.signIn = root.$('button:nth-child(1)')
    this.signUp = root.$('button:nth-child(2)')

  }
}

module.exports = {
  HeaderFragment
}