
// Arrays

let arr = [1,2,3]
console.log(arr.length);
console.log(arr[0]);

// heterogenos type
let arr2 = [1, 'str', true, [2,2,]]
console.log(typeof arr2[0])


// Looping in arr

console.log('=== for loop');
for(let i=0; i<arr2.length; i++){
  console.log(arr2[i])
}

console.log('=== for of');

for (const val of arr2) {
  console.log(val)
}

console.log('=== for in');

for (const index in arr2) {
  console.log(index, arr2[index])
}


// Add / remove items

let fruits = ['apple', 'mango']
// push(unshift) and pop(shift)
fruits.push('peach')
fruits.pop()

fruits.unshift('kiwi', 'grapes');
console.log(fruits)

// Data changing
// splice,slice, join

let notes = ['do', 'read', 'eat', 'sleep', 'js', 'css', 'ts', 'next'];
console.log(notes);
console.log(notes.slice(2));
console.log(notes.slice(2,6));
// slice actual array is not modified

// splice - mutates the array

// let omit = notes.splice(4)
let omit = notes.splice(4, 2)
console.log(omit);
console.log(notes)


// replacing items with splice
notes.splice(0,3, 'a', 'b', 'c')
console.log(notes);

// Concat - doesnt mutate the array
// console.log(notes.concat('concat', 'aa'))
console.log(notes.concat( ['a', 'b', 'c']))
console.log(notes);