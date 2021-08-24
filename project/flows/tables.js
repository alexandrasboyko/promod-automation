// @ts-check
const {expect} = require('assertior')
const {provider} = require('../pages/provider')

const {table} = provider;
/**
 *
 * @param {string} username
 */
async function checkThatUserLoggetIn(username) {
  const greetingMessage = await table.header.name.getText()
  expect(greetingMessage).stringIncludesSubstring(username)
}

module.exports = {
  checkThatUserLoggetIn
}

