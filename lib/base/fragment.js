// @ts-check
const {isNull} = require('sat-utils')
const {BaseCollection} = require('./collection')

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

  /**
  * @param {string} selector css-selector
  * @param {string} name child name
  * @param {new (...args:any[])=>any} child chield-element constructor
  * @param {any[]} rest rest required arguments
  * @returns
  */

  init(selector, name, child, ...rest) {
    return child === BaseCollection ? new child(this.root.$$(selector), name, ...rest) :
      new child(this.root.$(selector), name, ...rest)
    // this.root.$(selector) --> selenium WDElement, root для фрагмента, name --> имя фрагмента, new child --> создает новый экземпляр для класса child
    // this.root.$$(selector) --> selenium WDElements, root для фрагмента, name --> имя фрагмента, new child --> создает новый экземпляр для класса-коллекции child
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
    const dataKeys = Object.keys(data) //извлекаем ключи из входящего объекта
    const getData = {...data} // деструктуризируем входящий объект
    for(const key of dataKeys) { // итерироваться по каждому ключу из массива ключей входящего объекта
      getData[key] = await this[key].getData(data[key]) // в деструктуризированном объекте по каждому итерируемому ключу ищем соответствующую константу внутри этого деструктуризированного объекта и присваиваиваем ей значение из результата возвращаемого методом getData,|который в свою очередь есть результатом полученным от такого же метода getData (в данном случае спуска ниже по цепочке к элементу фрагмента на странице) куда аргументом data попадает значение полученное от конкретного интерируемого ключа входящего объекта| для значения найденного по такому же ключу у текущего контекста (в данном случае для контекста Фрагмента страницы)
    }
    return getData
  }

  async isDisplayed(data) {

    if(isNull(data)) {
      return this.root.isDisplayed()
    }
    const dataKeys = Object.keys(data)
    const getData = {...data}
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key])
    }
    return getData
  }

}

module.exports = {
  BaseFragment
}