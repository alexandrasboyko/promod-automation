let all = {
  num: 1
}
let b = {
  numb: 2
}

let func = function(c) {
  console.log(this.num + c)
  return this.num + c
}

func.call(b, 3)

// const {prettifyCamelCase} = require('sat-utils')

// const initFlows = {
//   loginToSystem: (async (userData = {username: 'admin', password: 'admin'}) => {await console.log('promise1 <void >')}),
//   registerInSystem: (async (userData = {username: 'admin', password: 'admin'}) => {await console.log('promise2 <void>')})
// }

// Object.keys(initFlows).forEach((fnName) => {

//   const prettyName = prettifyCamelCase(fnName)
//   const fn = initFlows[fnName] // значение функции "loginToSystem" присвоили в переменную
//   initFlows[fnName] = async function(...args) { // дальше функции "loginToSystem" присвоили новое значение и оно теперь выводит prettyName и связывает текущий контекст
//     console.log(`I ${prettyName}`)

//     fn.call(this, ...args)
//   }
// })
// function a() {
//   const fn1 = initFlows.loginToSystem()
//   const prettyName1 = "Login To System"
//   initFlows.loginToSystem = async function(...args) { // дальше функции "loginToSystem" присвоили новое значение и оно теперь выводит prettyName и связывает текущий контекст
//     console.log(`I ${prettyName1}`)
//     fn1.call(this, ...args)

//   }
// }


