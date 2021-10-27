//@ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header')

/**
 *@typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
 *@typedef {import('./fragments/header').HeaderGetResAction} HeaderGetResAction
 */

/**
 *@typedef {object} TablesPageInteractionInterface
 *@property {(data:{
 *})=> Promise<void>} sendKeys sendKeys method
 *
 *@property {(data:{
  *header?:HeaderCommonAction })=> Promise<void>} click click method
 *@property {(data:{
  *header?:HeaderCommonAction })=>
  *Promise<{
  *header?: HeaderGetResAction
  *} >} getData getData-click method
  */

class TablesPage extends BasePage {
  constructor() {
    super('#table_page', 'Tables Page') // root и имя страницы
    this.header = this.init('.header', 'Header', HeaderFragment) // метод для создания экземпляра фрагмента (root-фрагмента на странице, имя фрагмента, класс)
  }
}
/**
 * @returns {TablesPageInteractionInterface} Interaction Interface
 */

function getTables() {
  return new TablesPage()
}

module.exports = {
  TablesPage, getTables
}