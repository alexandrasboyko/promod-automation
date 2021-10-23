// @ts-check
const {stepAllure} = require('./allure')
const {stepConsole} = require('./console')

/**
 *@param {string} stepName stepName
 *@param {(...args:any[])=>Promise<any>} action action
 *@param {...any[]} restArgs rest args
 *@returns {Promise<any>} exection result
 */

function step(stepName, action, ...restArgs) {
  console.log('****** Func STEP in index =====>')
  const {allure} = require('allure-mocha/runtime')
  if(allure) {
    return stepAllure(stepName, action, ...restArgs) // результаты TestBody{где находяться исполняемые тесты-функции}, справа на панели
  }
  return stepConsole(stepName, action, ...restArgs)
}

module.exports = {
  step
}