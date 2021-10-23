// @ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} UserItemCommonAction
 * @property {null} [username] username
 * @property {null} [details] details
 */
/**
 * @typedef {object} UserItemGetResAction
 * @property {string} [username] username
 * @property {string} [details] details
 */

class UserItemFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('.user_item_username', 'Username', Button)
    this.details = this.init('button', 'Details', Button)
  }
}

module.exports = {
  UserItemFragment
}