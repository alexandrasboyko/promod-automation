// @ts-check
const {pageProvider} = require('../pages/provider')
const {main} = pageProvider
function loginToSystem(userData = {}) {

  main.click({header: {signIn: null}})
  main.sendKeys({login: userData})
  main.click({login: {signInLog: null}})
}

function registerInSystem(userData = {}) {
  main.click({header: {signUp: null}})
  main.sendKeys({register: userData})
  main.click({register: {signUpReg: null}})
}

module.exports = {
  loginToSystem, registerInSystem
}