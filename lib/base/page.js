// @ts-check
const {seleniumWD} = require('promod')
const {$} = seleniumWD
const {decorateBase} = require('../reporter/index')
//создание базовой страницы

class BasePage {
  /**
   * @param {string} selector page root-selector
   * @param {string} name page name
   */
  constructor(selector, name) {
    this.selector = selector; // название селектора
    this.name = name; //название страницы
    this.root = $(this.selector) // selenium WDElement, root для страницы
  }

  /**
   * @param {string} selector css-selector
   * @param {string} name child name
   * @param {new (...args:any[])=>any} child chield-element constructor
   * @param {any[]} rest rest required arguments
   * @returns
   */
  init(selector, name, child, ...rest) {
    return new child(this.root.$(selector), name, ...rest)
    // this.root.$(selector) --> selenium WDElement, root для фрагмента , name --> имя фрагмента, new child --> создает новый экземпляр для класса child
  }

  // метод для отправки значений по ключу в фрагмент страницы
  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].sendKeys(data[key])
    }
  }
  // метод для создания "события клика" для объекта(фрагмента) на странице
  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].click(data[key])
    }
  }
  // метод для извлечения имеющихся данных фрагмента на странице
  async getData(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].getData(data[key])
    }
    return getData
  }
}
decorateBase(BasePage, 'getData', (name) => `${name} execute getData`)
decorateBase(BasePage, 'click', (name) => `${name} execute click`)
decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`)

module.exports = {
  BasePage
}