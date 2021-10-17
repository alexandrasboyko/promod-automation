// @ts-check

function stepConsole(stepName, action, ..._args) {
  console.log('******* func STEPCONSOLE  =========>')
  console.log("stepName in stepconsole =====>  ", stepConsole)
  console.log("action in stepconsole=======>", action, "_args in stepconsole=====>", _args)
  return action()
}

module.exports = {
  stepConsole
}