// @ts-check
const {expect} = require('assertior')
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

async function chekThatImpossibleToLogin() {
  const message = await main.loginForm.dangermesssage.getText()
  expect(message).toBeString;
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

async function chekThatImpossibleToRegistration() {
  const alert = await main.registrationForm.alertmessage.getText()
  expect(alert).toBeString;
}

module.exports = {
  userLogin,
  userRegistration,
  chekThatImpossibleToLogin,
  chekThatImpossibleToRegistration
}

