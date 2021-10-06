// @ts-check
const {pageProvider} = require('../pages/provider')
const {main} = pageProvider

/**
 * @param {object} userData
 * @param {string} [userData.username]
 * @param {string} [userData.password]
 * @returns {Promise <void>}
 */

async function loginToSystem(userData) {
  main.click({header: {: null}})
  main.sendKeys()
}