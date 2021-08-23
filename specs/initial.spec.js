const {seleniumWD} = require('promod')
const {expect} = require('assertior')
const {browser, $} = seleniumWD

class HeaderFragment {
  constructor(root = $('.main_header')) {
    this.signIn = root.$('button:nth-child(1)')
    this.signUp = root.$('button:nth-child(2)')

  }
}
class LoginFragment {
  constructor(root = $('.login_form')) {
    this.userName = root.$('input[placeholder="Ім\'я користувача"]')
    this.password = root.$('input[placeholder="пароль"]')
    this.signIn = root.$('.btn.btn-primary')
  }
}

describe('describe', () => {
  const header = new HeaderFragment()
  const loginForm = new LoginFragment()
  it('it', async () => {

    await browser.get('http://localhost:4000')

    await header.signIn.click()
    await loginForm.userName.sendKeys('admin')
    await loginForm.password.sendKeys('adminbdvf')
    await loginForm.signIn.click()


    const isSignInButtonVisible = await loginForm.signIn.isDisplayed()
    expect(isSignInButtonVisible).toEqual(false, 'Login form sign in bbt should not be visible')
    await browser.sleep(5000)


  })
})



