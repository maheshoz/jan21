
// Higher Order functions: pass func as params or return a func from a func
function createrGreeter(greeting) {

  function greet(name) {
    // console.log(greeting, name)
    console.log(greeting, name())
  }

  return greet
}

function getName() {
  return document.getElementById('nameInput').value;
}

let g1 = createrGreeter("Good Mornig")
let g2 = createrGreeter("Good Evening")

