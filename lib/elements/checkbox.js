// @ts-check

const {BaseElement} = require('../base/element')

class Checkbox extends BaseElement {
  constructor(root, name) {
    super(root, name)
  }
  async getData() { // метод для извлечения данных из root-элемента  Checkbox"
    await this.root.getAtribute('checked')
  }
  async click(data) {
    throw new TypeError(` Checkbox ${this.name} can not execute method click `)
  }

  async sendKeys(condition) { // функция для создания состояния checkbox-a
    if(condition === await this.getData()) {return } // включает в себя проверку состояния сheckbox-a через метод getData(), если запрашиваемое состояние подтверждается, то тогда функция просто ретернится
    await this.root.click()
    // а иначе вызывается метод click() для элемента "checkbox", чтобы изменить текущее состояние checkbox-aв соответствующему условию

    // метод click()-а выдает сообщение об ошибке, что запрашиваемый клик просто так без условия  не может совершить действие
  }
}
module.exports = {
  Checkbox
}