// @ts-nocheck
const mochaIt = global.it
const {attachFailedApplicationCondition} = require('../reporter')

function wrapTestCaseBody(testCaseTitle, testCaseBodyCallback) {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this)
    }
    catch(error) {
      await attachFailedApplicationCondition(`FAILED ${testCaseTitle}`)
      console.log('First should be done our required logic')
      throw error
    }
  }).bind(this)
}

/**
 *@param {string} testCaseTitle test case title
 *@param {()=>Promise<void>|void} testCaseBodyCallback test Case Body
  */

function it(testCaseTitle, testCaseBodyCallback) {
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

/**
 *@param {string} testCaseTitle test case title
 *@param {()=>Promise<void>|void} testCaseBodyCallback test Case Body
  */

it.only = function(testCaseTitle, testCaseBodyCallback) {
  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

module.exports = {
  it
}