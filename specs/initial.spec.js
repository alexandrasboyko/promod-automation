const {seleniumWD} = require('promod')
const {expect} = require('assertior')
const {browser} = seleniumWD
const {userLogin} = require('../project/flows/main')
const {userRegistration} = require('../project/flows/main')
const {checkThatUserLoggetIn} = require('../project/flows/tables')


describe('describe', () => {


  it('it', async () => {

    await browser.get('http://localhost:4000')
    await userLogin({username: 'admin', password: 'admin'})
    await checkThatUserLoggetIn('admin')
    await browser.sleep(5000)


  })


})



