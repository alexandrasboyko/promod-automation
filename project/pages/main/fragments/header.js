// @ts-check
const {BaseFragment} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @typedef {null} [signIn] signIn
 * @typedef {null} [signUp] signUp
 *
 */


class HeaerFrag extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.root.$('.btn.btn:nth-child(1)')
    this.signUp = this.root.$('.btn.btn:nth-child1(2)')
  }
}

module.exports = {
  HeaerFrag
}