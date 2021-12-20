// @ts-check
const {isNumber} = require('sat-utils')

class BaseCollection {

  /**
   * @param {import('promod').PromodSeleniumElementsType} rootEls rootEls
   * @param {string} name child name
   * @param {new (...args:any[])=>any} childItem childItem
   */

  constructor(rootEls, name, childItem) {
    this.rootEls = rootEls;
    this.name = name;
    this.childItem = childItem
  }

  /**
    * @param {object} data data
    * @param {number} [data.index] index
    * @param {any} [data.action] action
    * @returns
    */

  async getData({index, action, ...rest}) { // метод для извлечения значения из root-элемента колекции элементов
    if(isNumber(index)) {
      // если индекс равен типу данных number, тогда создаем отдельный экземпляр класса из root-a коллекции/массива извлекши нужный элемент массива по индексу --> это получится root-элемент(его цепочка селекторов), отобразить его имя с индексом (name index). после того как нашли этот элемент по индексу из коллекции, вызываем у него метод getData
      return [(new this.childItem(this.rootEls.get(index))).getData(action)]
    }
    else if(Object.keys(rest).length) { // если объект, который пришел в качестве аргумента,а т.е. имеет дополнительные данные, тогда использовав эти данные для поиска соответсвующего элемента путем итерации по всем элементам массива, создания для каждого экземпляра класса и проверки этого экземпляра на валидность
      return [(await this.findChild(rest)).getData(action)]
    }
    else {
      const results = []
      await this.rootEls.each(async (childElementRoot) => {
        const childInstance = new this.childItem(childElementRoot, this.name)
        results.push(await childInstance.getData(action))
      })
      return results
    }
  }  // для отображения массива из всех элементов --> а т.е. списка всех элементов происходит создание экземпляра класса для каждого элемента и запись его в результирующий массив

  /**
   * @private
   */

  async findChild(itemDescriptor) {
    const argsCount = await this.rootEls.count() //счетчик количества элементов в коллекции
    for(let i = 0; i < argsCount; i++) { // итерируемся по счетчику
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`) // для каждого элемента создать экземпляр класса с root-ом и его именем с индексом
      if([await childInstance.isRequired(itemDescriptor)]) {
        return childInstance
      } // подождать пока пройдет проверка на соответствие требованиям к экземпляру класса UserItem
      throw new Error(`Child was not found, check your ${JSON.stringify(itemDescriptor)}`) // или добавить сообщение об ошибке, согласно которому нужно перепроверить входящие данные элемента Descriptora
    }
  }
}
module.exports = {
  BaseCollection
}



