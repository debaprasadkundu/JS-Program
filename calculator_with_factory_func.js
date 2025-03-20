//Input-

// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

function calculator() {
  this.amount = 0;
  this.lacs = (i) => {
    this.amount += i * 100000;
    return this;
  }
  
   this.crore = (i) => {
    this.amount += i * 10000000;
    return this;
  }
  
   this.thousand = (i) => {
    this.amount += i * 1000;
    return this;
  }
  
   this.value = () => {
    return this.amount;
  }
  
  // return this.amount;
}

function computeAmount() {
  return new calculator();
 
}

// const res = computeAmount().lacs(15);
const res = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

console.log('res', res);