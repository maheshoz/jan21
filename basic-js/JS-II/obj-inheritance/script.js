
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