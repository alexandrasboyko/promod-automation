// @ts-check

const {expect} = require('assertior')
//const {userLogin, chekThatImpossibleToLogin} = require('../project/flows/main')
//const {userRegistration, chekThatImpossibleToRegistration} = require('../project/flows/main')
//const {checkThatUserOnAdminPanel} = require('../project/flows/adminPanel')
const {provider} = require('../project')
const {client, I} = provider



describe('Login Form', () => {

  // it('test it', async () => {
  //   const userD = {username: "admin", password: "admin"}
  //   await client.get('http://localhost:4000')
  //   await I.loginToSystem(userD);
  //   await I.chekThatUserLoggedInSystem(userD.username)
  //   await client.sleep(13000)
  // })
  // it('test it', async () => {
  //   const userD = {username: "admin", password: "admin"}
  //   await client.get('http://localhost:4000')
  //   await I.loginToSystem(userD);
  //   await I.chekThatUserLoggedtoSys(userD.username)
  //   await client.sleep(13000)
  // })

  // it('[P] Success login', async () => {
  //   await client.get('http://localhost:4000')
  //   await I.registerInSystem({
  //     usernameReg: "admin",
  //     nameReg: "admin",
  //     emailReg: "admin",
  //     passwordReg: "admin"
  //   });
  //   await client.sleep(13000)
  // })

  it.only('[N] Failed Login', async () => {
    const {allure} = require('allure-mocha/runtime');
    allure.epic('Some info');
    await client.get('http://localhost:4000')
    await I.loginToSystem({username: 'admin', password: 'admin', clickSingInButton: false})
    await I.checkThatAfterFailedLoginFieldsAreFilled({username: 'admin', password: 'admin'})
  })
})




