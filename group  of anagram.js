let anagramArr =  ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

/* function isAnnagram(word1, word2) {
if(word1.length != word2.length) {
return false;
}
    return word1.split('').sort().join('') == word2.split('').sort().join('')
} */

function groupAnagrams(arr) {
let result = {};
		for (let word of arr) {
    	let res = word.split('').sort().join('');
      if(result[res]) {
      	result[res].push(word);
      } else {
      	result[res] = [word];
      }
    }
  return result;
  //return Object.values(result);
}

console.log(groupAnagrams(anagramArr));