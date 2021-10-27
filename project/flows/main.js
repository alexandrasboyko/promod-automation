// @ts-check
const {pageProvider} = require('../pages/provider')

//логика работы с main-страницей
const {main} = pageProvider
/**
 * @param {object} userData
 * @param {string} [userData.username]
 * @param {string} [userData.password]
 * @returns {Promise<void>}
 */

async function loginToSystem(userData = {}) {  // функция логина в систему
  await main.click({header: {signIn: null}}) // передача данных в метод click
  await main.sendKeys({login: userData}) // передача данных в метод sendkeys
  await main.click({login: {signInLog: null}}) // передача данных в метод
}

/**
 * @param {object} userData
 * @param {string|number} [userData.usernameReg]
 * @param {string|number} [userData.nameReg]
 * @param {string|number} [userData.emailReg]
 * @param {string|number} [userData.passwordReg]
 * @returns {Promise<void>}
 */

async function registerInSystem(userData) {  // функция регистрации в систему
  await main.click({header: {signUp: null}}) // передача данных в метод click
  await main.sendKeys({register: userData})  // передача данных в метод sendKeys
  await main.click({register: {signUpReg: null}})
}

module.exports = {
  loginToSystem, registerInSystem
}