//@ts-check
const {BaseFragment} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 */
/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 */
//Header-фрагмент
class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.root.$('h3') // root-элемента фрагмента на странице
  }
}

module.exports = {
  HeaderFragment
}