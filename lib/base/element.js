// @ts-check
const {decorateBase} = require('../reporter/index')
class BaseElement {
  constructor(root, name) {
    this.root = root; // root-элемент (цепочка селекторов, чтоб найти элемент)
    this.name = name // имя элемента
  }

  async sendKeys(data) { // метод для вставки ключей в root-элемент
    await this.root.sendKeys(data)
  }

  async click() { // метод для создания события при клике на root-элемент
    await this.root.click()
  }

  async getData() { // метод для извлечения значений из root-элемента
    console.log('getData in element==>')
    return (await this.root.getText()).trim() //
  }

  async isDisplayed() {

    console.log('isDisplayed in element==>')
    //что отображает Promise??? ---> true или false ???
    console.log('this.root.isDisplayed()', this.root.isDisplayed())
    return this.root.isDisplayed()
  }

}

decorateBase(BaseElement, 'getData', (name) => `${name} execute getData`)
decorateBase(BaseElement, 'click', (name) => `${name} execute click`)
decorateBase(BaseElement, 'sendKeys', (name) => `${name} execute sendKeys`)
decorateBase(BaseElement, 'isDisplayed', (name) => `${name} execute isDisplayed`)


module.exports = {
  BaseElement
}