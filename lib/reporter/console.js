//@ts-check

function stepConsole(stepName, action, ...args) {
  console.log("stepName===", stepName)
  return action()
}

module.exports = {
  stepConsole
}