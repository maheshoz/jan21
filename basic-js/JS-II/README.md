

### Closure js

```js
function outer(arg1) {
  let var1 = 10
  let x = 10
  console.log(arguments)

  function inner(arg2) {
    let var2 = 20
    let x = 20;
    //* arguments array always points to the arguments of the current function 
    console.log(arguments)
    console.log(arg1, var1, arg2, var2, x);
    console.log(arguments[0])
    console.log(arguments[0],arguments[1])
  }

  return inner;
}


let x = outer('param1')

// typeof x == 'function'
// x == inner

// scope of arg1 and var1 are from lines 2 to 10

x('param2') 
// we get:  param1 10 param2 20
```



### this keyword
MDN [this docs](https://developer.mozilla.org/en-us/docs/web/javascript/reference/operators/this)

```js
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
```

### String literals
```js
// String literals use `` with ${} 


let s1 = 'we use "javascript" to add interactivity'
let s2 = "we use \"javascript \" to add interactivity"

console.log(s1);
console.log(s2);

let s3 = 'this is \nmultiple lines'
console.log(s3);

let s4 = `this is
a multi line 
string
in 
js
`

console.log(s4);

let js = 'javascript'

let greet = 'hello ' + js;
console.log(greet);

let greet2 = `hello ${js}`
console.log(greet2);

let num = `22 + 33 ${22 + 33}`
console.log(num);

console.log(`date is ${new Date().getDate()}`);

```
### Equality comparisions and obj __proto__

MDN [equlity comparisions link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[equalilty table](https://dorey.github.io/JavaScript-Equality-Table/)

```js
// obj equality

console.log(1 == '1') // true
console.log(1 === '1') // false


console.log(0 == '') //  true, because 0 == Number('')

console.log('false' == false) // false


console.log(Number(false)); // 0
console.log(Number('false')); // NaN

console.log(''== false); // true, both are typecast to 0
console.log(''=== false); // false, strict equality 

console.log('\n' == 0);
console.log('\t' == 0);
console.log(' ' == 0);
console.log('\n' == '\t');

```

obj prototype __proto__
```js

let obj1 = {
  a: 10,
  b: 20,
  c: 30
}

let obj2 = Object.create(obj1)
//obj2 is created using the  object to obj inheritance

console.log(obj2)

console.log(obj2.__proto__)
console.log(obj2.__proto__ == obj1) // true

/*
obj2.a , tries to find a in obj2
if not found, it will try to find in obj2.__proto__
if again not found, it will try in obj2.__proto__.__proto__
if not found .... same as above
it will search untill the __proto__ becomes null

*/

console.log(obj2.__proto__); // object {....}
console.log(obj2.__proto__.__proto__); // object
console.log(obj2.__proto__.__proto__.__proto__); // null


obj2.p = 'pp'
obj2.q = 'qq'
obj2.r = 'rr'

let obj3 = Object.create(obj2)

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj3.p);
console.log(obj3.a); //finds a in  proto of a in obj1

console.log(obj3.__proto__ == obj2); // true
console.log(obj3.__proto__.__proto__ == obj1); // true


console.log(obj2.a);
console.log(obj2.a++);
console.log(obj2);
console.log(obj1.a);

console.log(obj3);
console.log(obj3.__proto__.a);
console.log(obj3.__proto__.__proto__.a);

// we read from the proto but when we write it is added to the current object
// obj2.a = obj2.a + 1
```







