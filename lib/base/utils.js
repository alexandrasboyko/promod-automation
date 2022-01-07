//@ts-check

const {deepStrictEqual} = require('assert');

function isEqual(itemA, itemB) { // строгая проверка на еквивалентность двух переменных
  console.log('=====isEqual=====')
  console.log('itemA==>', itemA, '  itemB===>', itemB)
  try {
    deepStrictEqual(itemA, itemB)
    return true
  }
  catch {
    return false
  }

}

module.exports = {
  isEqual
}