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






