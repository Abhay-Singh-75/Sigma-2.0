let input = document.querySelector("input");

let btns = document.querySelectorAll("button");

let btnsArr = Array.from(btns);

let result = "";

btnsArr.forEach(btn => {
    btn.addEventListener("Click", (event) => {
        if(event.target.innerText == "="){
            result = eval(result);
            input.value = result;
        }

        result += event.target.innerText;
        input.value = result;

    })
})