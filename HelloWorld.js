const obj = {
  i: 0,
  b: () => { 
  	console.log(this.i)  
  	console.log(this)  
  },
  c: function () {
    console.log(this.i) 
    console.log(this) 
  }
}
obj.b();
obj.c();