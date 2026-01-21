
// event on multiple buttons

// let buttons = document.querySelectorAll("button");

// for(let i=0; i<buttons.length ; i++){
//     buttons[i].addEventListener("click",function(){
//         console.log("you click me" , this.textContent);
//     })
// }



// event object 

// whenever we add eventListener to any element 
// js Engine----> line by line execute of code
// browser----> js Engine + some extra features
// browser----> js Engine + WebAPI
// jab koi event trriger hoga toh browser 2 kam karega
// 1> jo callback function ha wo ja engine ko dega
// 2> callback function ke sath jo event hua ha uski information bhi dega
// ye info eak object ke sath milegi jo calback function me hoga



// let buttons1 = document.querySelectorAll("button");
// for(let i=0; i<buttons1.length ; i++){
//     buttons1[i].addEventListener("click",function(eventobject){
//         console.log(eventobject);
//         console.log(eventobject.currentTarget.textContent);
//     })
// }


// events behind the scenes 


// callStack----> holds global execution context and for all events 
// web API -----> all events hold by web Api when an event trigger the it goes to callback Queue
// callback queue-----> stores all the trrigered events in their sequential order
// event loop-----> take care of wether callStack execute something if yes then nothing change in callback queue 
//                  if callStack is empty then callback queue give its trigger event to callback stack in FIFO order and
//                  and call stack execuete it accordingly. 


console.log("script start");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num=0;
        for (let i = 0; i < 1000000000; i++) {
            num = num + 1;
        }
        console.log("you clicked " , e.target.textContent , " value of event listner",num)
    })
})

let num=0;
for (let i = 0; i < 1000000000; i++) {
    num = num + 1;
}
console.log("value of num",num);
console.log("script end");



