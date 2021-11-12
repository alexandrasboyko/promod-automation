// function getEmptyObj() {
//   return {
//     a: {field: 1},
//     b: {},
//     c: {}
//   }
// }


// function test1(/*tovar*/) {
//   // const {category, ...rest} = tovar
//   const {a} = getEmptyObj()
// }
const {seleniumWD} = require('promod')
const {Button, Input} = require('./lib')
const {BaseCollection} = require('./lib')
const {$, $$, browser} = seleniumWD

// async function learning() {
//   try {
//     const {getSeleniumDriver} = seleniumWD
//     await getSeleniumDriver(browser);
//     await browser.get('http://localhost:4000/')
//     await browser.sleep(5000)
//     console.log(await new Button($('.btn'), 'Button').getData())
//   }
//   finally {
//     await browser.quit();
//   }
// }
// learning()

async function collection() {
  try {
    const {getSeleniumDriver} = seleniumWD
    await getSeleniumDriver(browser);
    await browser.get('http://localhost:4000/')
    await browser.sleep(5000)
    const a = await new BaseCollection($$('input'), 'Buttons', Input).getData()

  }
  finally {
    await browser.quitAll();
  }
}
collection()
