// функции высшего порядка
const user = {
  age: 24,
  password: "йцукен124",
  agreeToTerms: true,
};
function checkAge(user) {
  return user.age > 18;
}
console.log(checkAge(user));

function checkPassword(user) {
  return user.password.length >= 8;
}
function checkTerms(user) {
  return user.agreeToTerm === true;
}

function validate(obj, ...tests) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i](obj) === false) return false;
  }
  return true;
}
console.log(validate(user, checkAge, checkPassword, checkTerms));
//  принимает в качестве аргумента функцию и возвращает функцию
function createValidator(...tests) {
  return function (obj) {
    for (let i = 0; i < tests.length; i++) {
      if (tests[i](obj) === false) return false;
    }
    return true;
  };
}
const validator1 = createValidator(checkAge, checkPassword, checkTerms);
console.log(validator1(user));
// функция которая передаётся другой функции как аргумент наз функцией обратного вызова коллбэк
