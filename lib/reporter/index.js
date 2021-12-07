// @ts-check
const {stepAllure} = require('./allure')
const {stepConsole} = require('./console')
const {LOG_ALL} = process.env

/**
 * @param {string} stepName stepName
 * @param { (...args:any[])=>Promise<any>} action action
 * @param  {...any[]} restArgs rest args
 * @returns {Promise<any>} execution results
 */
async function step(stepName, action, ...restArgs) {
  const {allure} = require('allure-mocha/runtime')
  if(allure) {
    return stepAllure(stepName, action, ...restArgs)
  }
  return stepConsole(stepName, action, ...restArgs)
}


/**
 * @param {new (...args: any[])=>any} classToDecorate classToDecorate
 * @param {string} methodName
 * @param {(...args:any[])=>string} messageFn
 */

function decorateBase(classToDecorate, methodName, messageFn) {

  // initFlows[fnName] = async function(...args) { // для каждого значения функции присвоить ей асинхрон функцию, которая исполнит каждую функцию и отобразит результат как конструкцию: с ее названием, аргументами и результатом исполнения в репортер системе и в консоле
  //  return step(`I ${prettyName}`, () =>
  //  fn.call(this, ...args), ...args) }
  if(!LOG_ALL) {
    return
  }
  const methodDescriptor = Object.getOwnPropertyDescriptor(classToDecorate.prototype, methodName) // константа, в которую записывается дескриптор метода (дескриптор --> это объект, от самого метода, в котором по умолчанию записаны некоторые атрибуты c их значениями)

  const originalMethodImplementation = methodDescriptor.value;
  // значение одного атрибута value из дескриптора объекта метода --> этим значением будет функция

  const decorated = async function(...args) {
    const originalCallable = originalMethodImplementation.bind(this, ...args) // присваивание функции контекста и передача в нее аргументов
    const prettyName = messageFn(this.name)
    return step(prettyName, originalCallable, ...args);
  } //  step(stepName, action, ...restArgs)
  Object.defineProperty(decorated, 'name', {value: methodName})
  methodDescriptor.value = decorated;
  Object.defineProperty(classToDecorate.prototype, methodName, methodDescriptor)
}

module.exports = {
  step,
  decorateBase
}