
var bird = {
  x: 100,
  y: 200,
  color: 'red',
  eggs : ['one', 'two', 'three', 'four'],
  fly: function() {
      console.log('Flying...', this.x, this.y)
    },
  speak(){
    console.log('yess')
  }
}

console.log(bird.x)
console.log(bird.eggs[3])

console.log('===== Looping through an arr of Obj')
// For Loop 
for(let i =0; i < bird.eggs.length; i++){
  console.log(bird.eggs[i])
}

// For Each Loop 
bird.eggs.forEach(element => {
  console.log(element)
});

bird.eggs.forEach((element,index,arr) => {
  console.log(element , index ,arr)
});

console.log(bird.fly())


