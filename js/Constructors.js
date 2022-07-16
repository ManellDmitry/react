const user = {
  _name: "user",
  login: "login",
  password: "qwerty",
  _email: "user@mail.com",
  phone: "+111155",
  get name() {
    return this._name;
  },
  set name(value) {
    return (this._name = value);
  },
  get email() {
    return this._email;
  },
  set email(value) {
    return (this._email = value);
  },
  validateEmail(value) {
    return value.includes("@");
  },
  setValidEmail(value) {
    if (this.validateEmail(value)) {
      this.name = value;
    }
    return;
  },
};

function createUser(name, login, password, email, phone) {
  return { name, login, password, email, phone };
}

const newUser = createUser("sandra", "qwerty", "1111", "sandra@mail", "212121");
// console.log("new user", newUser);

const getUserName = user.name;
// console.log(getUserName);

user.name = "Tania";
// console.log(user);

const validEmail = user.setValidEmail("tania@gmail.com");
// console.log(user);

function User(name, age = 0) {
  this.name = name;
  this.age = age;
}
User.prototype.validateAge = function (ageValue) {
  const reg = RegExp("[^0-9]", "g");
  return !ageValue.match(reg);
};
User.prototype.method1 = function (ageValue) {
  // console.log("method1");
};
// console.log("User.prototype", User.prototype);

const user1 = new User("Tania");
// console.log(user1);
// console.log(user1.validateAge("12"));

const user2 = new User("Dima");
// console.log(user2);

function UpdateUser(name) {
  // привязываем старый конструктор
  User.call(this, name);
  // добавляем новые свойства , которых не было в старом конструкторе
  this.skills = [];
}
// в прототип нового конструктора записываем прото старого
UpdateUser.prototype = User.prototype;
// перезаписываем конструктор назад на свой , потому что выше перезаписался чужой
UpdateUser.prototype.constructor = UpdateUser;
// теперь можно и методы писать
UpdateUser.prototype.newMethod = function () {
  console.log("new method");
};
const UpdateUser1 = new UpdateUser();
console.log(UpdateUser1);
