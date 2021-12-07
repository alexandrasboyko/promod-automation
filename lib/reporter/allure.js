// @ts-check
const {ContentType} = require('allure-js-commons')

function stepAllure(stepName, action, ...args) { // функция stepAllure принимает в аргументы функцию из spec-а для отчетности в allure браузера
  const {allure} = require('allure-mocha/runtime')
  return allure.step(stepName, async () => {
    if(args.length) {
      const toLog = args.length === 1 ? args[0] : args
      allure.attachment(`${stepName} entry args`, JSON.stringify(toLog, null, '\t'), ContentType.JSON)
    }
    const results = await action();
    if(results) {
      allure.attachment(`${stepName} execution results`, JSON.stringify(results, null, '\t'), ContentType.JSON)
    }
    return results
  })
  // функция allure.step вернет и отобразит в браузере JSON-вложения для отображения которых будут использованы: название функции, и конструкции преобразования данных входящих аргументов из текущей обрабатываемой функции; и также результата ее выполнения, если такой имеется

  // метод step - нужен для отображения в формате JSON той части репортиртинг системы, в которой содержится название исполняемой функции со вложениями: название функции, что вызывается, ее аргументы
  // если функция возвращает какой-то результат, то отобразит его также во вложении в части отображения результата выполнения функции(вместе с названием этой функции и ее аргументами)


}

module.exports = {
  stepAllure
}