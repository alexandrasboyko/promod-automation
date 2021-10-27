// @ts-check

//создание базового фрагмента страницы
class BaseFragment {
  /**
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  // метод для оправки значений по ключу в поля(элементы) объекта
  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].sendKeys(data[key])
    }
  }

  // метод для создания "события click". Он используется для клика "в" поля(элементы) фрагмента, а также клика "на" кнопки(элементы) фрагмента
  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].click()
    }
  }
  // метод для извлечения имеющихся данных в элементе фрагмента
  async getData(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].getText()
    }
    return getData
  }
}

module.exports = {
  BaseFragment
}