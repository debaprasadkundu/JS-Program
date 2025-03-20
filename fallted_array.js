const arr = [1,2,3, [4, [5,6]], 7,8];

function flattenArray(inputArray) {
  const tempArr = [];
  
  function calculate(input) {
    for(item of input) {
      // console.log(item)
      if(Array.isArray(item)) {
        calculate(item);
      } else {
        tempArr.push(item);
      }
    }
  }
  calculate(inputArray)
  return tempArr;
}

const result = flattenArray(arr);

// console.log(Array.isArray(arr[3]))

console.log('Result', result);