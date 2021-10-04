// @ts-check

const pageProvider = {
  get main() {
    const {getMain} = require('./main/page')
    return getMain()
  }

}

module.exports = {
  pageProvider
}