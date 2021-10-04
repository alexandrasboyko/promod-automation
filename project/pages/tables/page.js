// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')

/**
 *@typedef {import ('./fragments/header').HeaderCommonAction} HeaderCommonAction
 *@typedef {import('./fragments/header').HeaderGetResAction} HeaderGetResAction
 */

/**
 * @typedef {object} TablesPageInteractionInterface
 *
 * @property {(data:{ })=>Promise<void>} sendKeys sendKeys method
 * @property {(data:{
 * header?: HeaderCommonAction
 * })=>Promise<void>} click click-method
 * * @property {(data:{
 * header?: HeaderCommonAction
 * })=>Promise<void>} click click-method
 */

class TablesPage extends BasePage {
  constructor() {
    super('#table_page', 'MainPage')
    this.header = this.init('._Tables_header', 'Tables', HeaderFragment);

  }
}
/**
 * @returns {TablesPageInteractionInterface} interaction interface
 */
function getTables() {
  return new TablesPage()
}

module.exports = {
  TablesPage, getTables
}