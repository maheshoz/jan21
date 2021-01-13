
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



