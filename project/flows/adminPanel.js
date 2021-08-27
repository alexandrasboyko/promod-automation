// @ts-check
const {expect} = require('assertior')
const {provider} = require('../pages/provider')

const {admin} = provider;
/**
 *
 * @param {string} username
 */
async function checkThatUserOnAdminPanel(username) {
  const greetingMessage = await admin.header.greeting.getText()
  expect(greetingMessage).stringIncludesSubstring(username)
}

module.exports = {
  checkThatUserOnAdminPanel
}