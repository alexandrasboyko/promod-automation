// @ts-check
const {BaseElement} = require('../base/element')

class Checkbox extends BaseElement {
  constructor(root, name) {
    super(root, name)

  }
  async getData(data) {
    return this.root.getAttribute('checked')
  }

  async sendKeys(condition) {
    if(await this.getData() === condition) {
      return
    }
    await this.root.click()
  }

  async click(data) {
    throw new TypeError(`Checkbox ${this.name} can not execute click`)
  }

}
module.exports = {
  Checkbox
}