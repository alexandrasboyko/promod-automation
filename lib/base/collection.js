// @ts-check
const {isNumber} = require('sat-utils')

class Collection {
  /**
   * @param {import('promod').PromodSeleniumElementsType} rootEls collection root elements
   * @param {string} name child name
   * @param {new (...args:any[])=>any} childItem childItem
   */

  constructor(rootEls, name, childItem) {
    this.rootEls = rootEls;
    this.name = name;
    this.childItem = childItem
  }

  async sendKeys(data) {

  }

  async click() {

  }


  /**
   * @param {object} data data
   * @param {number} [data.index] index
   * @param {any} [data.action] action
   * @returns
   */

  async getData({index, action, ...rest} = {}) {
    if(isNumber(index)) {
      console.log("this.rootEls.get(index)==>", this.rootEls.get(index))
      return [new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).get(action)]
    }
    else if(Object.keys(rest).length) {
      return [(await this.findChild(rest)).get(action)]
    }
    else {
      const results = []
      await this.rootEls.each(async (childElementRoot) => {
        const childInstance = new this.childItem(childElementRoot, this.name);
        results.push(await childElementRoot.get(action))
      })
    }
  }
  /**
   * @private
   */
  async findChild(itemDescriptor) {
    const elementsCount = await this.rootEls.count();
    for(let i = 0; i < elementsCount; i++) {
      const childInstance = new this.childItem(this.rootEls.get(i), `${this.name} ${i}`)
      if(await childInstance.isRequiredItem(itemDescriptor)) {
        return childInstance
      }
    }
    throw new Error(`Child was not found, check your descriptor ${JSON.stringify(itemDescriptor)}`)
  }
}

module.exports = {
  Collection
}