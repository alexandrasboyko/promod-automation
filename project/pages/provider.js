// @ts-check

const provider = {
  get main() {
    const {Main} = require('./main/page')

    return new Main()
  },
  get table() {
    const {Tables} = require('./tables/page')
    return new Tables()
  }
}
module.exports = {
  provider
}