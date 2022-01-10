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

function aqqq() {
  return (async function(functioNEW) {
    functioNEW()
  })
}
aqqq = function('name', functioNEW) {
}

