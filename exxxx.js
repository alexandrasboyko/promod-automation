const {isObject, isPrimitive, isString} = require('sat-utils')
const {deepStrictEqual, notDeepStrictEqual} = require('assert')

function waitForPageState(data) {
  function checkWhatStringInData(dataObj) {
    console.log('dataObj==>', dataObj)

    for(const key of Object.keys(dataObj)) {
      console.log('key==>', key)
      if(isObject(dataObj[key])) {
        console.log('in if before result: ', 'dataObj[key]==>', dataObj[key])
        const result = checkWhatStringInData(dataObj[key])
        console.log('in if after result:', 'dataObj[key]==>', dataObj[key], 'result==>', result)
        if(result) {
          console.log('in result if')
          return true
        }
      }
      else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
        console.log('in else if')
        return true
      }
    }
    return false
  }

}
const returnArr = () => []
// function isEqual(itemA, itemB) {
//   try {
//     deepStrictEqual(itemA, itemB)
//     return true
//   }
//   catch(error) {
//     console.log('error', error)
//     return false
//   }
// }

deepStrictEqual(typeof returnArr(), 'object')
deepStrictEqual(Array.isArray(returnArr()), true)
try {

  deepStrictEqual(Array.isArray(returnArr()), true)
  deepStrictEqual(returnArr(), [])
  deepStrictEqual(returnArr(), 'object')
  console.log(true)
}
catch(error) {
  console.error(error)
}

//console.log(isEqual(typeof returnArr(), 'object'))
//console.log(isEqual(Array.isArray(returnArr()), true))