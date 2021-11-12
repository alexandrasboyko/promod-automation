// @ts-check

const {BaseElement} = require('../base/element')

class Checkbox extends BaseElement {
  constructor(root, name) {
    super(root, name)
  }

  async getData() { // метод для извлечения данных из root-элемента  Checkbox"
    return this.root.getAttribute('cheked')
  }

  async sendKeys(condition) { // функция для создания состояния checkbox-a
    if(await this.getData() === condition) { // включает в себя проверку состояния сheckbox-a через метод getData(), если запрашиваемое состояние подтверждается, то тогда функция просто ретернится
      return
    }
    await this.root.click() // а иначе вызывается метод click() для того, чтобы изменить текущее состояние checkbox-a на запрашиваемое
  }

  async click() { // метод click()-а выдает сообщение об ошибке, что запрашиваемый клик просто так без условия  не может совершить действие
    throw new TypeError(`Checkbox ${this.name} can not execution click`)
  }
}

module.exports = {
  Checkbox
}