// hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.


{
    console.log(this);
    console.log(firstname); // ----> give undefined 
    console.log(lastname);  // ----> give undefined 
    console.log(hello);     // ----->  give actual output
    console.log(func);     // ----->  give undefined
    // func(); this will give you error incase of function expression
    hello(); //----->  give actual output


    // function decleration
    function hello() {
        console.log("hello i am learning js");
    }
    // function expression
    var func = function () {
        console.log("hi i am learning js");
    }
    var firstname = "ankit";
    var lastname = "gupta";
}

// hoisting in case of let and const
{
    //Uncaught ReferenceError:
    // Cannot access 'Firstname' before initialization
    // console.log(Firstname); give above error=>(uninitialised)
    // Uncaught ReferenceError: newvar is not defined =>(undeclared)
    // console.log(newvar);

    // this means hoisting is done in case of let and const
    let Firstname = "ankit";
    let Lastname = "gupta";
    console.log(Firstname);
    console.log(Lastname);

    //uncaught SyntaxError:
    //Missing initializer in const declaration
    // const Fname ; we have to make sure  when we declare const then we have to initialized at that time 

}


/*scope chaining in javascript 

Scope Chain means that one variable has a 
scope (it may be global or local/function or block scope) 
is used by another variable or function having another 
scope (may be global or local/function or block scope). 
This complete chain formation goes on and stops when 
the user wishes to stop it according to the requirement.

*/




/* <li class="nav-item" id="nav1"><a href="#home">Home</a></li> */

// class ------> nav-item
// id ------> nav1
// TagName ------->li or a
// Attribute herf, class, id


//dom manupulation
// select element

//1select element by get element by id

let selectitem = document.getElementById("main-heading");
console.log(typeof selectitem); // object   
// selectitem.textContent="hi" ; we can change the tasks



//2 select element by queryselector (help to select both class and id)
let mainheading = document.querySelector("#main-heading");
console.log(mainheading);
console.dir(mainheading);

let navitem = document.querySelector(".nav-item"); // this will give only first item , for all we use queryselecterAll
console.log(navitem);
let navitems = document.querySelectorAll(".nav-item"); // give us node-list of all items
console.log(navitems);

console.log(mainheading.innerText); // give only visible part
console.log(mainheading.textContent); // give  all text
// we can also change text content..
mainheading.textContent = "Task Manager"; // Text content changed
console.log(mainheading.textContent); // give  all text



// change the style of the element

mainheading.style.color = "red"
mainheading.style.border = "5px solid yellow"



// get and set Attributes

let place = document.querySelector("input");
// console.log(place.getAttribute("placeholder"))
console.log(place.getAttribute("placeholder"));
place.setAttribute("placeholder", "Add your Todo");
console.log(place.getAttribute("placeholder"));


place = document.querySelector("section.container form  input#new-id");
console.log(place);

console.log(place.getAttribute("placeholder"));
place.setAttribute("placeholder", "Add your new Todo");
console.log(place.getAttribute("placeholder"));


// var newvat=321;
// var n=4;
// jojj(newvat+=n);

// function jojj(newvat){
// console.log(newvat);
// }

//getElementByClassName
let navite = document.getElementsByClassName("nav-item"); //give HTMLcollection
console.log(navite);
console.log(navite.length);
console.log(navite[1]);
// in HTMLcollection we cannot use foreach loop (we can change it into firstly in an array )
// we can use for loop , for of loop

// navite.forEach(element => {
//     console.log(element);
// });
//for of loop
for (nevites of navite) {
    nevites.style.backgroundColor = "#ed555d"
}
// simple for loop
for (let i = 0; i < navite.length; i++) {
    navite[i].style.backgroundColor = "green";
}

let aa = document.getElementsByTagName("a");
console.log(aa);

for (let i = 0; i < aa.length; i++) {
    aa[i].style.backgroundColor = "#ad252d";
    aa[i].style.color = "black";

}

let navit = document.querySelectorAll(".nav-item"); // give nodeList
console.log(navit); // object
console.log(Array.isArray(navit)); // false
console.log(typeof navit);
console.log(navit.length);
console.log(navit[1]);

// in querySelectorAll we can use foreach loop 
navit.forEach(element => {
    element.style.backgroundColor = "yellow"
});

// we can change NodeList and HTMLCollection into array  by simply use
navit = Array.from(navit);
navite = Array.from(navite);
console.log(Array.isArray(navit)); // True
console.log(Array.isArray(navite)); // True



// static list vs live list
// diffrence b/w queryselector(static)(give nodelist) and getElementByName(dynamic)(give HTMLCollection)

{
   // static list
let listitems= document.querySelectorAll(".todo-list li");
console.log(listitems);   // nodelist of size 5
let li6 = document.createElement("li");
let ul = document.querySelector(".todo-list");
li6.textContent="item 6";
ul.append(li6);
console.log(listitems); // also nodelist of size 5  not changed

}

{
    // live list
let ul1= document.querySelector(".todo-list");
let list = ul1.getElementsByTagName("li");
console.log(list);// nodelist of size 6  
const seventh = document.createElement("li");
seventh.textContent="item 7";
ul1.append(seventh);
console.log(list);//  nodelist of size 7  changed

}



// how to get element dimension 

let sectionTodo =document.querySelector(".section-todo");
console.log(sectionTodo);
let info= sectionTodo.getBoundingClientRect();
console.log(info.height);
console.log(info.width);
console.log(info);
