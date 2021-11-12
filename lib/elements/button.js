// @ts-check

const {BaseElement} = require('../base/element')

class Button extends BaseElement {
  constructor(root, name) {
    super(root, name)
  }

  async sendKeys(data) { // метод для опеределения ошибки отправки ключей для кнопки Button, для которой вставка ключей функционально непредусмотрена
    throw new Error(` Button ${this.name} can not execute method sendKeys `)
  }
}

module.exports = {
  Button
}