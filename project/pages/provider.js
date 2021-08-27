// @ts-check

const provider = {
  get main() {
    const {Main} = require('./main/page')
    return new Main()
  },
  get table() {
    const {Tables} = require('./tables/page')
    return new Tables()
  },
  get admin() {
    const {Admin} = require('./adminPanel/page')
    return new Admin()
  }
}
module.exports = {
  provider
}