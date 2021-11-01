//@ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [signIn] signIn
 * @property {null} [signUp] signUp
 */
// Header-фрагмент
class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.init('.btn.btn:nth-child(1)', 'Sign In Button ', Button) // root-элемента фрагмента на странице
    this.signUp = this.init('.btn.btn:nth-child(2)', 'Sign Up Button', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  HeaderFragment
}