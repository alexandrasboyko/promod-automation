// @ts-check

const {pageProvider} = require('../pages/provider')

const {main} = pageProvider

/**
 *@param {object} userData
 *@param {string} [userData.username]
 *@param {string} [userData.password]
 *@returns {Promise<void>}
 */

async function loginToSystem(userData = {}) {
  await main.click({header: {signIn: null}})
  await main.sendKeys({login: userData})
  await main.click({login: {signInLog: null}})
}

/**
 *@param {object} userData
 *@param {string|number} [userData.usernameReg] usernameReg
 *@param {string|number} [userData.nameReg] nameReg
 *@param {string|number} [userData.emailReg] emailReg
 *@param {string|number} [userData.passwordReg] passwordReg
 *@returns {Promise<void>}
 */

async function registerInSystem(userData = {}) {
  await main.click({header: {signUp: null}})
  await main.sendKeys({register: userData})
  await main.click({register: {signUpReg: null}})

}

module.exports = {
  registerInSystem, loginToSystem
}