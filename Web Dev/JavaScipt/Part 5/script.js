// const post = {
//     userName: "@abhaysingh",
//     content: "This is my first post",
//     likes: 150,
//     repost: 5,
//     tags: ["apnacollege", "sigma"]

// };


// const classInfo = {
//     A: {
//         marks: "A",
//         City: "Pune"
//     },

//     B: {
//         marks: "A++",
//         City: "Delhi"
//     },

//     C: {
//         marks:"O",
//         City: "Gurgaon"
//     }
// };  Object Of Obkect.

// Guesssing Game

const user = prompt("Enter the maximum number:");

let random = Math.floor( Math.random() * user) + 1;
console.log(random);

let guess = prompt("Guess the number:");

while(true){
    if(guess == "quit"){
        console.log("User Quit the game.");
        break;
    }   
    
    
if(guess == random){
    console.log("Wow! You guess the right number.");
    break;
} else if(guess < random){
    guess = prompt("Hint: Your number was too small. Please try again!");
} else{
    guess = prompt("Hint: Your number was too large. Please try again!");
}



//   else{
//     guess = prompt("Wrong number! Please try agian.");
// }


}

