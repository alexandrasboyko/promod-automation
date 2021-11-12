//@ts-check
const {BaseFragment, BaseCollection} = require('../../../../lib')
const {UserItemFragment} = require('./user.item')

/**
 *@typedef {import('./user.item').UserItemCommonAction} UserItemCommonAction
 *@typedef {import('./user.item').UserItemGetResAction} UserItemGetResAction
 */

/**
 * @typedef {object} UsersListCommonAction
 * @property {{index?:number; action:UserItemCommonAction} & UserItemGetResAction} [users] users
 */

/**
 * @typedef {object} UsersListGetResAction
 * @property {UserItemGetResAction[]} [users] users
 */

//Логин-Фрагмент
class UsersListFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.users = this.init('.user_item', 'New User', BaseCollection, UserItemFragment) // root-колекции элементов UsersList-фрагмента на admin-странице
    console.log(this)
  }
}

module.exports = {
  UsersListFragment
}