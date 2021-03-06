// @ts-check
const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')
const {isBoolean} = require('sat-utils')

//логика работы страницы tables
const {tables} = pageProvider

/**
 * @param {string} username username
 * @param {boolean} [isAdmin] isAdmin
 * @returns {Promise<void>}
 */

async function checkThatUserLoggedInSystem(username, isAdmin) { // функция проверки логина в систему
  let greetingMessage = `Таблиці, Привіт ${username}`
  if(isBoolean(isAdmin)) {

    await tables.waitForPageState({header: {isAdminMarker: isAdmin}})

    console.log("!! {header: {isAdminMarker: isAdmin}}==>", {header: {isAdminMarker: isAdmin}}) //проверяет до тех пор, пока условие isAdminMarker не будет равным true, а будет оно равным true, тогда когда isAdminMarke=* (т.е. равно значению *)

    greetingMessage += isAdmin ? '*' : ''
    console.log(' !! greetingMessage==>', greetingMessage)
  }
  await tables.waitForPageState({header: {greetingMessage}})

  // // возвращаемый, из getData результат, присваиваем объекту {header: {greetingMessage}}
  // const {header: {greetingMessage}} = await tables.getData({header: {greetingMessage: null}})

  // expect(greetingMessage).stringIncludesSubstring(username) //проверка значения username на соответствие того включено ли такое значение в строку "greetingMessage"
}

async function navigateToAdmin() {
  await tables.click({header: {toAdmin: null}})
}

module.exports = {
  checkThatUserLoggedInSystem,
  navigateToAdmin
}