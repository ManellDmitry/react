class User {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }

  validateAge(ageValue) {
    return !ageValue.match("[^0-9]", "g");
  }
  method1() {
    console.log("method1");
  }
  method2() {
    console.log(method2);
  }
}
const classUser1 = new User("Voldemort");
// console.log(classUser1);

const classUser2 = new User("Harry");
// console.log(classUser2);

class UpdateUser extends User {
  static className = "not now obj";
  static classOwnMethod() {
    console.log("меня нет в обьектах");
  }
  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills;
  }
  newClassMethod() {
    console.log(" my new method");
  }
}
const classUpdateUser1 = new UpdateUser("Vasia", "18", ["Moto"]);
console.log(classUpdateUser1);

classUpdateUser1.method1();
console.log("class", UpdateUser.className);
UpdateUser.classOwnMethod();
