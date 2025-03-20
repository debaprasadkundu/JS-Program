const input = {
  A: (a,b,c) => a+b+c,
  B: (a,b,c) => a-b-c,
  C: (a,b,c) => a+b*c,
  D: {
    E: (a,b,c) => a+b+c
  }
}

function compute(inputObj, a,b,c) {
  let res = {}
  
    for(let key in inputObj) {
      const element = inputObj[key];
      if(typeof element == 'function') {
        res[key] = element(a,b,c);
      } else if (typeof element == 'object') {
         res[key] = compute(element,1,2,3);
      }
  }

  return res;
}

result = compute(input,1,2,3);

console.log('result', result)



// Output-

// {
//   A: 3,
//   B: -1,
//   C: 1,
//   D: { 
//     E: 3
//   }    
// }