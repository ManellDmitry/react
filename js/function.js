//  f declaration
getData(12, 23);
// getData("dsdsad", "daaawwww", "fffff");
function getData(param1 = "defaul1", param2 = "default2", param3 = "dafault3") {
  console.log(param1);
  console.log(param2);
  console.log(param3);
}

function getParams(...params) {
  console.log("declaration module", this);
  console.log("params", params);
  params.forEach((param) => console.log("param", param));
}
getParams(1, 2, 3);

// expression
const getParamExpression = function (...params) {
  console.log("Expession module", this);
  console.log("params", params);
  params.forEach((param) => console.log("param", param));
};
getParamExpression(1, 2, 3);
// arrow
const getParamExpressionArrow = (...params) => {
  console.log("arrow module", this);
  console.log("params", params);
  params.forEach((param) => console.log("param", param));
};
getParamExpressionArrow(1, 2, 3);

//=========
