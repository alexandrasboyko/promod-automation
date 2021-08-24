// @ts-check

class BaseFragment {
  /**
   *
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.name = name;
    this.root = root
  }
}

module.exports = {
  BaseFragment
}