// log(beta()); // const variables are not hoisted
console.log(beta()) // function is hoisted

function alpha() {
  return 'alpha';
}

function beta() {
  return 'beta';
}

console.log(alpha()) // 'alpha'

//Hoisting :  all functions and variables are hoisted 

// console.log(gamma()) // ReferenceError , variables with let are not hoisted

let gamma = function() {
  return 'gamma';
}

console.log(gamma());

// ============== Polymorphism 
const log = console.log;

function area(height, width) {
  return height * width;
}
log(area(2, 3))
log(area(4)) // only 1 param, 4 * undefined = NaN

function area(height, width) {
  if(width === undefined) { // if(!width)
    return Math.PI * height * height;
  }
  
  return height * width;
}

area(4);

// ============ FALSY VALUES
if(undefined || 0 || null || false) {
  console.log('no value');
}

if(!undefined){
  console.log('!undefined');
}

// ======== arguments keyword : it is available in every function locally,it is an of array type
function hello() {
  log('Hello '+ arguments[0] + arguments[1])
} 

log(hello())
log( hello(1))
log(hello(1,3))

