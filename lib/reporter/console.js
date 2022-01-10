//@ts-check

const {seleniumWD} = require('promod')
const {browser} = seleniumWD

function stepConsole(stepName, action, ...args) {
  console.log("stepName===", stepName)
  return action()
}




module.exports = {
  stepConsole
}