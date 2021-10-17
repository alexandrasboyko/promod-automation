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
    console.log('allure in step in if  =====>  ', allure)
    console.log('stepName in step in if', stepName)
    console.log('action in step in if', action)
    console.log('...restArgs in step in if ', ...restArgs)
    return stepAllure(stepName, action, ...restArgs)
  }
  console.log('    allure in step after if  =====>  ', allure)
  console.log('    stepName in step arter if', stepName)
  console.log('    action in step after if', action)
  console.log('    ...restArgs in step after if ', ...restArgs)
  return stepConsole(stepName, action, ...restArgs)
}


module.exports = {
  step
}