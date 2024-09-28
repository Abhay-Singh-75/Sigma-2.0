let gameSeq = [];  // Isme haam game ka data store krenge

let userSeq = [];  // Isme haam user ks data store krenge

let highest = [];

let started = false;

let level = 0;

let h3 = document.querySelector("h3");

let btns = ["yellow", "orange", "green", "red"];

let allBtns = document.querySelectorAll(".Box");

let h4 = document.querySelector("#score");

document.addEventListener("keypress", (event) => {
    if (started == false) {
        started = true;

        highestScore();

        levelUP();
    }
})

// Level Up function increases the level
function levelUP() {
    userSeq = [];
    level++;
    h3.innerText = "Level " + level;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(() => {
        btn.classList.remove("user-flash");
    }, 200);
}

for (btn of allBtns) {
    btn.addEventListener("click", buttonPress);
}

function buttonPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkLevel(userSeq.length - 1);
}

function checkLevel(idx) {
    if (userSeq[idx] == gameSeq[idx]) {

        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 1000);
        }

    }
    else {
        highest.push(level);
        h3.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to restart`;

        highestScore();

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);

        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

function highestScore() {
    let max = 0;
    let arr = highest.map((element) => {
        return element;
    });
    arr.push(max);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    h4.innerHTML = `Your Highest Score was: ${max}`;
}