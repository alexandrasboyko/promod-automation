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
  console.log('classToDecorate=>', classToDecorate, 'methodName=>', methodName, 'messageFn', messageFn)
  // initFlows[fnName] = async function(...args) { // для каждого значения функции присвоить ей асинхрон функцию, которая исполнит каждую функцию и отобразит результат как конструкцию: с ее названием, аргументами и результатом исполнения в репортер системе и в консоле
  //  return step(`I ${prettyName}`, () =>
  //  fn.call(this, ...args), ...args) }
  if(!LOG_ALL) {
    return
  }
  const methodDescriptor = Object.getOwnPropertyDescriptor(classToDecorate.prototype, methodName) // methodName===getData, click, sendKeys
  console.log('methodDescriptor before=>', methodDescriptor)
  // константа methodDescriptor, в которую записывается  дескриптор метода.  Дескриптор --> это объект, от самого метода, в котором по умолчанию записаны атрибуты метода c их значениями)
  const originalMethodImplementation = methodDescriptor.value;
  console.log('methodDescriptor before=>', methodDescriptor)
  // значение атрибута value из дескриптора одного из методов getData, click, sendKeys --> этим значением будет функция

  const decorated = async function(...args) {
    console.log('args=>', args)
    // аргументы для каждой из обрабатываемых функций
    const originalCallable = originalMethodImplementation.bind(this, ...args) // присваивание функции контекста/закрепление за ней контекста и передача в нее ее аргументов
    const prettyName = messageFn(this.name) // messageFn (name) => `${name} execute getData`
    return step(prettyName, originalCallable, ...args);  //  step(stepName===prettyName, action===originalCallable, ...restArgs)
  }
  // const decoratedName = Object.getOwnPropertyDescriptors(decorated)

  //console.log("decoratedName=>", decoratedName)
  //decoratedName=> {
  // length: { value: 0, writable: false, enumerable: false, configurable: true },
  // name: {
  //   value: 'decorated',
  //   writable: false,
  //   enumerable: false,
  //   configurable: true
  // }
  // }

  Object.defineProperty(decorated, 'name', {value: methodName}) // теперь функции decorated будет изменено имя на имя метода getData, click, sendKeys


  // const decoratedName1 = Object.getOwnPropertyDescriptor(decorated, 'name')
  // console.log("decoratedName1=>", decoratedName1)

  console.log("methodDescriptor.value=>", methodDescriptor.value)

  // decoratedName1=> {
  //   length: { value: 0, writable: false, enumerable: false, configurable: true },
  //   name: {
  //     value: 'sendKeys',
  //     writable: false,
  //     enumerable: false,
  //     configurable: true
  //   }
  // }

  methodDescriptor.value = decorated;

  // теперь это перезаписанное значение 'value' асинхрон функции getData, click, sendKeys => на константу decorated, внутри которой в свойстве 'name' будет записана функция декоратора, но название ее будет такое же как и было изначально у метода прототипа: getData, click, sendKeys, потому что мы же название decorated поменяли через Object.defineProperty

  console.log('methodDescriptor.value=>', methodDescriptor.value)

  Object.defineProperty(classToDecorate.prototype, methodName, methodDescriptor)
  console.log('classToDecorate.prototype=>', classToDecorate.prototype)

  // теперь у прототипа класса метод === getData, click, sendKeys, это перезаписанный метод декоратор для запуска step функции для отображения названия метода класса, который используется и исполняется, его запуска(), и его аргументов запуска

  // const methodDescriptor2 = Object.getOwnPropertyDescriptor(classToDecorate.prototype, 'methodName')
  // console.log("methodDescriptor2=>", methodDescriptor2)


}

module.exports = {
  step,
  decorateBase
}