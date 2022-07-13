// constructor
console.log(Number("fddd"));
console.log(Number("100"));
console.log(Number("100fd"));
console.log(Number(100));
console.dir(Number);
console.dir(Number(undefined)); //nan
console.dir(Number(null)); //0
// methods
let value = 3.14159;
console.log("value", typeof value, value);
value = value.toFixed(2);

let num = "5.567px";
console.log("parse float", parseFloat(num)); // string => number
console.log("parse int", parseInt(num)); //string =>number

console.log("isNan", isNaN(num)); // 5.567px is not a numer -true
console.log("isNan", isNaN(value)); //3.1456 is not a number -false

// f метод
// : свойство

console.log(value.length);

// lconsole.log(+"122") станет числом, плохой способ
