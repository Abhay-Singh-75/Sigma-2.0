let body = document.querySelector('body');

// Practice Question 1
let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'Click me';
input.placeholder = "Enter text here";
body.prepend(btn);
body.prepend(input);

// Practice Question 2
input.placeholder = "username";
btn.setAttribute('id', 'Btn');


// Practice Question 3
let styleBtn = document.querySelector('#Btn');
styleBtn.style.backgroundColor = "blue";
styleBtn.style.color = "white";

// Practice Question 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
body.append(h1)
h1.classList.add("h1");



