//@ts-check

const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepConsole(stepName, action, ...args) {
  console.log("stepName===", stepName)
  return action()
}

async function attachFailedApplicationConditionConsole(_stepName) {

  const currentUrl = await browser.getCurrentUrl()
  const localStorage = await browser.executeScript('return JSON.stringify(localStorage)')
  console.log(currentUrl, localStorage)
}

module.exports = {
  stepConsole, attachFailedApplicationConditionConsole
}