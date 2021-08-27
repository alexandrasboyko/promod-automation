// @ts-check
const {BaseFragment} = require('../../../../lib')


class ViewerFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.createNewUser = root.$('button:nth-child(1)')
    this.usersList = root.$('button:nth-child(2)')
  }
}

module.exports = {
  ViewerFragment
}