// let btn = document.querySelector('button');

// // btn.onclick = function () {
// //     alert("button was clicked");
// // };

// function clicked() {
//     alert("The button was clicked.");
// };

// btn.onclick = clicked;

// function enter() {
//     console.log("you entred a button");
// };

// btn.onmouseenter = enter;

// let btn = document.querySelector("button");

// btn.addEventListener("click", function  () {
//     let h2 = document.querySelector('h2');
//     let div = document.querySelector(".inner-div");
//     let color = randomColor();
//     h2.innerText = color;
//     div.style.backgroundColor = color;
// });

// function randomColor(){
//     let red = Math.floor(Math.random() * 255 );
//     let green = Math.floor(Math.random() * 255  );
//     let blue = Math.floor(Math.random() * 255 );

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// let btn = document.querySelector('button');
// let form = document.querySelector("form");
// btn.addEventListener('click', function(event){
//     console.log(event)
//     console.log("button Clciked");
// });

// inp.addEventListener('keydown', function(event){
//     // console.log(event);
//     // console.log(event.code, event.key);
//     // console.log(event.key);
// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     let user = document.querySelector('#username');
//     let pass = document.querySelector("#password");
//     console.log(user.value);
//     console.log(pass.value);
// })

// Practice Question

let btn = document.querySelector('button');
let inp = document.querySelector('input');
let body = document.querySelector('body');


btn.addEventListener("mouseout", function(event){
    // console.log("Event Works");
    // console.dir(event);
})

inp.addEventListener("keypress", function(event) {
    // console.log("The key was pressed");
    console.dir(event);
})

inp.addEventListener("scroll", function() {
    console.log("The page scrolled");
})
