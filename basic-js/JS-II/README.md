

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
### Equality comparisions

MDN [equlity comparisions link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[equalilty table](https://dorey.github.io/JavaScript-Equality-Table/)

```js

```








