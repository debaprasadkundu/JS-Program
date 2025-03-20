

const promise = new Promise((resolve, reject) => {
  const num = Math.random();
  console.log(num);
  if(num > 0.5) {
    resolve("I am resolved")
  } else {
    reject("I am rejected")
  }
})

function handlePromise(retry) {
  promise.then(res => {
    console.log(res)
  }, error => {
    if(retry > 0) {
         console.log(error)
        handlePromise(retry-1)
     
    } else {
      throw new Error('All retries failed');
    }
  })

}


handlePromise(3);