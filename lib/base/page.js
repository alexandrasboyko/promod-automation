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
    console.log('getData on Page==>', data)
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].getData(data[key])
    }
    return getData
  }


  async isDisplayed(data) {
    console.log('isDispl on  Page==>', data)
    const dataKeys = Object.keys(data)
    console.log('isDisplayed dataKeys on Page==>', dataKeys)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key])
    }
    return getData
  }


  async waitForPageState(data) {
    console.log('waitforPageState (data)==>', data) // { header: { isAdminMarker: true } } // { isAdminMarker: true }

    function checkThatStringsInData(dataObj) {
      console.log('1. check dataObj', dataObj) // { header: { isAdminMarker: true } } // { isAdminMarker: true }

      for(const key of Object.keys(dataObj)) {
        console.log('2. key=>', key) //key = header // key=isAdminMarker

        if(isObject(dataObj[key])) { // (isObject(dataObj[key])=(isObject{isAdminMarker:true}) ===>true // (isObject(dataObj[key])=(isObject{true}) ===> true
          console.log('3. in if before result, dataObj[key]', dataObj[key])
          const result = checkThatStringsInData(dataObj[key]) //checkThatStringsInData({isAdminMarker:true}) //
          console.log('4. in if after result, dataObj[key]==', dataObj[key], 'result==', result)
          if(result) {
            console.log('5. in if in result', result)
            return true
          }
        }
        else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
          console.log('6. in else if')
          return true
        }
      }
      return false
    }


    const conditionToCall = checkThatStringsInData(data) ? 'getData' : 'isDisplayed'

    await waitForCondition(async () => {
      const thisCallResult = await this[conditionToCall]({...data}) // вызывает async getData или isDisplayed () и присваивает результат вызова в константу thisCallResult
      console.log('conditionToCall==>', conditionToCall, ',  thisCallResult==>', thisCallResult)
      console.log('data==>', data)
      console.log('isEqual(thisCallResult, data) ===>', isEqual(thisCallResult, data))
      return isEqual(thisCallResult, data) // вызывает функцию isEqual для сравнения результата возвращаемого функцией async getData или isDisplayed () и теми данными, что мы передаем в функцию
    }, {timeout: 15_000, message: `${this.name} should have condition ${JSON.stringify(data)}`}) // за время таймаута должна пройти проверка isEqual и вернуться результат, если она не успевает за это время, тогда падает сообщение об ошибке

  }
}

decorateBase(BasePage, 'getData', (name) => `${name} execute getData`)
decorateBase(BasePage, 'click', (name) => `${name} execute click`)
decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`)
decorateBase(BasePage, 'waitForPageState', (name) => `${name} execute waitForPageState`)

module.exports = {
  BasePage
}