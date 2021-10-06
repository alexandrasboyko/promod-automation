// @ts-check

//const {expect} = require('assertior')
//const {userLogin, chekThatImpossibleToLogin} = require('../project/flows/main')
//const {userRegistration, chekThatImpossibleToRegistration} = require('../project/flows/main')
//const {checkThatUserOnAdminPanel} = require('../project/flows/adminPanel')


const {provider} = require('../project')
const {client, I} = provider


describe('describe', () => {

  it('test it', async () => {
    const userD = {username: "admin", password: "admin"}
    await client.get('http://localhost:4000')
    await I.loginToSystem(userD);
    await I.chekThatUserLoggedInSystem(userD.username)

    await client.sleep(13000)
  })

})




