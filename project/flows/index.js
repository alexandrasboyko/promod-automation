// @ts-check
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const {prettifyCamelCase} = require('sat-utils')

const initFlows = {
  ...mainFlows,
  ...tablesFlows
}

Object.keys(initFlows).forEach((flowFnName) => {
  const prettyName = prettifyCamelCase(flowFnName)
  const fn_value = initFlows[flowFnName]
  console.log('!')
  initFlows[flowFnName] = async function(...args) {
    console.log(`I ${prettyName}`)
    // console.log(fn_value.call(this, ...args), '!!!!!!!!!!')
    return fn_value.call(this, ...args)
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}