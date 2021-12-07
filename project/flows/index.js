//@ts-check
const mainFlows = require('./main')
const tablesFlows = require('./tables')
const adminFlows = require('./admin')
const {prettifyCamelCase} = require('sat-utils')
const {step} = require('../../lib')


const initFlows = { //объект, состоящий из функций всех страниц
  ...mainFlows, //объект, состоящий из функций main страницы
  ...tablesFlows, //объект, состоящий из функций tables страницы
  ...adminFlows, //объект, состоящий из функций admin страницы
}

Object.keys(initFlows).forEach((fnName) => {
  const prettyName = prettifyCamelCase(fnName) // для каждой функции изменено имя на удобочитаемое
  const fn = initFlows[fnName]
  initFlows[fnName] = async function(...args) { // для каждого значения функции присвоить ей асинхрон функцию, которая исполнит каждую функцию и отобразит результат как конструкцию: с ее названием, аргументами и результатом исполнения в репортер системе и в консоле
    return step(`I ${prettyName}`, () =>
      fn.call(this, ...args), ...args)
  }
})
//TODO add logger/reporting system

const I = {
  ...initFlows // объекту I присваиваем все функции со всех страниц с конструкцией для отображения тестовых данных в браузере(репортинг системе) и консоле
}


module.exports = {
  I
}