// @ts-check
const {I} = require('./flows') //

const {client, it} = require('../lib')

const provider = {
  get I() {
    return I
  },
  get client() {
    return client
  },
  get testRunner() {
    return {it}
  }
}

module.exports = {
  provider
}