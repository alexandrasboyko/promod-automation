// @ts-check
const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')

//логика работы страницы tables
const {tables} = pageProvider

/**
 * @param {string} username
 * @returns {Promise<void>}
 */

async function checkThatUserLoggedInSystem(username) { // функция проверки логина в систему
  // возвращаемый, из getData результат, присваиваем объекту {header: {greetingMessage}}
  const {header: {greetingMessage}} = await tables.getData({header: {greetingMessage: null}})

  expect(greetingMessage).stringIncludesSubstring(username) //проверка значения username на соответствие того включено ли такое значение в строку "greetingMessage"
}

async function navigateToAdmin() {
  await tables.click({header: {toAdmin: null}})
}

module.exports = {
  checkThatUserLoggedInSystem,
  navigateToAdmin
}