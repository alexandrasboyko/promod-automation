// @ts-check
const {isNumber} = require('sat-utils')

class BaseCollection {
  /**
   * @param {import('promod').PromodSeleniumElementsType} rootEls collection root elements
   * @param {string} name child name
   * @param {new (...args:any[])=>any} childItem child item
   */
  constructor(rootEls, name, childItem) {
    this.rootEls = rootEls; // root-элементы (цепочка селекторов для поиска всех составляющих коллекцию элементов)
    console.log("rootEls=>", rootEls)
    this.name = name // имя коллекции
    console.log("name=>", name)
    this.childItem = childItem // класс UserItem Fragment
    console.log('childItem=>', childItem)
  }

  /**
   * @param {object} data data
   * @param {number} [data.index] index
   * @param {any} [data.action] action
   * @returns
   */

  async getData({index, action, ...rest} = {}) { // метод для извлечения значения из root-элемента колекции элементов
    if(isNumber(index)) { // если индекс равен типу данных number, тогда создать экземпляр класса из root-a коллекции извлекши нужный элемент по индексу -> это получится root-элемент(его цепочка селекторов) его имя с индексом (name index). после того как нашли этот элемент по индексу из коллекции, вызываем у него метод getData
      return [await new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).getData(action)] //
    } else if(Object.keys(rest).length) { // если есть ключи
      return [(await this.findChild(rest)).getData(action)] // тогда вернуть
    } else {
      const results = [];
      // this.rootEls = $$('button')
      await this.rootEls.each(async (childElementRoot) => {
        const childInstance = new this.childItem(childElementRoot, this.name)
        results.push(await childInstance.getData(action))
      })
      return results
    }
  }

  /**
   * @private
   */
  async findChild(itemDescriptor) {
    const elementsCount = await this.rootEls.count() //счетчик количества элементов в коллекции
    for(let i = 0; i < elementsCount; i++) { // итерируемся по счетчику
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`) // для каждого элемента создать экземпляр класса с root-ом и его именем с индексом
      console.log("childInstance==>", this.childItem)
      if(await childInstance.isRequiredItem(itemDescriptor)) { // подождать пока пройдет проверка на
        return childInstance
      }
    }
    throw new Error(`Child was not found, check your descriptor ${JSON.stringify(itemDescriptor)}`)
  }
}

module.exports = {
  BaseCollection
}



