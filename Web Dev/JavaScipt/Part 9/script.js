let body = document.querySelector('body');

let para = document.createElement('p');
para.innerText = "Hey I'm red!";
para.classList.add('para');
body.append(para);

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
h3.classList.add("h3");
body.append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a Div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("Box");

body.append(div);