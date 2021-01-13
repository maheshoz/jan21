// Arrays

let arr = ['js', 'ts', 'nodejs', 'express', 'css'];
console.log(arr);
console.log("arr.length or arr['length']", arr.length);
console.log('first element : ', arr[0]);
console.log('last element : ', arr[arr.length - 1]);

// Loop through array
function loopArray(arr) {
  console.log('==== Array elements');
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  console.log('==== End of array')
}

loopArray(arr);

// Array Methods
// Push ( unshift(ele) add from 0 index/start position), 
//pop( shift()-remove/pop from start), 
//indexOf, includes, ..

// adds ele and returns the length of arr
arr.push('html');
arr.unshift('html5');
console.log(arr)
// removes and returns the popped value
arr.pop();
arr.shift()
console.log(arr)

console.log( arr.indexOf('js'))
// -1 if ele is not present, else return the index

console.log(arr.includes('js'))
// true if found, else false


console.log('=======');

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
