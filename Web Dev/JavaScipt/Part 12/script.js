// function greet(){
//     return 'Hello World!';
// }


//  Use of async function and async keyword
// async function greet(){
//     return "hello !";
// }

//  Use if await keyword in async function 
// Impleting the await keyword by usng the color change methods in the last part


// let h1 = document.querySelector("h1");


// function chngeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`The color was changed to: ${color}`);
//             resolve("Color was changed");
//         }, delay);
//     });
// }

// async function demo() {
//     await chngeColor("red", 1000);
//     await chngeColor("yellow", 1000);
//     await chngeColor("green", 1000);
//     await chngeColor("blue", 1000);
//     chngeColor("orange", 1000);
// }

let url = "https://catfact.ninja/fact";

async function greet() {
    try{
        // This code is using the .json() and fetch() method
        // let req = await fetch(url);
        // let data = await req.json();

        let req = await axios.get(url);
        return req.data.fact;
    }
    catch(err){
        console.log("error - ", err);
        return "No fact found";
    }
    
}

btn = document.querySelector("button");
let para = document.querySelector("#fact");

btn.addEventListener("click", async () => {
    let fact = await greet();
    para.innerText = fact;
})