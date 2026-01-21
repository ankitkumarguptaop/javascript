
function ColourGenerator(){
let red = Math.floor(Math.random()*256);      
let green = Math.floor(Math.random()*256);    
let blue =  Math.floor(Math.random()*256);     
let color =`rgb(${red},${green},${blue})`
return color;
}
let btn=document.querySelector("#btn");
let heading=document.querySelector("#HH2");
btn.addEventListener("click",(e)=>{
    let randcol=ColourGenerator();
    heading.textContent=randcol;
    btn.style.backgroundColor=randcol;
    document.body.style.backgroundColor = randcol;
});

