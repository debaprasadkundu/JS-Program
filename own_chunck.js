//implement own chunk
//input- ([1,2,3,4,5], 1)

// [[1], [2], [3], [4], [5]]

function chunk(arr, size) {
  let res = [];
  let temp = [];
  for(let i=0; i< arr.length; i++) {
    temp.push(arr[i]);

   if(temp.length === size) {
      res.push(temp);
      temp = []
    } else if((res.length === Math.floor(arr.length/size)) && (temp.length == arr.length % size)) {
       res.push(temp);
    }
  }
  return res;
  
}

// const result = chunk([1,2,3,4,5], 1);

console.log(chunk([1,2,3,4,5,6], 1));
console.log(chunk([1,2,3,4,5,6,7], 2));
console.log(chunk([1,2,3,4,5,6,7], 3));
console.log(chunk([1,2,3,4,5,6,7], 4));
console.log(chunk([1,2,3,4,5,6,7], 5));