let inp = document.querySelector("#addInput");
let btn = document.querySelector("#Add");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    if (inp.value == "") {
        alert("Please Enter the Task.");
    } else {
        let list = document.createElement("li");
        list.innerText = inp.value;
        ul.append(list);
        inp.value = "";

        delBtns = document.createElement("button");
        delBtns.innerText = "Delete";
        delBtns.id = "delete";
        list.append(delBtns);
    }
});

ul.addEventListener("click", function(event){

    console.dir(event.target);
    // if (event.target.nodeName == "BUTTON"){
        
    //     let list = event.target.parentElement;
    //     list.remove();
    // }
})



// is wale code me ek problem aati hai jisme new buttons ek liye event trigger nhi hota hai
// let delBtns = document.querySelectorAll("#delete");
// for(dbtn of delBtns){
//     dbtn.addEventListener("click", () => {
//         let parent = dbtn.parentElement;
//         console.log(parent);
//     });
// }




