// @ts-check
const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')

//логика работы страницы tables
const {admin} = pageProvider

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.name] name
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @param {boolean} [userData.isAdmin] isAdmin
 * @returns {Promise<void>}
 */

async function createNewUserOnAdminPage(userData) {
  await admin.click({togglers: {newUser: null}})
  await admin.sendKeys({userForm: userData})
  await admin.click({userForm: {create: null}})
}

/**
 * @param {string} username
 */

async function checkThatUserInUsersList(username) {
  await admin.click({togglers: {usersList: null}})
  const {usersList: {users}} = await admin.getData({usersList: {users: {action: {username: null}, username}}})
  console.log({usersList: {users: {action: {username: null}, username}}})
}


module.exports = {
  createNewUserOnAdminPage, checkThatUserInUsersList
}