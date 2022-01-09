// @ts-nocheck
const {attachFailedApplicationCondition} = require('../reporter')
const mochaIt = global.it


function wrapTestCaseBody(testCaseTitle, testCaseBodyCallback) {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this)
    } catch(error) {
      console.log('WE ARE HERE')
      await attachFailedApplicationCondition(`FAILED ${testCaseTitle}`)
      throw error
    }
  }).bind(this)
}

/**
 * @param {string} testCaseTitle test case title
 * @param {()=>Promise<void>|void} testCaseBodyCallback test case body callback
 */

function it(testCaseTitle, testCaseBodyCallback) {
  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

/**
 * @param {string} testCaseTitle test case title
 * @param {()=>Promise<void>|void} testCaseBodyCallback test case body callback
 */

it.only = function(testCaseTitle, testCaseBodyCallback) {
  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

module.exports = {
  it
}