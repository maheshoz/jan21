function greet(name) {
  console.log("hello", name)
}
// Higher Order functions: pass func as params or return a func from a func
function createrGreeter(greeting) {

  function greet(name) {
    console.log(greeting, name)
  }

  return greet
}

let g1 = createrGreeter("Good Mornig")
let g2 = createrGreeter("Good Evening")

console.log(typeof g1)
console.log(typeof g1())
console.log('=============')
console.log(greet("ram"))

console.log( g1('Sam'))
console.log( g2('Ram'))

// when we have-  return  greet('x')
// console.log(g1) // good morning x, 
// console.log(typeof g1) // undefined , as the func returns undefined  
// console.log(g1()) // TypeError:g1 is not a func