//@ts-check
const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepConsole(stepName, action, ...args) {
  console.log("stepName===", stepName)
  return action()
}

async function attachFailedApplicationConditionConsole(_stepTitleName) {
  // функция принимает в аргументы функцию из spec-а для отчетности в allure браузера
  const url = await browser.getCurrentUrl();
  const localStorage = await browser.executeScript('return JSON.stringify(localStorage)');
  console.log('url=>', url, 'localStorage=>', localStorage)
}


module.exports = {
  stepConsole, attachFailedApplicationConditionConsole
}