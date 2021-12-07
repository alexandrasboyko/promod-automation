//@ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} TogglersCommonAction
 * @param {null} [newUser] new User
 * @param {null} [usersList] users List
 */

/**
 * @typedef {object} TogglersGetResAction
 * @param {string} [newUser] new User
 * @param {string} [usersList] users List
 */

//Логин-Фрагмент
class TogglersFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.newUser = this.init('.btn:nth-child(1)', 'Create new user', Button) // root-элемента фрагмента на странице
    this.usersList = this.init('.btn:nth-child(2)', 'Users List', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  TogglersFragment
}