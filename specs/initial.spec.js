const {seleniumWD} = require('promod')
const {expect} = require('assertior')
const {browser} = seleniumWD
const {userLogin, chekThatImpossibleToLogin} = require('../project/flows/main')
const {userRegistration, chekThatImpossibleToRegistration} = require('../project/flows/main')
const {checkThatUserLoggetIn} = require('../project/flows/tables')


describe('describe', () => {
  it('it', async () => {
    await browser.get('http://localhost:4000')
    await userRegistration({usernameReg: 'admin', nameReg: 'admin', emailReg: '', passwordReg: ''})
    await chekThatImpossibleToRegistration()
    await browser.sleep(5000)
  })

  // it('it', async () => {

  //   await browser.get('http://localhost:4000')
  //   await userLogin({username: 'admin', password: 'admin'})
  //   await checkThatUserLoggetIn('admin')
  //   await browser.sleep(5000)
  // })

  // it.only('it', async () => {
  //   await browser.get('http://localhost:4000')
  //   await userLogin({username: 'admin', password: '123'})
  //   await chekThatImpossibleToLogin()
  //   await browser.sleep(5000)
  // })
})




