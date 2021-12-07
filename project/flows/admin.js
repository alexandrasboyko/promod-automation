// @ts-check
const {pageProvider} = require('../pages/provider')
const {expect} = require('assertior')

//логика работы страницы admin
const {admin} = pageProvider

/**
 * @param {object} userData
 * @param {string} [userData.username] username
 * @param {string} [userData.name] name
 * @param {string} [userData.email] email
 * @param {string} [userData.password] password
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
  const {usersList: {users}} = await admin.getData({usersList: {users: {action: {username: null}}}})
  console.log(users)
  expect(users.some((item) => {
    return item.username === username
  })).toEqual(true, 'User was found')

}

module.exports = {
  createNewUserOnAdminPage, checkThatUserInUsersList
}