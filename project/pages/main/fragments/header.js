// @ts-check
const {BaseFragment} = require('../../../../lib')


class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = root.$('button:nth-child(1)')
    this.signUp = root.$('button:nth-child(2)')

  }
}

module.exports = {
  HeaderFragment
}