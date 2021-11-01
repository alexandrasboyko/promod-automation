// @ts-check

const {BaseElement} = require('../base/element')

class Input extends BaseElement {
  constructor(root, name) {
    super(root, name)
  }

  async getData() { // метод для извлечения данных из root-элемента "Input"
    return this.root.getAttribute('value')
  }
}

module.exports = {
  Input
}