//Capturing and bubbling allow us to implement 
// one of the most powerful event handling patterns called event delegation.
let grandparent = document.querySelector("#grandparent");
grandparent.addEventListener("click", (event) => {
    console.log("something clicked !!!");
    console.log("clicked on",event.target);
    console.log("clicked by",event.currentTarget);
});