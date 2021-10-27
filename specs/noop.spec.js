//@ts-check

const {provider} = require('../project/index')
const {I, client} = provider

describe('test', () => {

  it('test it', async () => {
    await client.get('http://localhost:4000/')
    await I.registerInSystem({emailReg: '21', nameReg: '12', usernameReg: 'admin', passwordReg: 'admin'})
    await client.sleep(13000)
  })
})