const {isObject, isPrimitive, isString, waitForCondition} = require('sat-utils')

function checkThatStringsInData(dataObj) {
  console.log('1. check dataObj', dataObj) // { header: { isAdminMarker: true } } // { isAdminMarker: true }

  for(const key of Object.keys(dataObj)) {
    console.log('2. key=>', key) //key = header // key=isAdminMarker

    if(isObject(dataObj[key])) { // (isObject(dataObj[key])=(isObject{isAdminMarker:true}) ===>true // (isObject(dataObj[key])=(isObject{true}) ===> true
      console.log('3. in if before result, dataObj[key]', dataObj[key])
      const result = checkThatStringsInData(dataObj[key]) // checkThatStringsInData({isAdminMarker:true}) //
      console.log('4. in if after result, dataObj[key]==', dataObj[key], 'result==', result)
      if(result) {
        console.log('5. in if in result', result)
        return true
      }
    } else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
      console.log('6. in else if')
      return true
    }
  }
  return false
}
const a = {header: {greetingMessage: 'Таблиці, Привіт admin*'}}
console.log(checkThatStringsInData(a))