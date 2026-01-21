let formtodo = document.querySelector(".form-todo");
let text = document.querySelector(".form-todo input#new-id");
let todolist = document.querySelector(".todo-list");




formtodo.addEventListener("submit", (e) => {
    e.preventDefault();
    if (text.value != "") {
        todolist.insertAdjacentHTML("afterbegin",`<li><span class='text'>${text.value}</span><div class='todo-buttons'><button class='todo-btn done'>Done</button><button class='todo-btn remove'> Remove</button></div></li>`);
    }
    text.value = "";
});


todolist.addEventListener("click", (e) => {
    if (e.target.classList.contains("done")) {
        let spanli = e.target.parentNode.previousElementSibling;
        spanli.style.textDecoration = "line-through";
        // text.style.textDecoration = "linethrough"
    }
    if (e.target.classList.contains("remove")) {
        let spanli = e.target.parentNode.parentNode;
        spanli.remove();

    }
}) 


