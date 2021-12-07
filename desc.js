class obj {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  get(...args) {console.log('args from get=>', args)}
}
const args = ['a', 'b', 'c']

class fake_obj {
  constructor() {
  }
  fakeGet(...args) {console.log('args from FAKEget=>', args)}
}

const methodDescriptor = Object.getOwnPropertyDescriptor(obj.prototype, 'get')
//console.log(methodDescriptor)
const oridinal_method_implementation = methodDescriptor.value
//console.log(oridinal_method_implementation)

const originalCallable = oridinal_method_implementation.bind(this, ...args)
console.log(originalCallable())
