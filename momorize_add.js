const add = (a,b) => a + b;

const memorizeAdd = momorizeOne(add);

let map =  new Map();

function momorizeOne(fn) {
  return function(...args) {
    const key = args.join('_');
    if(map.has(key)) {
      console.log('from cache');
      return map.get(key);
    }
    
    const res = fn(...args);
    map.set(key, res);
    return res;
  }
}


console.log(memorizeAdd(1,2))

console.log(memorizeAdd(1,2))

console.log(memorizeAdd(3,2))
console.log(memorizeAdd(4,2))
console.log(memorizeAdd(1,2))

console.log(map)