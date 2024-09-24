// for(let i=1; i<=5; i++){
//     console.log(i);
// }


// Printing all odd numbers from 1 tp 15.

// for(let i=1; i<=15; i += 2  ){
//     console.log(i);
// }

// Printing all even number from 2 tp 10.

// for(let i=10; i>=2; i = i-2){
//     console.log(i);
// }

// Printing table of 5

// for(let i=1; i<=10; i++){
//     console.log(`5 X ${i} = ${5*i}`);
// }

// Concepts of while loop

// let favMovie = "John Wick";
// let guess = prompt("Guess the movie");
// while(guess != favMovie && guess != "Quit"){
//     console.log("Worng guess");
//     guess = prompt("Guess again:");
// }


// let fruits = ["mango", "litchi", "bnanana", "orange", "apple"];
// let rev = fruits.reverse();
// for(let i=0; i<rev.length; i += 2){
//     console.log(i+1, rev[i]);
// }


//  To do app

let todo = [];
let req = prompt("Enter you request:");
// req = vari.toLowerCase();

while(true){    
    if( req == "list"){
        console.log("----------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------");
    }   else if( req == "add"){
        let add = prompt("Enter the task you want to add:");
        todo.push(add);
        console.log("task added");
    }   else if( req == "delete"){
        let idx = prompt("enter the index of a task that you want to delete:");
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }   else if( req == "quit"){
        console.log("Quitting App.");
        break;
    }   else{
        console.log("You  entered wrong choice.");
    }

    req = prompt("Enter your request");

}