

// this 
// this is bound at run time by called object 
// all keys are strings in object

function checkThis() {
  console.log(this)
}

checkThis();

let obj = {
  a: 10,
  b: 'a string',
  c: true,
  d: function() {
    console.log(this);
  },
  10 : 222,
  true: 'asd',
  e: {
    l: 22,
    m:'asdf',
    n: function() {
      console.log(this);
    }
  }
}

// all keys are strings in object

// console.log(obj.10);
console.log(obj['10']);
console.log(obj['a']);
console.log(obj.a);

console.log(obj.d())


let y = obj.e
console.log(y);

let z = obj.d
console.log(z === obj.d);
//true

console.log(typeof z);
// 'function'


z() // window

console.log(obj.e.n()) // obj