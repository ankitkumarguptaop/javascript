// what is events
// An event is an action that occurs as per the user's instruction as input and gives the output in response
// three ways to add events  to js


// 1 way -> to add event into html simply 
//example <button class="btn btn-headline" onclick="console.log('you clicked me')">Learn More</button>


// 2nd way  to add event 

// let btn1 = document.querySelector(".btn-headline");
// console.log(btn1);
// btn1.onclick = function(){
// console.log("you clicked me by method 2");
// }


// 3rd way to add event (BestWay)

// whole function inside  
// let btn2 = document.querySelector(".btn-headline");
// btn2.addEventListener("click", function(){
//     console.log("you clicked me by third method");
// })

// whole function outside
// function clickMe(){
//     console.log("you clicked me by third method");
// }
// let btn2 = document.querySelector(".btn-headline");
// btn2.addEventListener("click",clickMe);


// arrowfunction
let btn2 = document.querySelector(".btn-headline");
btn2.addEventListener("click", ()=>{
    console.log("you clicked me by third method arrow func");
})




// this(object) keyword  inside the eventlistner callback

// in case of function decleration/function expression this keyword is selecting element itself
let btn3 = document.querySelector(".btn-headline");
btn3.addEventListener("click", function(){
    console.log("you clicked me by third method ");
    console.log(this); // give selected button
})

// case of arrow function
let btn4 = document.querySelector(".btn-headline");
btn4.addEventListener("click", ()=>{
    console.log("you clicked me by third method arrow func");
    console.log(this); // -> give window
})

// keypress event and mouseover/ mouseleave event

let body = document.body;
body.addEventListener("keypress",(e)=>{
     console.log(e.key);
})
btn4.addEventListener("mouseover", ()=>{
    console.log("mouseover !!!");
});
btn4.addEventListener("mouseleave", ()=>{
    console.log("mouseleave !!!"); 
});