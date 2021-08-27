// @ts-check
const {BaseFragment} = require('../../../../lib')


class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greeting = root.$('h3')
    this.tables = root.$('button:nth-child(1)')
    this.analytics = root.$('button:nth-child(2)')
    this.combines = root.$('button:nth-child(3)')
    this.logOut = root.$('button:nth-child(4)')
  }
}

module.exports = {
  HeaderFragment
}