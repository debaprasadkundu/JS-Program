const even = (x) => x * 5;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myMap = function (cb) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb.call(this, this[i], i));
  }
  return arr;
};

console.log(num.myMap(even));
