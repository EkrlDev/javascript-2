const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    if ((typeof param === 'string') && (isNaN(param) === false)) {
      return true;
    }
    else {
      return false;
    }// write me!
  },
  addString: function (param) {
    if (typeof param !== "string") return false; // write this early return condition
    if (object.isNumberyString(param)) {
      this.numberyStrings.push(param);
      return true;
    } else {
      this.NaNyStrings.push(param);
      return true;
    }
    // write me! (using this.isNumberyString)
  },
  allStrings: function () {
    return [...this.numberyStrings, ...this.NaNyStrings]// write me!
  },
  evenStrings: function () {
    return this.numberyStrings.filter(element => element % 2 === 0);// write me!
  },
  oddStrings: function () {
    return this.numberyStrings.filter(element => element % 2 !== 0);// write me!
  },
  negativeStrings: function () {
    return this.numberyStrings.filter(element => element < 0);// write me!
  },
  positiveStrings: function () {
    return this.numberyStrings.filter(element => element >= 0);// write me!
  },
  zeroStrings: function () {
    return this.numberyStrings.filter(element => Number(element) === 0);// write me!
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(element => Number(element));// write me!
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map(element => Number(element));// write me!
  },
  sumOfNumbery: function () {
    let sum = function (acc,add) {
      return Number(acc) + Number(add);
    } 
    return this.numberyStrings.reduce(sum, 0);// write me! (using a Array.prototype.reduce())
  },
  sumOfNaNy: function () {
    let sum = function (acc,add) {
      return Number(acc) + Number(add);
    } 
    return this.NaNyStrings.reduce(sum,NaN);// write me! (using a Array.prototype.reduce())// write me!
  },
};


