// @ts-check
const {prettifyCamelCase} = require('sat-utils')
const mainFlows = require('./main')

const initFlows = {
  ...mainFlows
}

Object.keys(initFlows).forEach((fnName) => {
  const prettyName = prettifyCamelCase(fnName)
  const fn = initFlows[fnName] // значение функции "loginToSystem" присвоили в переменную
  initFlows[fnName] = async function(...args) { // дальше функции "loginToSystem" присвоили новое значение и оно теперь выводит prettyName и связывает текущий контекст
    console.log(`I ${prettyName}`)
    console.log(this)
    console.log('...args', ...args)
    fn.call(this, ...args)
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}