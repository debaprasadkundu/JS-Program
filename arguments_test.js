function x(y) {
	//const y = 0.1
	return {
  	sum: (...args) =>  { console.log(arguments); arguments[0] + y }
  }
}

const a = x(0.1,0.2);

console.log(a.sum(1,2,3));