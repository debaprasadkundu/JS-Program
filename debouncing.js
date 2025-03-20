
//Debounce

function print(args) {
  console.log("Hi, This is Print here.", args);
}

 function debounce(fn, time) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
         fn.apply(this,args);
      }, time);
    };
  };

const call = debounce(print, 1000)

call();
call();
call();
call();
call();
call();

setTimeout(() => call('h'), 1000)

