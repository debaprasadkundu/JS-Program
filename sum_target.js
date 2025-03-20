const arr = [3,6,11,3];

const target = 9;

// 0, 1, 3
const set1 = new Set();
for(let i = 0; i < arr.length; i++) {
  	if(arr.indexOf(target - arr[i]) > -1) {
    	set1.add(i);
    }
}

console.log(...set1);