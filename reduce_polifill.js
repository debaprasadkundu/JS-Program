
  Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    const array = this;
    const length = array.length;
    let accumulator = initialValue !== undefined ? initialValue : array[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
        
      }
    }

    return accumulator;
  };

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15