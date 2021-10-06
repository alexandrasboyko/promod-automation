let all = {
  num: 1
}
let b = {
  numb: 2
}

let func = function(c) {
  console.log(this.num + c)
  return this.num + c
}

func.call(b, 3)
