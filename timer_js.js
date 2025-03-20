 
 function count() {
   this.c = 0;
   this.start = function() {
     return ++this.c;
   }
    this.reset = function() {
     return this.c = 0;
   }
 }
 
 const c = new count();
  console.log(c.start())
  console.log(c.start())
  console.log(c.start())
  
  console.log(c.reset())
  
  console.log(c.start())
  console.log(c.start())
  console.log(c.start())