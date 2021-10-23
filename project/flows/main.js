// @ts-check
const {pageProvider} = require('../pages/provider')
const {main} = pageProvider
const {expect} = require('assertior')

function fieldsToNull(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = null
    return acc
  }, {})
}
/**
 * @param {object} userData
 * @param {string} [userData.username] username
 * @param {string} [userData.password] password
 * @param {boolean} [userData.clickSingInButton] signIn
 * @returns {Promise<void>}
 */

async function loginToSystem({clickSingInButton = true, ...userData} = {}) {

  await main.click({header: {signIn: null}})

  await main.sendKeys({login: userData})

  if(clickSingInButton) await main.click({login: {signInLog: null}})
}

/**
 *
 * @param {object} userData
 * @param {string|number} [userData.usernameReg] usernameReg
 * @param {string|number} [userData.nameReg] nameReg
 * @param {string|number} [userData.emailReg] emailReg
 * @param {string|number} [userData.passwordReg] passwordReg
 * @returns {Promise<void>}
 */

async function registerInSystem(userData = {}) {
  await main.click({header: {signUp: null}})
  await main.sendKeys({register: userData})
  await main.click({register: {signUpReg: null}})
}

/**
 *
 * @param {object} userData
 * @param {string|number|null} [userData.username] username
 * @param {string|number|null} [userData.password] password
 * @returns {Promise<void>}
 */

async function checkThatAfterFailedLoginFieldsAreFilled(userData = {}) {
  // {
  //   username: 'Test',
  //   password: 'Test'
  // }
  //заміняємо значення в об'єкті з фактичного на null наприклад {a: 10, b: 11} =>  fieldsToNull() => {a: null, b: null}
  const {login} = await main.getData({login: fieldsToNull(userData)})
  //в об'єкт по змінній login ми отримуємо фактичні значення полів, які передали в userData
  // тобто якщо в userData ми передали {username: 'admin'} тоді в login буде об'єкт зі фактичним зчаненням поля username в фрагменті login
  // login = {
  //   username: '10',
  //   password: '10'
  // }
  Object.keys(userData).forEach((key) => {
    // Тобто key в нас поля userData, якщо в userData = {username: 'admin', password: 'admin'}
    // Тоді на першій ітерації будуть порівнюватися 'admin' і фактичне значення поля username на фрагменті login
    expect(userData[key]).toEqual(login[key], `Login form ${key} element should have value ${userData[key]}`)
  })

}

module.exports = {
  loginToSystem, registerInSystem, checkThatAfterFailedLoginFieldsAreFilled
}