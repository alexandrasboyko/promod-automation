// @ts-check
const {provider} = require('../pages/provider')

const {main} = provider;

/**
 *
 * @param {object} userData
 * @param {string} [userData.username] username
 * @param {string} [userData.password] password
 *
 */
async function userLogin(userData = {}) {
  await main.header.signIn.click()
  const userDataKeys = Object.keys(userData)
  for(const userDataKey of userDataKeys) {
    await main.loginForm[userDataKey].sendKeys(userData[userDataKey])
  }
  await main.loginForm.signIn.click()
}


/**
 *
 * @param {object} userDataReg
 * @param {string} [userDataReg.usernameReg] usernameReg
 * @param {string} [userDataReg.nameReg] nameReg
 * @param {string} [userDataReg.emailReg] emailReg
 * @param {string} [userDataReg.passwordReg] passwordReg
 */
async function userRegistration(userDataReg = {}) {
  await main.header.signUp.click()
  const userDataRegKeys = Object.keys(userDataReg)

  for(const userDataRegKey of userDataRegKeys) {
    await main.registrationForm[userDataRegKey].sendKeys(userDataReg[userDataRegKey])
  }
  await main.registrationForm.signIn.click()
}

module.exports = {
  userLogin,
  userRegistration
}

