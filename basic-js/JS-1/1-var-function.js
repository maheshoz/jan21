
let num = 10;
console.log(num);

let nums = [1,2,3,4,5];
console.table(nums);

// Double quotes or Single quote for strings
console.log("Hello String");
console.log('Hello String');

//JAVASCRIPT 
// Variables, Functions, Hoisting of variables and functions

c = 20; //Global Variable
var d = 30; // Function Scope
let e = 22; // BLock scope 

console.log('==========');
console.log('Block scoped function with let');

// Function Declaration
function funBlockScoped() {
  let a = 5;
  if(a === 5){
    let b = 10;
    console.log("inside ", b);
  }
  // can't access b 
  console.log('outside', b);
}

// funBlockScoped(); 


console.log("===========");
console.log("Function Scope with var");
function funScoped() {
  let a = 5;
  if(a === 5){
    var b = 10;
    console.log("inside ", b);
  }
  console.log('outside', b);
}

// funScoped(); 
console.log("=====Function Hoisting");
square_root(10);
// sqrt_num(10); 


function square_root(num ) {
// function square_root(num = 2) {
  console.log(`square root of ${num}`);
  console.log(Math.sqrt(num));
  // return "square_root function";
  // Better comments extension
  //* if no return statement , then we get undefined
  //! if no return statement , then we get undefined
  //? if no return statement , then we get undefined
  //TODO: if theres no return statement , then we get undefined
  // cuz theres no return , we get nothing which is defined so undefined
  return;
}

square_root(49)

// Function HOISTING
console.log('Function Hoisting');

// Function Expressiong
var sqrt_num = function () {
  console.log("In Second Sqrt Fun");
  return;
}

square_root(10);
sqrt_num(10);


