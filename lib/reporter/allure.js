// @ts-check
const {ContentType} = require('allure-js-commons')

function stepAllure(stepName, action, ...args) {
  // функция stepAllure вернет конструкцию для отображения вложений входящих аргументов в текущюю переданную функцию и результата ее выполнения, если такой имеется

  const {allure} = require('allure-mocha/runtime') //деструктуризируем конст allure
  return allure.step(stepName, async () => { // метод step - нужен для отображения в формате JSON той части репортиртинг системы, в которой содержится название исполняемой функции со вложениями: название функции, что вызывается, ее аргументы
    allure.attachment(`${stepName} entry args`, JSON.stringify(args, null, '\t'), ContentType.JSON)
    const result = await action()
    if(result) { // если функция возвращает какой-то результат, то отобразит его также во вложении в части отображения результата выполнения функции(вместе с названием этой функции и ее аргументами)
      allure.attachment(`${stepName} execution result`, JSON.stringify(result, null, '\t'), ContentType.JSON)
    }
    return result // результатом вызова функции будет результат выполнения передаваемой allure.step функции
  })

}

module.exports = {
  stepAllure
}