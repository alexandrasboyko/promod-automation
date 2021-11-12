// @ts-check

function stepConsole(stepName, action, ..._args) { //функция для отображения в консоль текущей функции, переданной в аргументах (stepName, action, ..._args) ==> эти все аргументы части одной функции
  console.log(stepName)
  return action()
}

module.exports = {
  stepConsole
}