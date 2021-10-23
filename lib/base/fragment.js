// @ts-check

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
   * @param {new (...args:any[])=>any} child child element constructor
   * @param  {any[]} rest rest required argument
   * @returns
   */

  init(selector, name, child, ...rest) {
    //TODO add technical logging
    return new child(this.root.$(selector), name, ...rest)
  }

  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].sendKeys(data[key])
    }
  }

  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].click()
    }
  }

  async getData(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data}
    //TODO add technical logging
    for(const key of dataKeys) {
      getData[key] = await (this[key].getData() ? this[key].getData() : this[key].getText())
    }
    return getData
  }
}

module.exports = {
  BaseFragment
}