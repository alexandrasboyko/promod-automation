// @ts-check
const {BaseFragment} = require('../../../../lib')
const {seleniumWD} = require('promod')
const {$} = seleniumWD

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 */

/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 */

class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.root.$('h3');
    this.signUp = this.root.$('.btn.btn:nth-child(2)')
  }
}

module.exports = {
  HeaderFragment
}