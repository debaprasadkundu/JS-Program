const x = {
  name: 'deba',
}

function print(age, sex) {
  console.log(this.name);
  console.log(age);
  console.log(sex);
}

const res = print.bind(x, 30, 'male');
res();


Function.prototype.myBind = function(obj, ...args) {
  const func = this;
  return function() {
    func.apply(obj, [...args])
  }
  
}

const res2 = print.myBind(x, 25 , 'female');
res2()
