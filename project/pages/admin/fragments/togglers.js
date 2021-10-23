// @ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} TogglersCommonAction
 * @property {null} [newUser] newUser
 * @property {null} [usersList] usersList
 */
/**
 * @typedef {object} TogglersGetResAction
 * @property {string} [newUser] newUser
 * @property {string} [usersList] usersList
 */

class TogglersFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.newUser = this.init('.btn.btn:nth-child(1)', 'New User', Button)
    this.usersList = this.init('.btn.btn:nth-child(2)', 'Users List', Button)
  }
}

module.exports = {
  TogglersFragment
}