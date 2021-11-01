// @ts-check
const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')

function fieldsToNull(data) {
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = null
    return acc
  }, {})
}
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

async function checkThatAfterFailedLoginFieldsAreFilled(userData) { // функция проверки, что после неудачного логина в систему, поля остаются заполненными
  // возвращаемый, из getData результат, присваиваем объекту {login}
  const {login} = await main.getData({login: fieldsToNull(userData)})
  Object.keys(userData).forEach((key) => {
    expect(userData[key]).toEqual(login[key], `Login form ${key} element should have value ${userData[key]}`) // проверка значения каждого ключа объекта, что был передан в функцию, на соответстие переданного в функцию значения ключа объекта тому значению ключа объекта, что был извлечен с помощью метода "getData" и записан в {login}
  })
}

module.exports = {
  loginToSystem, registerInSystem, checkThatAfterFailedLoginFieldsAreFilled
}