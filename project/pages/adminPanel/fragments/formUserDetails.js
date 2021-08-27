// @ts-check
const {BaseFragment} = require('../../../../lib')


class UserDetailsFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = root.$('input:nth-child(1)')
    this.name = root.$('input:nth-child(2)')
    this.email = root.$('input:nth-child(3)')
    this.password = root.$('input:nth-child(4)')
    this.chekbox = root.$('input[type="checkbox"]')
  }
}

module.exports = {
  UserDetailsFragment
}