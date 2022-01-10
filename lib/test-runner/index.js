// @ts-nocheck
const mochaIt = require('allure-mocha/runtime')

function wrapTestCaseBody() {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this)
    }
    catch(error) {
      await attachFailedApplicationCondition()
      throw error
    }
  }).bind(this)
}

function it(testCaseTitle, testCaseBodyCallback) {
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))

}

it.mochaIt = function() {
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

module.exports = {
  it
}