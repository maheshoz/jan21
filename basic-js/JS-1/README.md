
### js variables, functions, hoisting

```js

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

var sqrt_num = function () {
  console.log("In Second Sqrt Fun");
  return;
}

square_root(10);
sqrt_num(10);

```
Default params [mdn link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

### Arrays
```js
let a = ['red', 'green', 'blue'];

a.length;
a.push('silver');
a.unshift('gray')
a.pop();
a.shift();
a.indexOf('red')
a.includes('red')

if(a[0]== 'red'){
  console.log("found Red color")
} else {
  console.log('Not found');
}

```

### js object, OOP
js object, creating function and variables in it , calling them, looping objects.
objects are used to create JSON
```js
// js object
var bird = {
  x: 100,
  y: 200,
  color: 'red',
  eggs : ['one', 'two', 'three', 'four'],
  fly: function() {
      console.log('Flying...', this.x, this.y)
    },
  speak(){
    console.log('yess')
  }
}

console.log(bird.x)
console.log(bird.eggs[3])

console.log('===== Looping through an arr of Obj')
// For Loop 
for(let i =0; i < bird.eggs.length; i++){
  console.log(bird.eggs[i])
}

// For Each Loop 
bird.eggs.forEach(element => {
  console.log(element)
});

bird.eggs.forEach((element,index,arr) => {
  console.log(element , index ,arr)
});

console.log(bird.fly())
```

Object oriented programming in js , we can use es6 class syntax or functions to create the objects 

```js

// OOP in js

// creating objects without defining the class

// One way
var apple = {
  taste: 'sweet',
  color: 'red',
}

//Another way
function Fruit(taste, color){
  this.color = color;
  this.taste = taste;
}

// new keyword
let mango = new Fruit('sweet', 'yellow');
let orange = new Fruit('sour', 'orange');

console.log(apple);
console.log(mango)


//Class keyword (ES 2015) ,
// these are not hoisted , so use them after declaration
class FruitClass {
  constructor(taste,color){
    this.color = color;
    this.taste = taste;
  }

}

let kiwi = new FruitClass('sour', 'green');
console.log(kiwi)


// Class Expression just like function expression
let FruitClass2 = class {
  constructor(taste, color){
    this.color = color;
    this.taste = taste;
  }
}
// Functions - Declaration, Function Expression
let kiwi2 = new FruitClass2('sour', 'green');

```

### strings
```js

// Strings
//we can use single or double quotes for strings
let str = 'a string'
console.log(str)

// escape characters with \
let ch = "escape \"quote \" in quotes"
console.log(ch);


// use string interpolation with backtics ` ` and ${ }
let js = 'javascript'
let a = `Using string interpolation ${js}`
console.log(a)


// Multiline Strings with ` \` for better readability but prints the str in one line 
// use \n for new line
let line = `the quick \
brown fox \
jumped over \
the lazy dog
`;
console.log(line)

let line2 = `the quick \
brown fox \n \
jumped over \
the lazy dog
`
console.log(line2)


// Methods
// lenght of str
console.log(js.length)

// find str in str
let s = 'this has some data in str'
let key = 'has'

console.log(s);
console.log(s.indexOf(key))
// if -1 , not found

// Search in st before and after index
console.log(s.indexOf('has', 2))
console.log(s.indexOf('has', 8))


let s2 = 'ab aab abbcd ba aab';
console.log(s2.indexOf('ab', 1));
console.log(s2.lastIndexOf('ab'));

// we can use -ve indexing in slice
let mainStr = 'this is a long string'

let smallStr = mainStr.slice(2,6)

console.log(smallStr)

console.log(mainStr.slice(6)) // slices from front
console.log(mainStr.slice(-6)) // slice from back
console.log(mainStr.substr(7,10)) // start index, lenght of chars

```

arr slice,splice, concat, push,pop,shift,unshift .....
