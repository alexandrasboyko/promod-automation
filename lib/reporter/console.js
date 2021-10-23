// @ts-check

function stepConsole(stepName, action, ..._args) {
  return action()
}

module.exports = {
  stepConsole
}