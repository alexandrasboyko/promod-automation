// @ts-check
const {BaseFragment} = require('../../../../lib')


class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.name = root.$('h3')
    this.toAnalitics = root.$('button:nth-child(1)')
    this.toCombaines = root.$('button:nth-child(2)')
    this.toAdminPanel = root.$('button:nth-child(3)')
    this.logOut = root.$('.btn.btn-primary.logout')
  }
}

module.exports = {
  HeaderFragment
}