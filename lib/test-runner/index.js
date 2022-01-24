// @ts-check
const mochaIt = global.it
const {attachFailedApplicationCondition} = require('../reporter')

function wrapTestBody(stepTitleName, testCaseBodyCallback) {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this)
    }
    catch(error) {
      await attachFailedApplicationCondition(`FAILED ${stepTitleName}`)
      throw error
    }
  }).bind(this)

}


/**
 * @param {string} stepTitleName stepTitleName
 * @param {()=>Promise<void>|void} testCaseBodyCallback testCaseBodyCallback
 */
function it(stepTitleName, testCaseBodyCallback) {
  mochaIt(stepTitleName, wrapTestBody(stepTitleName, testCaseBodyCallback))
}

/**
 * @param {string} stepTitleName stepTitleName
 * @param {()=>Promise<void>|void} testCaseBodyCallback testCaseBodyCallback
 */
it.only = function(stepTitleName, testCaseBodyCallback) {
  mochaIt.only(stepTitleName, wrapTestBody(stepTitleName, testCaseBodyCallback))
}

module.exports = {
  it
}
