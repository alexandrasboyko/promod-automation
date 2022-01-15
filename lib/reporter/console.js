//@ts-check

const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepConsole(stepName, action, ...args) {
  console.log("stepName===", stepName)
  return action()
}

async function attachFailedApplicationConditionConsole(_stepName) {

  const url = await browser.getCurrentUrl()
  console.log(url)
  const localStorage = await browser.executeScript('return JSON.stringify(localStorage)')
  console.log('url=>', url, 'localStorage=>', localStorage)
}


module.exports = {
  stepConsole, attachFailedApplicationConditionConsole
}