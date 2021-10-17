const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')
const {tables} = pageProvider

/**
 * @param {string} username username
 * @returns {Promise<void>}
 */

async function chekThatUserLoggedInSystem(username) {
  const {header: {greetingMessage}} = await tables.getData({header: {greetingMessage: null}})
  expect(greetingMessage).stringIncludesSubstring(username)
}

async function navigateToAdmin() {
  await tables.click({header:})
}

module.exports = {
  chekThatUserLoggedInSystem
}