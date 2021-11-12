// @ts-check
const {stepAllure} = require('./allure')
const {stepConsole} = require('./console')

/**
 * @param {string} stepName stepName
 * @param {(...args:any[])=>Promise<any>} action action
 * @param  {...any[]} restAtgs rest args
 * @returns {Promise<any>} execution result
 */

function step(stepName, action, ...restAtgs) { //
  const {allure} = require('allure-mocha/runtime') // если у нас есть allure, который передан в качестве системного аргумента, а передается он в том случае, если он задан в package.json файле, тогда мы обращаемся к функции, которая отобразит подробности текущей исполняемой функции: входящие аргументы и результат выполнения
  if(allure) {
    return stepAllure(stepName, action, ...restAtgs)
  }
  return stepConsole(stepName, action, ...restAtgs) //и отображение работы текущ.функции для отчета в консоли
}

module.exports = {
  step
}