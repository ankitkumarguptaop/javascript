


console.log("hello world");

// declearation of variable

var firstname = "harshit";
console.log(firstname);

//declearation of variable starting with dollor

var $firstname = "rahul";
console.log($firstname);

var _firstname = "hayat";
console.log(_firstname);

// not acceptable start with number and any symbol except $ and _ 
// var 1name ="anjli";



// var

var _firstname = "prince";
console.log(_firstname);
var _firstname = "murat";
console.log(_firstname);

// let--> this is giving us error because let cannot redecleare same variable but we can re-assign it
/* let _firstname ="prince";
console.log(_firstname);
let _firstname="murat";
console.log(_firstname);  */

// int let ->> we can re-assign it 
// let is better than var

let _firstName = "prince";
console.log(_firstName);
_firstName = "murat";
console.log(_firstName);



// const constant --> not redeclaration  and not reassign

/*const firstName ="prince";
console.log(_firstName);
 firstName="murat";
console.log(_firstName);*/

const pi = 3.14;
console.log(pi);


// how to calculate power of number

const variable = 2;
console.log(variable ** 3); //---> give us 8   || (2 power 3)



//DataTypes in javascript (primitive)

// Number
// String
// Boolean
// null
// undefined
// Symbol
// BigInt


let student = "RoHit";
let num = 22;
let bool = true;
let n = null;
let z;
// Create a Symbol
const mySymbol = Symbol();
// bigint is use to store very large number
var s = BigInt(112);
var m = BigInt(3);
console.log(typeof (s + m));
console.log(s + m);
// also use n at the end to represent bigint 
var j = 5n;
console.log(typeof (j));
console.log(s + j);



console.log(mySymbol);
console.log(typeof student);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof n);
console.log(typeof z);
console.log(typeof mySymbol);





// string
var car = "  bugati  ";

/* indexing 
   b  u  g  a  t  i
   0  1  2  3  4  5
*/

console.log(car[3]);      //---> give us a
console.log(car.length);  //---> give 10 also spaces include

// trim function help us to remove all spaces between string

var newcar = car.trim();
console.log(newcar.length);
console.log(newcar);

// toLppercase and toLowercase 

let customer = "RoHit";
customer = customer.toUpperCase();
console.log(customer);
customer = customer.toLowerCase();
console.log(customer);


var abc = "abcdefghijklmnobcdpqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
console.log(abc.indexOf("bcd"));            // find substring, -1 if doesn't contain 
console.log(abc.lastIndexOf("bcd"));        // last occurance
console.log(abc.slice(1, 6));                // give index 1 to 5 elements



// number to string 
let num1 = 22;
num1 = num1 + ""; // use  + this
console.log(typeof num1);
console.log(num1);
num1 =  "" + num1; // use  + this
console.log(typeof num1);
console.log(num1);
// another way
let num2 = 100;
num2 = String(num2);
console.log(typeof num2);
console.log(num2);


// string to number
let st = "100";
st = +st;
console.log(typeof st);
console.log(st);
//another way
let st1 = "100";
st1 = Number(st1);
console.log(typeof st1);
console.log(st1);



// string concatination
let a = "ankit";
let b = "Gupta";
let fullname = a + " " + b;
console.log(fullname);

var c = "10";
var d = "20";
var add = c + d;
console.log(add);
console.log(typeof add);
var add = +c + +d; // this will convert string into a number
console.log(typeof add);
console.log(add);


var c = 10;
var d = "20";
var add = c + d; // string + number = string
console.log(add);
console.log(typeof add);

var add = d + c; // string + number = string
console.log(add);
console.log(typeof add);

var sub=c-d; // number - string = number
console.log(sub);
console.log(typeof sub);
var sub=d-c; // string - number = number
console.log(sub);
console.log(typeof sub);

var temp= d-c-c+d;
console.log(temp);
console.log(typeof temp);



// template string
var age = 20;
var name2 = "ankit";
// very bad way to do it  insted of this we try to use template function
var str = " my name is " + name2 + "  and i am  " + age + " years old";
console.log(str);

// right way to do this 
var str = `my name is ${name2} and i am ${age}  years old`;
console.log(str);


// Boolean and commparision operators

var c = 10;
var d = 11;
console.log(c > d); //--> false
console.log(c < d);  //--> true

var c = "10";
var d = 10;
console.log(c == d); //--> true  check only value
console.log(c === d); //--> false  check value and datatype both

var c = "11";
var d = 10;
console.log(c != d); //-->  true check only value
console.log(c !== d); //-->  true check value and datatype both

var c = "10";
var d = 10;
console.log(c != d); //-->  false check only value
console.log(c !== d); //-->  true check value and datatype both



// if else

var age1 = 18;
if (age1 > 18) {
   console.log("you are grater than 18");
}
else if (age1 === 18) {
   console.log("you are 18");
}
else {
   console.log("you are less than 18");
}


// ternary operator
var age2 = 22;
// condition ? if condition true : if condition not true
age2 >= 18 ? console.log("you are grater than 18") : console.log("you are lesser than 18");


// switch case 

var num3 = 2;

switch (num3) {

   case 1:
      console.log(1);
      break;
   case 2:
      console.log(2);
      break;
   case 3:
      console.log(3);
      break;
   default:
      console.log("invalid");

}

//increment and decrement 
var f = 5;
console.log(++f);
console.log(f++);
console.log(--f);
console.log(f--);


// loops
// while loop 

console.log(`while loop`);

var i = 1;
while (i <= 10) {
   console.log(`2 * ${i} = ${i * 2}`);
   i++;
}


//do while loop
console.log(`do while loop`);

var i = 1;
do {
   console.log(`2 * ${i} = ${i * 2}`);
   i++;
} while (i <= 10);


// for loop
console.log(`for loop`);

for (var i = 1; i <= 10; i++) {
   console.log(`2 * ${i} = ${i * 2}`);

}


// break and continue

for (var i = 1; i <= 10; i++) {
   if (i === 5) {  //when i=5 it will break the loop and jump outside the loop
      break;
   }
   console.log(`2 * ${i} = ${i * 2}`);
}

for (var i = 1; i <= 10; i++) {
   if (i === 5) {
      continue; // when i=5 then it will skip else continue
   }
   console.log(`2 * ${i} = ${i * 2}`);
}



//-----------------------------------------array-------------------------------------//

var fruit = ["apple", "mango", "banana"];
var number = [1, 2, 3, 4, 4];
var mix = [22, "apple", null, undefined];
console.log(fruit);
console.log(number);
console.log(mix);

fruit[0] = "lichi"; // it changes our original array
console.log(fruit);

//push fast
fruit.push("grapes");  //push function add item at the  last position of array
console.log(fruit);
//pop fast
console.log(fruit.pop());  // pop function remove item from last and return that item
console.log(fruit);


// unshift slow
fruit.unshift("pupaya"); // unshift help us to add item at the beggning of array by shift all the items
console.log(fruit);

// shift  slow
console.log(fruit.shift());
console.log(fruit);

// isarray --> give true is it is array else false
var k = "h";
console.log(Array.isArray(k));
console.log(Array.isArray(fruit));

// array length
console.log(fruit.length);


// primitive vs refrenced datatypes
// * primitive 
var j = 33;
var k = j;
console.log(j);
console.log(k);
++j;
console.log(j); //---> 34 changed
console.log(k); // ---> 33 not changed


// * referenced
var arr = [1, 7, 1, 66, 1];
var arr1 = arr;
console.log(arr);
console.log(arr1);

arr.pop(); // we only change in one array 
console.log(arr);   // changed beacuse of we actullty change 
console.log(arr1);  // changed because of referenced



// how to clone an array
// 1st way
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [].concat(arr);
arr.pop();
console.log(arr);
console.log(arr2);

// 2nd way

var arr = [1, 5, 6, 7, 8];
var arr2 = arr.slice(0); // slice array from 0 index to end of array
arr.pop();
console.log(arr);
console.log(arr2);


// 3rd way spread operator

var arr = [1, 5, 6, 7, 8];
var arr2 = [...arr]; // slice array from 0 index to end of array
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
console.log(arr2);
//other use of spread operator 
//this is spread whole string of numbers and store in array one by one and give indexing  from 0 to n
var arr = [..."123456789"];
console.log(arr);





// if we want to add some more element to the array we use concat() function
var arr = [1, 5, 6, 7, 8];
var arr2 = arr.slice(0).concat(11, 55);
console.log(arr);
console.log(arr2);



// important const array
const arrz = ["apple", "banana"]; //we can use push and pop functions to this constant array but not directly chnged it
//  arrz=["apple"];  this will give us error  because we change actual array
console.log(arrz);
arrz.push("mango");  // we can do this because we change heap array 
console.log(arrz);
arrz.pop();          // we can do this because we change heap array
console.log(arrz);



// (for of loop) this will give us item values of the fruit array.
for (let fru of fruit) {
   console.log(fru);
}

// (for in loop) this will give us item index of the  fruit array.
for (let index in fruit) {
   console.log([index]);
}



//---> destructuring of array

var arrv = ["apple", "mango", "pineapple", "banana", 22, 55, 66];

// here var1 = index zero element 
// var2 = index two element (not one ,because we left the index one element as it is by using this , ,)
// and we use ...Newarray to create new array and store all the left items to it.
var [variable1, , variable2, ...Newarray] = arrv;

console.log(variable1);
console.log(variable2);
console.log(Newarray);


//-----------------------------------object--------------------------------//


// in object key is always like a string 
const obj1 = {
   name: "Ankit kumar gupta",
   rollno: "co21309",
   email: "ankitkumar2003b@gmail.com",
   hobbies: ["gaming", "football", "coding"]
}
// You can change the properties of a constant object:

console.log(obj1);
console.log(obj1.name);
console.log(obj1.rollno);
console.log(obj1.email);
// You can add a property:
obj1.cgpa = 9.66;
console.log(obj1);
// You can change a property:
obj1.cgpa = 10;
console.log(obj1);

// But you can NOT reassign the object:
// obj1={
//    name :"ankit"
// }

// dot vs bracket notation in js diffrence and how to use

const obj2 = {
   name: "Ankit kumar gupta",
   "roll Number": "co21309",

   hobbies: ["gaming", "football", "coding"]
}
console.log(obj2);

// console.log(obj2.roll Number); //cannot do this by using dot notation
console.log(obj2["roll Number"]);

const key = "email";

//obj2["key"]="ankitkumar2003b@gmail.com"; // this is giving us key: 'ankitkumar2003b@gmail.com' but we need email: 'ankitkumar2003b@gmail.com'
// console.log(obj2);
//for use value of variable we use this

obj2[key] = "ankitkumar2003b@gmail.com";
console.log(obj2);


// how to iterate object 

for (let key in obj2) {
   console.log(key);
}
for (let key in obj2) {
   console.log(`${key} : ${obj2[key]}`);

}
for (let key in obj2) {
   console.log(obj2[key]);
}

// for of loop
for (let val of Object.values(obj2)) {
   console.log(val);
}
for (let key of Object.keys(obj2)) {
   console.log(key);
}
for (let key of Object.keys(obj2)) {
   console.log(`${key} : ${obj2[key]}`);

}



// computed properties 


const key1 = "phone number";
const key2 = "semester";

const valuE1 = "8465546525";
const valuE2 = "5th";

//this will not take the value of key1 and key2 
// var Objnew ={
//    key1 : valuE1,
//    key2 : valuE2
// };

// if we want to take value of variable key1 and key2 then we do [key1] and [key2]
var Objnew = {
   [key1]: valuE1,
   [key2]: valuE2
};
console.log(Objnew);

// alternate method is to add item to the list 

var Objnew = {};

Objnew[key1] = valuE1;
Objnew[key2] = valuE2;
console.log(Objnew);



// stread operator in objects 


var objnew1 = {
   name: "ankit",
   sem: "5th"
}
var objnew2 = {
   rollno: "co21309",
   college: "ccet"
}

//clone object
var objnew3 = { ...objnew1 };
console.log(objnew3);

// clone 2 or more objects and also  ad  some other properties 
var objnew31 = { ...objnew1, ...objnew2, cgpa: 9.5 };
console.log(objnew31);

//other use of spread operator 
//this is spread whole string of numbers and store in object one by one and give key's from 0 to n
var objnew22 = { ..."123456789" };
console.log(objnew22);




// other way to clone  object
var objnew1 = {
   name: "ankit",
   sem: "5th"
}

var obj8 = Object.assign({}, objnew1);
objnew1.age = 20;
console.log(obj8);
console.log(objnew1);

// object destructuring

const band = {
   bandName: "led zepplin",
   famousSong: "stairway to heaven",
   year: "1979"
}
// we can do by this
// var var11=band.bandName;
// var var22=band.famousSong;

// alternate method of destructuring

var { bandName, famousSong } = band;
console.log(bandName);
console.log(famousSong);

// with the help of other variable
var { bandName: var11, famousSong: var22, ...restproperties } = band;
console.log(var11);
console.log(var22);
// all rest properties goes to restproperties named object
console.log(restproperties);
console.log(Array.isArray((restproperties))); //--> false


//--- object inside array destructuring---
var ARRAY = [
   { userid: 1, name: "rohan das", age: 20 },
   { userid: 2, name: "aman", age: 12 },
   { userid: 3, name: "mahesh dalle", age: 45 }
]

var [object1, object2, object3] = ARRAY;

console.log(object1);
console.log(object2);
console.log(object3);

// if you want to access only some key values so do like this

var [{ name, age }, , object3] = ARRAY;

console.log(name);
console.log(age);
console.log(object3);


//---------------------------------->functions<------------------------------//


// this is function decleration
function functionhello() {
   console.log("hello");
}


functionhello();



function sum(num1, num2) {
   return num1 + num2;
}

console.log(sum(1, 5));


// change to function expression
var sayhello = function () {
   console.log("Hello in function expression");
}
sayhello();

var sum = function (num1, num2, num3) {
   return num1 + num2 + num3;
}
console.log(sum(1, 5, 3));




// arrow functions-------------------->
//imp
// sayyhello(); if we calling a arrow function before its decleration it will give us an error
var sayyhello = () => {
   console.log("hello ankit");
}
sayyhello();

var sum = (num1, num2) => {
   return num1 + num2;
}
console.log(sum(1, 9));

// if we have only one parameter the we can or cannot use brackets()
var even = number => {
   return number % 2 === 0;
}
console.log(even(48));


// if we have only one line function then we insted of typing return we directly write expression like this
var odd = number => number % 2 !== 0;
console.log(odd(13));





// hosting ------->

sayyhellooo();
function sayyhellooo() {
   console.log("hello ankit hosting in function decleration");
}
sayyhellooo();

//sayyyhello();if we calling a  function expression before its decleration it will give us an error

var sayyyhello = function () {
   console.log("hello ankit hosting in function expression");

}
sayyyhello();

// sayyhelloooo(); if we calling a arrow function before its decleration it will give us an error
var sayyhelloooo = () => {
   console.log("hello ankit hosting in arrow function");
}
sayyhelloooo();


// in case of var
console.log(helloo); //----> give undefined
var helloo = "hello Ankit";
console.log(helloo); //-----> give hello ankit

// in case of (const and let)
// console.log(helloo); //----> give error
// let helloo="hello Ankit";
// console.log(helloo); //-----> give hello ankit


// function inside functions------------------->


var app = () => {
   const add = function (num1, num2) {
      return num1 + num2;
   }
   console.log("you are inside app");
   console.log(add(4, 5));

}
app();


// lexical scope or environment in js --------IMP---------->
let lexical = "value1";

function func1() {

   function func2() {
      let lexical = "value2";
      console.log(lexical);
   }
   function func3() {
      let lexical = "value3";
      console.log(lexical);
   }
   function func4() {
      console.log(lexical);
   }

   console.log(lexical);
   func2();
   func3();
   func4();

}
func1();
// ------------------------------------------------------------------------------------------------------------

//---------------------------------------->clouser property<-----------------------------
{
   /*A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
    Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. 
    A block is also treated as a scope since ES6  
   */

   let a = 'static';

   function f1() {
      console.log(a);
   }

   function f2() {
      let a = 'dynamic';
      f1();
   }
   f2();




   // its take reference of variable if variable change then its value changes 

   let b = 'static';

   function f11() {
      console.log(b);
   }

   function f22() {
      b = 'dynamic';
      f11();
   }

   f22();



   let c = 'static';
   function f111(c) {
      console.log(c);
   }

   function f222() {
      let c = 'dynamic';
      f111(c);       // it take value from its lexical scope
   }

   f222();
}






// block scope vs function scope ------------------------------>
// let and const are block scope
// var is function scope
{
   let varq = "orange"
   console.log(varq);
}
// console.log(varq); cannot do this in case of let and const because they are block scope

{
   let varq = "banana"
   console.log(varq);
}

{
   var varq1 = "orange"
   console.log(varq1);
}

console.log(varq1);

{
   var varq1 = "banana"
   console.log(varq1);
}

console.log(varq1);


// function myapp1(){
//  if(true){
//       let varqq="variable" // let and const are  block scope so this will give us error
//       console.log(varqq);
//    }
//    console.log(varqq);


// }
// myapp1();

function myapp() {
   if (true) {
      var varqq = "variable";// let and const are  block scope so this will give us error
      console.log(varqq);
   }
   console.log(varqq);

}
myapp();
// ------------------------------------------------------------------------------------------------------




// default parameters---------------------->

var sum = (num1, num2 = 0) => {
   return num1 + num2;
}

console.log(sum(4));
console.log(sum(4, 2));

// rest parameters

var print = (a, b, ...c) => {
   console.log(a);
   console.log(b);
   console.log(c);
}

print(1, 2, 3, 4, 5, 6, 7, 8);
// all the rest parameters goes to c and make an array

//important 
var add = (...a) => {
   let total = 0;
   for (let i = 0; i < a.length; i++) {
      total = total + a[i];
   }
   return total;
}

console.log(add(1, 2, 3, 4, 5, 100, 10));
// ----------------------------------------------------------------------------------------------------





// parameter destructuring


var obbj = {
   name: "ankit",
   age: 20
}

function obj(obj) {
   console.log(obj.name);
   console.log(obj.age);
}

obj(obbj);


// destructuring  parameter
function objj1({ name: n, age: a }) {
   console.log(n);
   console.log(a);

}
objj1(obbj);




// callback function also called higher order function---------->

{
   function funct1() {
      console.log("hello callback function");
   }

   let funct2 = function (a) {
      a();
   }

   funct2(funct1);

   function addnum(num1, num2) {
      return num1 + num2;
   }

   function addnum3(a, num3) {
      return a + num3;
   }
   console.log(addnum3(addnum(1, 8), 3));




   // function returning function also called higher order function ------------->

   let heelloo = function () {
      console.log("hello");
   }

   let returnhello = function () {
      return heelloo;
   }
   //important
   returnhello()();
   let ans = returnhello();
   ans();


}



//------------------------------------------->important array methods<----------------------------------------------

/*
foreach 
map
filter
reduce
slice

*/


// -------------------------------------------->foreach <------------------------------>

{
   const arr = [1, 2, 5, 9, 5];
   function multiby2(arr, i) {
      console.log(`${arr}*2 = ${arr * 2} and index is ${i}`);
   }

   // first parameter is value at that index  and second parameter is index ....
   arr.forEach((element, index) => {
      multiby2(element, index);
   });


   const objarr = [
      { name: "ankit", age: 20 },
      { name: "mohit", age: 23 },
      { name: "harshita", age: 18 },
      { name: "ankita", age: 17 }
   ]
   // we can define function inside method also 
   objarr.forEach((element, index) => {
      console.log(element.name, element.age, index);
   })

}

// ---------------------------------------->  MAP  <-------------------------------------------------->

{

   // The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.


   const arr = [
      { name: "ankit", age: 20 },
      { name: "mohit", age: 23 },
      { name: "harshita", age: 18 },
      { name: "ankita", age: 17 }
   ]


   function print(arr, index) {
      return (`name is ${arr.name} and age  ${arr.age} and index is ${index}`);
   }

   let newarr = arr.map(print);
   console.log(newarr);

   // we can also define function inside the  method 
   let newarr1 = arr.map((arr) => {
      return arr.name;
   });
   console.log(newarr1);


}


// <---------------------------------------------filter------------------------------------------>


{


   //The filter() method creates a new array filled with elements that pass a test provided by a function.
   //The filter() method does not execute the function for empty elements.
   //The filter() method does not change the original array. 


   let arr = [2, 1, 3, 4, 2, 5, 7, , 1, 1, 1, 18, 9, 56, 55];
   let iseven = function (number) {
      return number % 2 === 0;
   }
   let evenarr = arr.filter(iseven)
   console.log(evenarr);

   let oddarr = arr.filter(function isodd(number) {
      return number % 2 !== 0;

   });

   console.log(oddarr);
   console.log(arr);// original array not changed

}

//------------------------------------------>reduce<-------------------------------------------------
{

   //The reduce() method executes a reducer function for array element.

   //The reduce() method returns a single value: the function's accumulated result.

   // The reduce() method does not execute the function for empty array elements.

   // The reduce() method does not change the original array.

   // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

   let arr = [2, 3, 4, 5, 6, 7, 8];

   let sum = arr.reduce((previousval, currentval) => {
      return previousval + currentval;
   });

   /*
          previousval/accumulator        currentvalue    returnvalue
                      2                       3                5
                      5                       4                9
                      9                       5                14
                      14                      6                20
                      20                      7                27
                      27                      8                35

   */
   let sum1 = arr.reduce((previousval, currentval) => {
      return previousval + currentval;
   }, 100);


   console.log(sum); //---->35 
   console.log(sum1); //----> 100+35=135 initial value of accumulator is 100 here



   let itemscart = [
      { itemid: 1, price: 600 },
      { itemid: 2, price: 100 },
      { itemid: 3, price: 600 },
      { itemid: 4, price: 200 },
   ];

   let totallprice = itemscart.reduce((totalprice, CurrentItem) => {
      return totalprice + CurrentItem.price;
   }, 0);
   console.log(typeof (totallprice));
   console.log(totallprice);


}







//------------------------------------->sort method<---------------------------------------------
{

   // The sort() sorts the elements of an array.
   //The sort() overwrites the original array.
   //The sort() sorts the elements as strings in alphabetical and ascending order.


   let arr = [1, 2, 4, 333, 100, 22, 23, 11, 34, 4, 6, 6, 7];
   console.log(arr);
   arr.sort();
   console.log(arr);
   let arr1 = ["ankit", "raj", "zadd", "mohit", "ranveer", "Ankit"];
   arr1.sort();
   console.log(arr1); //-->this give correct sorting of array of strings

   // sort method compares only one first element then next 
   //[1, 100, 11, 2, 22, 23, 333, 34, 4, 4, 6, 6, 7]


   let arr2 = [1, 500, 4, 3, 10, 227, 25, 111, 34, 1, 44, 600, 71];
   arr2.sort((a, b) => {
      return a - b;      // for accending order (a-b)
   });
   console.log(arr2);


   arr2.sort((a, b) => {
      return b - a;      // for decending order (b-a)
   });
   console.log(arr2);




   // let take an usefull example
   let product = [
      { id: 3, name: "fridge", price: 18000 },
      { id: 1, name: "AC", price: 25000 },
      { id: 8, name: "Iphone", price: 150000 },
      { id: 2, name: "FAN", price: 5000 },
      { id: 4, name: "cover", price: 1600 }
   ]

   // product.sort((a,b)=>{      
   //    return a.price-b.price;
   // })
   // console.log(product);
   // the above sorting method change our original product array if want to store new sorted items into a new array then we take help of colne array



   // here we clone the acctual array and then sort it

   let SortedItem = [...product].sort((a, b) => a.price - b.price);
   console.log(SortedItem);
   console.log(product);


}


/// --------------------------------->Find Method<--------------------------------------
{

   /*
   The find() method returns the value of the first element that passes a test.
   The find() method executes a function for each array element.
   The find() method returns undefined if no elements are found.
   The find() method does not execute the function for empty elements.
   The find() method does not change the original array.
   */


   let arr = ["cat", "rat", "jiraff", "zebra", "lion"];

   let myfunc = function (element) {
      return element.length === 3;
   }

   // this will find the element whose length is 3 if its present then it will display its first occurence otherwise return undefined 
   console.log(arr.find(myfunc));


   let product = [
      { id: 3, name: "fridge", price: 18000 },
      { id: 1, name: "AC", price: 25000 },
      { id: 8, name: "Iphone", price: 150000 },
      { id: 2, name: "FAN", price: 5000 },
      { id: 4, name: "cover", price: 1600 }
   ]
   //here we  are passing name = "AC" like this  to find item

   let findItem = function (element) {
      return element.name === this.name;
   }
   console.log(product.find(findItem, { name: "AC" }));


}



// ----------------------------------------->every method<------------------------------------------------

{
   /* 
   The every() method executes a function for each array element.
   The every() method returns true if the function returns true for (all elements).
   The every() method returns false if the function returns false for one element.
   The every() method does not execute the function for empty elements.
   The every() method does not change the original array 
   */


   let num = [];

   let even = num.every((element) => {
      return element % 2 === 0;
   })

   console.log(even);
   if (even) {
      console.log("All the elements in the array is even");
   }
   else {
      console.log("there is exist at least one odd number");

   }


   let product = [
      { id: 3, name: "fridge", price: 18000 },
      { id: 1, name: "AC", price: 25000 },
      { id: 8, name: "Iphone", price: 150000 },
      { id: 2, name: "FAN", price: 5000 },
      { id: 4, name: "cover", price: 1600 }
   ]

   function isprice(product) {
      return product.price <= this.price;
   }

   console.log(product.every(isprice, { price: 100000 }));


}


// ------------------------------------> some method <----------------------------------------------
{
   /*The some() method checks if any array elements pass a test (provided as a callback function).
   The some() method executes the callback function once for each array element.
   The some() method returns true (and stops) if the function returns true for one of the array elements.
   The some() method returns false if the function returns false for all of the array elements.
   The some() method does not execute the function for empty array elements.
   The some() method does not change the original array. */

   //                      syntax
   // array.some(function(value, index, arr), this)

   let num = [1, 3, 5, 7, 8];

   let atleastOneEven = num.some((element) => {
      return element % 2 === 0;
   });

   console.log(atleastOneEven);



   let product = [
      { id: 3, name: "fridge", price: 18000 },
      { id: 1, name: "AC", price: 25000 },
      { id: 8, name: "Iphone", price: 150000 },
      { id: 2, name: "FAN", price: 5000 },
      { id: 4, name: "cover", price: 1600 }
   ]
   let Luxury = product.some(function (element) {
      return element.price >= this.price;
   }, { price: 100000 });
   console.log(Luxury);


   // another method to pass an argument 
   function lux(price) {
      return (product) => product.price == price;
   }

   let new1 = product.some(lux(150000));
   console.log(new1);

}

// <=----------------------------------------fill method---------------------------------------------->
{
   /* Description
   The fill() method fills specified elements in an array with a value.
   The fill() method overwrites the original array.
   Start and end position can be specified. If not, all elements will be filled.
   //
   
   (Syntax)
   array.fill(value, start, end) 
   */

   let num = [1, 2, 3, 4, 5, 6, 7, 8];

   console.log(num);
   num.fill(100, 0, 3);
   console.log(num);

   let dynamicArray = new Array(10).fill(2)
   console.log(dynamicArray);


}


// --------------------------------------->Splice method<------------------------------------------------
{

   /*
   The splice() method adds and/or removes array elements.
   
   The splice() method overwrites the original array.
   
   Syntax
   array.splice(index, howmanyelementto be deleted, item1, ....., itemX) */
   //(startindex , deleteindex, insertedelemEntindex1,insertedElementindex2,insertedElementindex3)
   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   let DeletedArray = num.splice(2, 3, 13, 14, 15);
   console.log(num);
   console.log("Splice method return all the deleted elements in form of array", DeletedArray);

}





// ARRAY LIKE OBJECT -->STRING THEY ARE ITRABLES 
//itrables in js MAP AND SET

// -------------------------------------------------------->SET <---------------------------------------------------------------- 
{
   // OBJECTS ARE NOT ITERABLES 
   // set is iterables 
   // set is used for unique element
   //A JavaScript Set is a collection of unique values. 
   // Each value can only occur once in a Set. A Set can hold any value of any data type. 
   // order is not maintained
   /*Method	Description
   new Set()	Creates a new Set
   add()	Adds a new element to the Set
   delete()	Removes an element from a Set
   has()	Returns true if a value exists
   clear()	Removes all elements from a Set
   forEach()	Invokes a callback for each element
   values()	Returns an Iterator with all the values in a Set
   keys()	Same as values()
   entries()	Returns an Iterator with the [value,value] pairs from a Set
   Property	Description
   size	Returns the number elements in a Set */

   const createset = new Set();
   createset.add(1);
   createset.add(2);
   createset.add(33);
   createset.add(8);
   createset.add(8); //if we add same value to the set it will not added to the set
   createset.add(["item1", "item2"]); //if we add same array to the set it will added to the set because the reference of these tow arrays are diffrent
   createset.add(["item1", "item2"]);
   createset.add("abc");

   console.log(createset);

   if (createset.has(2)) { // has method return true if element is present else false
      console.log("2 is present in the set");
   }
   else {
      console.log("2 is not present in the set");

   }


   for (let elemen of createset) {
      console.log(elemen);
   }
   let myarray = [1, 2, 2, 3, 4, 4, 4, 5, "abc"];


   let unique = new Set(myarray);

   console.log("size of set is :->", unique.size);
   console.log(unique instanceof Set); // check it is set

   // console.log(unique.length);---->(give undefined) length fn not def

   for (let elemen of unique) {
      console.log(elemen);
   }
   for (let elemen of unique.entries()) {
      console.log(elemen);
   }
}







//-------------------------------------------------------MAPS------------------------------------------------

{
   /*A Map holds key-value pairs where the keys can be any **(datatype).
   
   A Map remembers the original insertion order of the keys.
   
   A Map has a property that represents the size of the map.
   
   Map Methods
   Method	Description
   new Map()	Creates a new Map object
   set()	Sets the value for a key in a Map
   get()	Gets the value for a key in a Map
   clear()	Removes all the elements from a Map
   delete()	Removes a Map element specified by a key
   has()	Returns true if a key exists in a Map
   forEach()	Invokes a callback for each key/value pair in a Map
   entries()	Returns an iterator object with the [key, value] pairs in a Map
   keys()	Returns an iterator object with the keys in a Map
   values()	Returns an iterator object of the values in a Map
   Property	Description
   size	Returns the number of Map elements */



   let createmap = new Map();


   createmap.set("id", 1021);
   createmap.set("name", "ankit");
   createmap.set(1, "position");
   let arr = [1, 2, 3];
   createmap.set(arr, "xyz");
   console.log(createmap.get(arr));
   // A Map holds key-value pairs where the keys can be any **(datatype).
   // Here last key is type of integer which is not possible in object

   console.log(createmap);
   console.log(typeof createmap);
   console.log(createmap instanceof Map);


   for (let keys of createmap.keys()) {
      console.log(keys, typeof (keys));

   }
   for (let [key, val] of createmap) {
      console.log(key, val);
   }


   for (let keyvalpair of createmap.entries()) {
      console.log(keyvalpair);
      console.log(Array.isArray(keyvalpair));
   }

   createmap.forEach((val, key) => {
      console.log(key, val)
   })

   // other way to add key value pair direct to MAP
   let createnewmap = new Map([["firstname", "ankit"],
   ["age", 20],
   ["branch", "CSE"]]);

   createnewmap.forEach((val, key) => {
      console.log(key, val)
   })





   // add extra information to map 

   let person1 = {
      "name": "harshit",
      "age": 30,
      "gender": "male"
   };


   let extrainfo = new Map();
   extrainfo.set(person1, { "state": "chandigarh", "cgpa": 9.2 });
   console.log(extrainfo);
   console.log(extrainfo.get(person1).state);
   console.log(person1.age);


}








{

   // other way to clone  object
   let objnew1 = {
      name: "ankit",
      sem: "5th"
   }

   let obj8 = Object.assign({}, objnew1);
   objnew1.age = 20;
   console.log(obj8);
   console.log(objnew1);

}




// optional chaining 
/*The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null,
 the expression short circuits and evaluates to undefined instead of throwing an error. */
{

   const userInfo = {
      "name": "ankit",
      "age": 20,
      "address": {
         "houseNumber": 1253
      }
   }

 console.log(userInfo.name);
 console.log(userInfo.address.houseNumber) 
 // in real time senarios some properties are not declared at initially after run time its declares so we use this notation (.?) the expression short circuits and evaluates to undefined instead of throwing an error
//  console.log(userInfo.address.state.village) ------> give error 
 console.log(userInfo?.address?.state?.village) //---------> give undefined


}

// ------------------------------------------- methods ---------------------------------------------------------
{
   // let name ="ankit";

   // methods are functions inside object.

let person1={
   "name": "Ankit kumar gupta",
   "age": 20,
   userinfo : function(){
      console.log(`Name of the user is ${this.name} and age is ${this.age}`)
   }
}


let person2={
   "name": "rohan",
   "age": 22,
   userinfo : function(){
      console.log(`Name of the user is ${this.name} and age is ${this.age}  `);
      console.log(this);
   }
}

person1.userinfo();
person2.userinfo();


// the above code is bad practice because we create same function so many times 
let func=function(){
   console.log(`Name of the user is ${this.name} and age is ${this.age}`)
}

let person3={
   "name": "Aryan",
   "age": 20,
   userinfo : func
}


let person4={
   "name": "jenni",
   "age": 22,
   userinfo : func
      
}

person3.userinfo();
person4.userinfo();


}



// this keyword in javacript
{
   "use strict"

   console.log(this);
   console.log(this===window); //--->true


   function myfunc(){
      console.log("hello");
   }
   window.myfunc();//------ give hello

   function myfunc2(){
       "use strict"

      console.log(this);
   }
   myfunc2();

}




// call , apply , bind

{
   let person1={
      "name": "Ankit kumar gupta",
      "age": 20,
      userinfo : function(gender,branch){
         console.log(`Name of the user is ${this.name} and age is ${this.age} , gender is ${gender} and branch is ${branch}`)
      }
   }
   
   
   let person2={
      "name": "mohit",
      "age": 22,
    
      }
   

 // we want to use userinfo function in person2 object then we do this 
 // here person1 call the function as person2

 person1.userinfo.call(person2, "male","cse");
 person1.userinfo.call(person1, "male","ece");


// apply is same as call the diffrencce is we pass array of all arguments 

 person1.userinfo.apply(person2,["male","ece"]);


 // bind method  return  a funtion  
let var1=person1.userinfo.bind(person2,"male","mech");
var1();

person1.userinfo.bind(person2,"male","mech")(); // also works

}





// small warning
{
   let person2={
      "fname": "rohan",
      "Age": 22,
      userinfo : function(){
         console.log(`Name  is ${this.fname} and age is ${this.Age}  `);
      
      }
   }
   
// incorrect
let var11=person2.userinfo;
//this will not give you person2 details because you copy the function only
var11(); // --> give undefined

 
// correct
let var2=person2.userinfo.bind(person2);

var2();

}


{
 let objs= {
  "name" : "ankit",
   userinfo:()=>{
    console.log(this.name);
   }
 }

 objs.userinfo() //-----> gives you undefined cause of in arrow function this is binded to one step above 
 // so question is can we use call ,apply , bind for this ?
 // *********** no we cannot bind this for arrow functions **********



 //Option 1: Concise Method Syntax (Recommended)

JavaScript
let objs = {
  name: "ankit",
  userinfo() {
    console.log(this.name); 
  }
}

objs.userinfo(); // Logs "ankit"



 //Option 2: Standard Function Expression

JavaScript
let objs = {
  name: "ankit",
  userinfo: function() {
    console.log(this.name); 
  }
}

objs.userinfo(); // Logs "ankit"
}










