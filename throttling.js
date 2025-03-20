
//Debounce

function print(args) {
  console.log("Hi, This is Print here.", args);
}

 function throttling(fn, time) {
 let flag = true;
    return function (...args) {
        if(flag) {
          fn.apply(this,args);
          flag = false;
          timer = setTimeout(() => {
             flag=true;
          }, time);
        }
    };
  };

const call = throttling(print, 1000)

 call();
call();
call();
call();
call();
call();

setTimeout(() => call('h'), 1000) 

