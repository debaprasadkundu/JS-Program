const obj1 ={
  helloWorld: function() {
    return "Hello World " + this.name;
  },
  name: 'Hello'
}

const obj2 ={
  helloWorld: obj1.helloWorld,
  name: 'Deb'
}

console.log(obj2.helloWorld())

console.log(obj2.helloWorld.call(obj1))

// Hello World Deb
// Hello World Hello