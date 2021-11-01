// @ts-check

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
    return await this.root.getText() //
  }
}

module.exports = {
  BaseElement
}