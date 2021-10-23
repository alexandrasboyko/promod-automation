const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')
const {admin} = pageProvider

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.name] name
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @param {boolean} [userData.isAdmin]
 * @returns {Promise<void>}
 */

async function createNewUserOnAdminPage(userData) {
  await admin.click({togglers: {newUser: null}})
  await admin.sendKeys({userForm: userData})
  await admin.click({userForm: {create: null}})
}


module.exports = {
  createNewUserOnAdminPage,
}