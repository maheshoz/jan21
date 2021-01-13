

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


```