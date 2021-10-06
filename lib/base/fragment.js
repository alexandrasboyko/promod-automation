// @ts-check


class BaseFragment {
  /**
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root; // $(selector) => selenium WDElement
    this.name = name
  }

  async sendKeys(data) {
    const keysData = Object.keys(data)
    for(const key of keysData) {
      await this[key].sendKeys(data[key])
    }
  }

  async click(data) {
    const keysData = Object.keys(data)
    for(const key of keysData) {
      await this[key].click()
    }
  }

  async getData(data) {
    const keysData = Object.keys(data)
    const getData = {...data}
    for(const key of keysData) {
      getData[key] = await this[key].getData(data[key])
    }
    return getData
  }
}

module.exports = {
  BaseFragment
}