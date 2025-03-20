arr = [10, 5, 6, 20, 15, 35, 50, 40];


const sum = (item) => item + 10;

 console.log(arr.map(item => sum(item))) 

Array.prototype.myMap = function(callbackFunc) {
	const numArr = this;
  const res = []
  for(let item of numArr) {
  	res.push(callbackFunc(item))
  }
  return res;
}

console.log(arr.myMap(sum))

// console.log(arr.myMap(item => sum(item)))

// arr.myMap(sum)