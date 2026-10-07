

console.log("script start");

let id = setTimeout(() => {
    console.log("in setTimeout");
}, 0);


clearTimeout(id);
console.log(id);
console.log("script end");


console.log("script start");
let id1 = setInterval(() => {
    console.log("in setInterval", Math.random());
}, 10);
clearInterval(id1);
console.log("script end");

let btn = document.querySelector("button");

function colour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click", () => {
    setInterval(() => {
        let col = colour()
        document.body.style.backgroundColor = col;
        btn.innerText = col;
        btn.style.color = col;
    }, 1000)
});



/// callback

function func1(callback) {
    console.log("func 1 called");
    callback();
}
function func2() {
    console.log("func 2 called");
}

func1(func2);



function getandtwonumbers(num1, num2, callback) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        callback(num1, num2);
    }
    else {
        console.log("you entered not a number");
    }
};

function add(num1, num2) {
    console.log("the sum of two numbers is ", num1 + num2);

}
getandtwonumbers(1, 1, add);



// same work with onfaluiure and onsuccess 


function getandtwonumbers(num1, num2, onSuccses, onFaluiure) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        onSuccses(num1, num2);
    }
    else {
        onFaluiure();
    }
};

getandtwonumbers(2, 3, (num1, num2) => {
    console.log("the sum of two numbers is ", num1 + num2);
}, () => {
    console.log("you entered not a number");
});

// callback in asychonous programming ,callback hell ,  pryamid of doom

let h1 = document.querySelector('.heading1');
let h2 = document.querySelector('.heading2');
let h3 = document.querySelector('.heading3');
let h4 = document.querySelector('.heading4');
let h5 = document.querySelector('.heading5');
let h6 = document.querySelector('.heading6');
let h7 = document.querySelector('.heading7');
let h8 = document.querySelector('.heading8');
let h9 = document.querySelector('.heading9');
let h10 = document.querySelector('.heading10');

// callback hell 
setTimeout(() => {
    h1.style.color = "red";
    h1.textContent = "H1";
    setTimeout(() => {
        h2.style.color = "blue";
        h2.textContent = "H2";
        setTimeout(() => {
            h3.style.color = "green";
            h3.textContent = "H3";
            setTimeout(() => {
                h4.style.color = "pink";
                h4.textContent = "H4";
                setTimeout(() => {
                    h5.style.color = "gold";
                    h5.textContent = "H5";
                    setTimeout(() => {
                        h6.style.color = "purple";
                        h6.textContent = "H6";
                        setTimeout(() => {
                            h7.style.color = "yellow";
                            h7.textContent = "H7";
                            setTimeout(() => {
                                h8.style.color = "orange";
                                h8.textContent = "H8";
                                setTimeout(() => {
                                    h9.style.color = "violet";
                                    h9.textContent = "H9";
                                    setTimeout(() => {
                                        h10.style.color = "lightgreen";
                                        h10.textContent = "H10";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// with promise it make it flat
function changeTextPromise(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color;
                element.textContent = text;
                resolve("Success"); // Triggers the next .then()
            } else {
                reject("Element not found"); // Skips to the .catch()
            }
        }, time);
    });
}

changeTextPromise(h1, "new h1", "red", 1000)
    .then(() => changeTextPromise(h2, "new h2", "blue", 1000))
    .then(() => changeTextPromise(h3, "new h3", "green", 1000))
    .then(() => changeTextPromise(h4, "new h4", "pink", 1000))
    .then(() => changeTextPromise(h5, "new h5", "gold", 1000))
    .then(() => changeTextPromise(h6, "new h6", "purple", 1000))
    .then(() => changeTextPromise(h7, "new h7", "yellow", 1000))
    .then(() => changeTextPromise(h8, "new h8", "orange", 1000))
    .then(() => changeTextPromise(h9, "new h9", "violet", 1000))
    .then(() => changeTextPromise(h10, "new h10", "lightgreen", 1000))
    .catch((error) => {
        // If ANY of the elements above are missing, the chain stops immediately 
        // and jumps right down to here.
        console.log("Failure:", error);
    });



function changetext(element, text, color, time, onsuccess, onFaluiure) {
    setTimeout(() => {
        if (element) {
            element.style.color = color;
            element.textContent = text;
            if (onsuccess) {
                onsuccess();
            }
        } else {
            if (onFaluiure) {
                onFaluiure();
            }
        }
    }, time);
};



changetext(h1, "new h1", "red", 10000, () => {
    changetext(h2, "new h2", "red", 100, () => {
        changetext(h3, "new h3", "red", 100, () => {
            changetext(h4, "new h4", "red", 100, () => {
                changetext(h5, "new h5", "red", 100, () => {
                    changetext(h6, "new h6", "red", 100, () => {
                        changetext(h7, "new h7", "red", 100, () => {
                            changetext(h8, "new h8", "red", 100, () => {
                                changetext(h9, "new h9", "red", 100, () => {
                                    changetext(h10, "new h10", "red", 100, () => {},
                                        () => { console.log("faliure") });},
                                    () => { console.log("faliure") });},
                                () => { console.log("faliure") });},
                            () => { console.log("faliure") });},
                        () => { console.log("faliure") });},
                    () => { console.log("faliure") });},
                () => { console.log("faliure") });},
            () => { console.log("faliure") });},
        () => { console.log("faliure") });},
    () => { console.log("faliure") });


// promise

let ingredients = ["rice", "alt","oil","veges"];

let fridericepromise=new Promise((resolve,reject)=>{
    if(ingredients.includes("rice")&& ingredients.includes("oil")&& ingredients.includes("salt")&& ingredients.includes("veges")){
       resolve("fride rice");
    }
    else{
        reject("not sufficient ingridents");
    }

});


fridericepromise.then(
    (myfriderice)=>{
        console.log(" i am eating ",myfriderice);
    },(error)=>{
        console.log(error);

    }
)

fridericepromise.then(
    (myfriderice)=>{
        console.log(" i am eating ",myfriderice);
    }
).catch((error)=>{
    console.log(error);}
)
