const promise1 = new Promise((resolve, reject) => resolve(1));
                                                          
const promise2 = new Promise((resolve, reject) => resolve(2));


function promiseAll(promises) {
	promises.forEach((item) => {
    	item.then((i) => console.log(i) )
    })  
  
}

promiseAll([promise1, promise2]);