//@ts-check
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

//Логин-Фрагмент
class TogglersFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.newUser = this.init('button:nth-child(1)', 'New User', Button) // root-элемента фрагмента на странице
    this.usersList = this.init('button:nth-child(2)', 'Users List', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  TogglersFragment
}