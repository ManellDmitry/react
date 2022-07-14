const arr = ["Dima", "Sandra", "Tania"];
//  0  1  2 index
//  1  2  3
const [, , he] = arr;
// console.log("me", me);
console.log("he", he);
const name = "Sandra";
const user = {
  name: "tania",
  age: 18,
  isOnLine: true,
};
const { isOnLine, name: userName } = user;
console.log("isonline", isOnLine);
console.log("name => userName", userName);
