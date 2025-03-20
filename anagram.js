
const s1 = 'listen';
const s2 = 'silent';

function isAnagram(word1, word2) {
  if(word1.length !== word2.length) {
    return false;
  }
  return word1.split('').sort().join('') ==  word2.split('').sort().join('')
}



console.log(isAnagram(s1, s2));