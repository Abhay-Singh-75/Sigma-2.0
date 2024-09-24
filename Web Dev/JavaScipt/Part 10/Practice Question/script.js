// Practice Question 2
// let btn = document.createElement("button");
// let body = document.querySelector("body");   
// btn.innerText = "Click me!";
// body.append(btn);

// btn.addEventListener("click", (event) =>{
//     btn.style.color = "green";
//     btn.style.backgroundColor = "yellow";
// })


// Practice Question 3
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("change", function(){
    h2.innerText = this.value;
})


