//@ts-check
const {BaseFragment, Button, Text} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 * @property {null} [toAdmin] toAdmin
 */
/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 * @property {string} [toAdmin] toAdmin
 */

//Header-фрагмент
class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.init('h3', 'Greeting message', Text) // root-элемента фрагмента на странице
    this.toAdmin = this.init('a[href="/admin"] button', 'To admin Page', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  HeaderFragment
}