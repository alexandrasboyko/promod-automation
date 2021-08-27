// @ts-check
const {expect} = require('assertior')
const {provider} = require('../pages/provider')

const {table} = provider;
/**
 *
 * @param {string} username
 */
async function checkThatUserLoggetIn(username) {
  const greetingMessage = await table.header.greeting.getText(username)
  expect(greetingMessage).stringIncludesSubstring(username)
}

module.exports = {
  checkThatUserLoggetIn
}

