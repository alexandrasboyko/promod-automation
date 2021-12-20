//@ts-check

const {provider} = require('../project/index')
const {I, client} = provider


describe('Login form', () => {

  it('[P] Success login', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await client.sleep(7000)
    await I.checkThatUserLoggedInSystem(userData.username)
    await client.sleep(11000)
  })
  it('[N] Failed login', async () => {
    const {allure} = require('allure-mocha/runtime')
    allure.epic('Some info')
    const userData = {username: 'admin134', password: 'admin212'}
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await client.sleep(4000)
    await I.checkThatAfterFailedLoginFieldsAreFilled(userData)
    await client.sleep(4000)
  })

  it.only('[P] Admin creates new user', async () => {
    // const {allure} = require('allure-mocha/runtime')
    // allure.epic('Some info')
    await client.get('http://localhost:4000/')
    //const userData = {username: 'admin', password: 'admin'}
    await I.loginToSystem({username: 'admin', password: 'admin'})
    await I.navigateToAdmin()
    await client.switchToTab({title: 'Адмінська сторінка'})
    await I.createNewUserOnAdminPage({
      username: 'admin7',
      name: "admin7",
      email: "admin7",
      password: "admin7"
    })
    await I.checkThatUserInUsersList("admin7")
    await client.returnToInitialTab()
    await client.getTitle()
    await client.sleep(7000)
  })
})