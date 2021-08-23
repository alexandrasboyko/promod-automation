//@ts-check
const {seleniumWD} = require('promod')
const {$} = seleniumWD

class BasePage {
  constructor(selector, name) {
    this.selector = selector
    this.name = name
    this.root = $(this.selector)
  }
  init(selector, name, child, ...rest) {
    return new child(selector, name, ...rest)
  }
}

module.exports = {
  BasePage,
}