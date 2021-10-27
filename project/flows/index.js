//@ts-check
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const {prettifyCamelCase} = require('sat-utils')


const initFlows = { //объект, состоящий из функций всех страниц
  ...mainFlows, //объект, состоящий из функций main страницы
  ...tablesFlows //объект, состоящий из функций tables страницы
}

Object.keys(initFlows).forEach((fnName) => {
  const prettyName = prettifyCamelCase(fnName) // для каждой функции изменено имя на удобочитаемое
  const fn = initFlows[fnName]
  initFlows[fnName] = async function(...args) { // для каждого значения функции присвоить ей асинхрон функцию, которая исполнит каждую функцию и отобразит ее название в консоле
    //TODO add logger/reporting system
    console.log(`I ${prettyName}`) //
    return fn.call(this, ...args)
  }
})

const I = {
  ...initFlows // объекту I присваиваем все функции со всех страниц
}


module.exports = {
  I
}