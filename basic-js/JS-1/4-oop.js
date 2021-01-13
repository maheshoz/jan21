
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







