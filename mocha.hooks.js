// @ts-check
const {seleniumWD} = require('promod');

before(async function() {
  const {getSeleniumDriver, browser} = seleniumWD;

  const conf = {
    seleniumAdress: 'http://localhost:4444/wd/hub/'
  }

  await getSeleniumDriver(conf, browser);
  global.browser = browser;
});

after(async function() {
  await global.browser.quit();
});