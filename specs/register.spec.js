//@ts-check

const {provider} = require('../project/index')
const {I, client} = provider

describe('test', () => {

  it.only('test it', async () => {
    const userData = {username: 'admin', password: 'admin'}
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.checkThatUserLoggedInSystem(userData.username)
    await client.sleep(13000)
  })
})