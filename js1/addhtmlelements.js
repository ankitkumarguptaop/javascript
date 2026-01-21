
//Inner HTML
// This is bad way to add html element to another already existed html with gthe help of js
// if you want to add some other new elemen to the html then fine

let head = document.querySelector(".headline");
head.innerHTML = "<h1> Inner Html Changed </h1>";
head.innerHTML += "<button class =\"btn btn-headline\">learn more</button>"   // if you want to use double quotes inside double quotes the use (\") equal => (") 

console.log(head.innerHTML);
console.log(head);


// createElement (another way to add html element to another alredy existing  element)
// append   (add last me) inside the element
// prepend   (add firt me) inside the element
// remove   (remove)
// after   element se phele (outside the element)
// before  element ke badd  (outside the element)
{
    let newtodo = document.createElement("li");
    let newtodotext = document.createTextNode("new todo added by createElement method");
    const todolist = document.querySelector(".todo-list");
    newtodo.append(newtodotext);
    todolist.append(newtodo);
    newtodo.remove();

}
// some minor changes to improve 
{
    let newtodo = document.createElement("li");
    newtodo.textContent = "this todo add by text content";
    const todolist = document.querySelector(".todo-list");
    todolist.append(newtodo);
}

// after
{
    let newtodo = document.createElement("li");
    newtodo.textContent = "this todo add by after method";
    const todolist = document.querySelector(".todo-list");
    todolist.after(newtodo);
}
// before 
{
    let newtodo = document.createElement("li");
    newtodo.textContent = "this todo add by before method";
    const todolist = document.querySelector(".todo-list");
    todolist.before(newtodo);
}


/// another way
// createAdjecentHtml(where,html);
// beforeend justlike apepend
// afterbegin justlike prepend
// beforebegin justlike before
// afterend justlike after
//replaceChild(newChild, oldChild)
{
    const todolist = document.querySelector(".todo-list");
    todolist.insertAdjacentHTML("beforeend","<li> beforeend justlike apepend </li>")
    todolist.insertAdjacentHTML("beforebegin","<li> beforebegin justlike before </li>")
    todolist.insertAdjacentHTML("afterend","<li>  afterend justlike after </li>")
    todolist.insertAdjacentHTML("afterbegin","<li> afterbegin justlike prepend </li>")
}

// how to clone nodes 
{
    let newtodo = document.createElement("li");
    newtodo.textContent = "this todo is clone";
    let newtodo3 = document.createElement("li");
    newtodo3.textContent = " replace sucessfully !!";
    let newtodo2=newtodo.cloneNode(true); // here (true) is used to colone their inside content/element
    const todolist = document.querySelector(".todo-list");
    todolist.append(newtodo);
    todolist.append(newtodo2);
    todolist.replaceChild(newtodo3,newtodo);

}
