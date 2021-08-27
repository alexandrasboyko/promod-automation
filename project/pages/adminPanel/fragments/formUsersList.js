const {BaseFragment} = require('../../../../lib')

class UsersListFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = root.$('.user_item_username')
    this.details = root.$('.btn.btn-default')
  }
}

module.exports = {
  UsersListFragment
}