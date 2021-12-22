// @ts-check
const {seleniumWD} = require('promod')
const {isObject, isPrimitive, isString, waitForCondition} = require('sat-utils')
const {$} = seleniumWD
const {decorateBase} = require('../reporter/index')
const {isEqual} = require('./utils')

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


  async isDisplayed(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key])
    }
    return getData
  }


  async waitForPageState(data) {
    function checkThatStringsInData(dataObj) {
      for(const key of Object.keys(dataObj)) {
        if(isObject(dataObj[key])) {
          const result = checkThatStringsInData(dataObj[key])
          if(result) {
            return true
          }
        } else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
          return true
        }
      }
      return false
    }
    const conditionToCall = checkThatStringsInData(data) ? 'getData' : 'isDisplayed';
    console.log('conditionToCall', conditionToCall)
    await waitForCondition(async () => {
      const thisCallResult = await this[conditionToCall]({...data})
      console.log('thisCallResult=>>', thisCallResult)
      return isEqual(thisCallResult, data)
    }, {timeout: 15_000, message: `${this.name} should have condition ${JSON.stringify(data)}`})

  }
}

decorateBase(BasePage, 'getData', (name) => `${name} execute getData`)
decorateBase(BasePage, 'click', (name) => `${name} execute click`)
decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`)
decorateBase(BasePage, 'waitForPageState', (name) => `${name} execute waitForPageState`)

module.exports = {
  BasePage
}