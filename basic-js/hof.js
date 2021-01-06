
// Higher Order functions: pass func as params or return a func from a func
function createrGreeter(greeting) {

  function greet(name) {
    console.log(greeting, name)
  }

  return greet
}

let g1 = createrGreeter("Good Mornig")

console.log(g1) // func def
console.log(typeof g1) // function   
console.log(g1()) // Good morning undefined
console.log(typeof g1()) // Good morning undefined , then undefined cuz g1 is a func that return noting i.e undefined