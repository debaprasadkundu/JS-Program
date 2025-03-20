arr = [10, 5, 6, 20, 15, 35, 50, 40];


const even = (item) => item % 2 === 0;

console.log(arr.filter(item => even(item))) 

Array.prototype.myFilter = function(callbackFunc) {
	const numArr = this;
  const res = []
  for(let item of numArr) {
    if(callbackFunc(item)) {
  	res.push(item)
    }
  }
  return res;
}

console.log(arr.myFilter(even))
