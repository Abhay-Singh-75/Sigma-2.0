// Example of Pomise Object

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let intrntSpeed = Math.floor(Math.random() * 10) + 1;
//         if (intrntSpeed > 4) {
//             resolve("Success: The data was saved.");
//         } else {
//             reject("Failure: The data was failed to save.");
//         }
//     });
// }

// saveToDb("Abhay Singh")
//     .then((result) => {
//         console.log("Data 1 was saved.");
//         console.log(result);
//         return saveToDb("apna college")
//     })
//     .then((result) => {
//         console.log("Data 2 was saved.");
//         console.log(result);
//         return saveToDb("Web D");
//     })
//     .then((result) => {
//         console.log("Data 3 was saved.");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log(error);
        
//     });

let h1 = document.querySelector("h1");

function chngeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    })
}

chngeColor("red", 1000)
.then(() => {
    console.log("The color was chnged to red.");
    return chngeColor("green", 1000)
})
.then(() => {
    console.log("The color was changed to green");
})
.catch(() => {
    console.log("The color was not changed");
})