let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
    console.log("Div was clicked");
})

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Ul was clicked");
})

for (li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("list was clicked");
    })
}

let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (clicked) => {
        inp.value = btn.innerText;
})