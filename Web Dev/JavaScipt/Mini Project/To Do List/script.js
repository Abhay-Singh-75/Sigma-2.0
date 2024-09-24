let input = document.querySelector("#addTask");

let addBtn = document.querySelector("#Add");

let tskLst = document.querySelector("#list");

// let btnDiv = document.querySelector("#btnDiv");

addBtn.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please Enter the Task");
    }
    else {
        addTask();
    }
})

function addTask() {
    let lstItm = document.createElement("li");
    lstItm.classList.add("li")

    let btnDiv = document.createElement("div");

    let edtBtn = document.createElement("button");
    edtBtn.innerText = "Edit";
    edtBtn.classList.add("btn", "edit");


    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("btn", "delete");


    lstItm.innerText = input.value;
    input.value = "";
    tskLst.append(lstItm);
    lstItm.appendChild(btnDiv);
    btnDiv.appendChild(edtBtn);
    btnDiv.appendChild(delBtn);
}

let edtBtns = document.querySelectorAll(".edit");
let delBtns = document.querySelectorAll(".delete");

tskLst.addEventListener("click", (event) => {
    let parent = event.target.parentElement;

    if (event.target.textContent == "Delete") {
        parent.parentElement.remove();
    }

    else if (event.target.textContent == "Edit") {
        let edt = prompt("Edit the task here: ");
        if (edt.length > 0){
            let prnt = parent.parentElement;
            prnt.innerText = edt;
            prnt.append(parent);
        }
    }
})

