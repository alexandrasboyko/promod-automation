// @ts-check

const {expect} = require('assertior')
//const {userLogin, chekThatImpossibleToLogin} = require('../project/flows/main')
//const {userRegistration, chekThatImpossibleToRegistration} = require('../project/flows/main')
//const {checkThatUserOnAdminPanel} = require('../project/flows/adminPanel')
const {provider} = require('../project')
const {client, I} = provider



describe('Login Form', () => {
  const adminData = {username: "admin", password: "admin"}
  it('test it', async () => {

    await client.get('http://localhost:4000')
    await I.loginToSystem(adminData);
    await I.chekThatUserLoggedInSystem(adminData.username)
    await client.sleep(13000)
  })

  // it('[N] Failed Login', async () => {
  //   const {allure} = require('allure-mocha/runtime');
  //   allure.epic('Some info');
  //   await client.get('http://localhost:4000')
  //   await I.loginToSystem({username: 'admin', password: 'admin', clickSingInButton: false})
  //   await I.checkThatAfterFailedLoginFieldsAreFilled({username: 'admin', password: 'admin'})
  // })

  it.only('[P] Admin creates new user', async () => {
    const {allure} = require('allure-mocha/runtime');
    allure.epic('Some info');
    await client.get('http://localhost:4000')
    await I.loginToSystem({username: 'admin', password: 'admin', clickSingInButton: true})
    await I.navigateToAdmin()
    await I.createNewUserOnAdminPage({
      username: 'test1',
      name: 'test1',
      email: 'test1',
      password: 'test1'
    })
    await client.sleep(13000)
  })
})




