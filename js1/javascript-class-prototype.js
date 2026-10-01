const obj1 = {
  name: "ankit",
  age: 22,
};

const obj2 = Object.create(obj1);
obj2.phone = 9782;

console.log(obj1); //   {name: 'ankit', age: 22}
console.log(Object.getPrototypeOf(obj2)); // {name: 'ankit', age: 22} // access obj1 property through obj2 new syntax
console.log(obj2.__proto__); // {name: 'ankit', age: 22} // access obj1 property through obj2 not recomended
console.log(obj2.name); //  ankit

function funcName() {
  console.log("hello");
}
console.log(typeof funcName); // function

// in javascript function = objects + functions
console.log(funcName.name); // similar like objects
// we can add our own property into the functions in js

funcName.callHi = "Call HI";
console.log(funcName.callHi); // --> "Call HI"

console.log(funcName.prototype); // function provide a empty  object space by default and a constructor
// with [[prototype]] we can add key value pair at
// only functions provide prototype property
funcName.prototype.SayHi = "Say hi";
console.log(funcName.prototype);
console.log(funcName.prototype.SayHi);

// new keyword

function createUser(name, age) {
  this.name = name;
  this.age = age;
  return this; // if we dont use doesnt matters
}

createUser.prototype.subject = "English";

const user = new createUser("ankit", 22);
console.log(user);

// new keyword does
//  1) this = {} empty object
//  2) return this // implicit
//  3)  set / reference proto value to prototype of function don't need to do this
// const obj2 = Object.create(obj2.prototype);

// class are fake in js

class CreateUserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printUser() {
    console.log(this.name, this.age);
  }
}

const user1 = new CreateUserClass("ankit kumar Gupta", 22);
user1.printUser();

// inheritance in classes

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log("name is", this.name);
  }
}

class Dog extends Animal {
  constructor(name, age, barkson) {
    super(name, age); // call parent class construtor
    this.barkson = barkson;
  }
  bark() {
    console.log(this.name, "barkson!", this.barkson);
  }
  printName() {
    // same method in both class
    console.log("my dog name is", this.name);
  }
}

const mydog = new Dog("luffy", 5, "Anjali");
mydog.bark();
mydog.printName();

//getter and setter

class Person {
  constructor(name) {
    this.name = name;
  }

  static isPerson() {
    console.log("i am a Person");
  }

  static plannet = "earth";
  get PrintName() {
    console.log(this.name);
  }

  set SetName(name) {
    // take only one parameter if need multiple split throught spaces then destructure it
    this.name = name;
  }
}

const person1 = new Person("ankit");
person1.PrintName; // dont need to call it
person1.SetName = "rohit";
person1.PrintName;
console.log(person1.plannet, "static"); // gives undefined

Person.isPerson(); // direct call without object
console.log(Person.plannet);
