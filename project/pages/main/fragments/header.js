//@ts-check
const {BaseFragment} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [signIn] signIn
 * @property {null} [signUp] signUp
 */
// Header-фрагмент
class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.root.$('.btn.btn:nth-child(1)') // root-элемента фрагмента на странице
    this.signUp = this.root.$('.btn.btn:nth-child(2)') // root-элемента фрагмента на странице
  }
}

module.exports = {
  HeaderFragment
}