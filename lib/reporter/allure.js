// @ts-check
const {ContentType} = require('allure-js-commons')

function stepAllure(stepName, action, ...args) {

  const {allure} = require('allure-mocha/runtime')
  console.log('********allure in STEPAllure=====>')
  return allure.step(stepName, async () => {
    if(args.length) {
      console.log("args in stepAllure in if ===>", args)
      allure.attachment(`${stepName} entry args`, JSON.stringify(args, null, 't'), ContentType.JSON)
      console.log("JSON.stringify(args, null, 't') ======> ", JSON.stringify(args, null, 't'))
    }
    const result = await action()
    console.log("result before if in stepallure", result)
    if(result) {
      console.log("result after if in stepallure", result)
      allure.attachment(`${stepName} execution result`, JSON.stringify(result, null, '\t'), ContentType.JSON)
      console.log("JSON.stringify(args, null, 't') ======> ", JSON.stringify(args, null, 't'))
    }
    console.log('result in stepAllure', result)
    return result
  })
}

module.exports = {
  stepAllure
}