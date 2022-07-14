// lecsical environment setClosure
// lecsical environment getValue
let globalValue = "global value";
function setClosure() {
  let initValue = "inner value";
  function getValue(value) {
    // console.log(value);
    return initValue;
  }
  return { getValue };
  // lecsical environment getValue
}
// lecsical environment setClosure
// console.log("init value", initValue); //err
const clousure = setClosure();
// console.log("clousure", clousure);

//example
const counter = function () {
  let countValue = 0;
  function decrementValue() {
    countValue -= 1;
    document
      .querySelector("body")
      .insertAdjacentHTML("afterbegin", `<h1>${countValue}</h1>`);
  }
  function incrementValue() {
    countValue += 1;
    document
      .querySelector("body")
      .insertAdjacentHTML("afterbegin", `<h1>${countValue}</h1>`);
  }
  return { decrementValue, incrementValue };
};
const newCounter = counter();
console.log("new counter", newCounter);
newCounter.decrementValue();
newCounter.decrementValue();
newCounter.decrementValue();
newCounter.incrementValue();
newCounter.incrementValue();
newCounter.incrementValue();
