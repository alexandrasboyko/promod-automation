// @ts-check
const {prettifyCamelCase} = require('sat-utils')
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const adminFlows = require('./admin')
const {step} = require('../../lib')

const initFlows = {
  ...mainFlows,
  ...tablesFlows,
  ...adminFlows
}

Object.keys(initFlows).forEach((fnName) => {
  const prettyName = prettifyCamelCase(fnName)
  const fn = initFlows[fnName] // значение функции "loginToSystem" присвоили в переменную
  initFlows[fnName] = async function(...args) { // дальше функции "loginToSystem" присвоили новое значение и оно теперь выводит prettyName и связывает текущий контекст
    return step(`I ${prettyName}`, () => fn.call(this, ...args), ...args)
    // return fn.call(this, ...args)
  }
})


const I = {
  ...initFlows
}

module.exports = {
  I
}