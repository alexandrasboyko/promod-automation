// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')
const {FilterFragment} = require('./fragments/filter')


class Tables extends BasePage {
  constructor() {
    super('#table_page', 'Tables page')
    this.header = this.init('.header', 'Header', HeaderFragment)
    this.filtering = this.init('.table.filtering', 'Filter', FilterFragment)
  }
}

module.exports = {
  Tables
}