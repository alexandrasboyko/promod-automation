// @ts-check
const mainflows = require('./main')
const {prettifyCamelCase} = require('sat-utils')

const initFlows = {
  ...mainflows
}
Object.keys(initFlows).forEach((flowFnName) => {
  const prettyName = prettifyCamelCase(flowFnName)
  const fn = initFlows[flowFnName]
  initFlows[flowFnName] = async function(...args) {
    console.log(`I ${prettyName}`)
    return fn.call(this, ...args)
  }
})

const I = {
  ...mainflows
}

module.exports = {
  I
}