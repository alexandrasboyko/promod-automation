//@ts-check
const {seleniumWD} = require('promod')
const {$} = seleniumWD

class BasePage {
  constructor(selector, name) {
    this.selector = selector
    this.name = name
    this.root = $(this.selector)
  }

  /**
   *
   * @param {string} selector string selector
   * @param {string} name child name
   * @param {new(...args: any[])=>any} child child constructor function
   * @param  {...any} rest other child required arg-s
   *
   * @returns {object} child
   */
  init(selector, name, child, ...rest) {
    return new child(this.root.$(selector), name, ...rest)
  }
}
module.exports = {
  BasePage,
}