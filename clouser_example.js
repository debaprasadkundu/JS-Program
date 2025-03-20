function Counter() {
	let count = 0;
	return function() {
  	console.log(++count)
  }

}

const count =  Counter(); 
count();
count();
count();
count();
count();