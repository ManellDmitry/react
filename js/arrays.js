// push unshift pop shift
// const array = [];
// console.log(array);

// const newArray = array;
// console.log("array", array);
// console.log("newArr", newArray);

// console.log(newArray == array);

// array.push("elem1", "elem4");
// console.log(newArray == array);
// console.log("array", array);
// console.log("newArr", newArray);

// array.unshift("elem2", "elem3");
// console.log(array);

// array.pop();
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.shift();
// console.log(array);
// console.log(newArray);

// COPY ARRAYS
const initialArray = ["1", "2", "3"];
// console.log(initialArray);
//1
const nextArray = [...initialArray];
// console.log(nextArray);
// console.log(initialArray === nextArray);
//2
const slicedArray = initialArray.slice();
// console.log("slice", initialArray);
// console.log(initialArray === nextArray);

const shortArray = initialArray.slice(1, 2);
// console.log("short", shortArray);
// console.log(initialArray === shortArray);

// CONCAT

const concatedArray = nextArray.concat(slicedArray, shortArray);
// console.log(concatedArray);
// Slice  не мутирует исх массив
const fullArray = [...initialArray, ...nextArray.slice(1, 2)];
// console.log("fullarray", fullArray);
// Splice  мутирует исходный массив
const splicedDeleteArray = fullArray.splice(-1, 1);
// console.log(splicedDeleteArray);
// console.log(fullArray);

const splisedReplaceArray = fullArray.splice(1, 2, 2, 10);
// console.log("splisedReplaceArray", splisedReplaceArray);
// console.log(fullArray);

const splisedAddArray = fullArray.splice(2, 0, 3, 4, 5, 6, 7, 8, 9);
// console.log("splisedAddArray", splisedAddArray);
// console.log(fullArray);

const resultArray = fullArray.splice(0, 1, 1);
// console.log(resultArray);
// console.log(fullArray);

// SPLIT JOIN
const str = "i love JavaScript";
// console.log("str", str);
// string => array
const stringToArray = str.split(" ");
// console.log(stringToArray);

//  array=> string
const names = ["Tania", "Dima", "Sandra"];
const arrayToString = names.join(" ");
// console.log(arrayToString);

// FUNCTIONAL METHODS
const data = [1, 35, 24, 17, 199, 65];
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// for (let elem of data) {
//   console.log(elem);
// }

const forEachArray = data.forEach((element, index, array) => {
  //   console.log("element", element);
});
// console.log(forEachArray); //undefined

const mapArray = data.map((item) => {
  //   console.log("item", item);
  return item + "";
});
// console.log(mapArray);
// console.log(data === mapArray);

const filterArray = data.filter((elem) => {
  //   console.log(elem);
  return elem % 2 === 0;
});
// console.log(filterArray);

const findElement = data.find((elem) => {
  return elem % 2 !== 0;
});
// console.log(findElement);

const reducedArray = data.reduce((memo, elem) => {
  //   console.log("memo", memo);
  //   console.log("elem", elem);
  return memo + elem;
}, 0);
// console.log("reducedArray", reducedArray);

const reducedNewArray = data.reduce((memo, elem) => {
  //   console.log(elem);
  if (elem <= 50) {
    memo.push(elem);
  }
  return memo;
}, []);
// console.log(reducedNewArray);

const obj = data.reduce((memo, elem) => {
  if (!memo.hasOwnProperty("even") || !memo.hasOwnProperty("odd")) {
    memo["even"] = [];
    memo["odd"] = [];
  }
  if (elem % 2 == 0) {
    memo["even"].push(elem);
  } else {
    memo["odd"].push(elem);
  }
  return memo;
}, {});
// console.log("obj", obj);
//
const reducedString = data.reduce((memo, elem) => {
  return memo + elem;
}, "");
// console.log(reducedString);

//map, filter, reduce(not usually)

// SORT -mutated initial array
console.log(data);
const x = data.sort((min, max) => {
  return min - max;
});
console.log(x === data); //copy by reference

const fruits = ["apple", "peach", "melon", "pineapple"];
console.log(fruits.sort());

// SOME and EVERY
// some ||
// every &&

const someValue = data.some((elem) => {
  return elem % 2 == 0;
});
console.log(someValue);

const everyValue = data.every((elem) => {
  return elem % 2 === 0;
});
console.log(everyValue);
