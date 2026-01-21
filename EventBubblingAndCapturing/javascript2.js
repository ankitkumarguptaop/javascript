let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// event bubbling
document.body.addEventListener("click", () => {
    console.log("Event body !!!");
});
grandparent.addEventListener("click", () => {
    console.log("Event grandparent !!!");
});
parent.addEventListener("click", () => {
    console.log("Event parent !!!");
});

child.addEventListener("click", () => {
    console.log("Event child !!!");
})

// event capuring
document.body.addEventListener("click", () => {
    console.log("Capture body !!!");
},true);
grandparent.addEventListener("click", () => {
    console.log("Capture grandparent !!!");
},true);
parent.addEventListener("click", () => {
    console.log("Capture parent !!!");
},true);

child.addEventListener("click", () => {
    console.log("Capture child !!!");
},true)


