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


console.log([1,2] == [1,2]) // false

console.log('=====');
let arr = [1,2]
let arr2 = arr

console.log(arr2 == arr); // true






