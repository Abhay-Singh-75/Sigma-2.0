// let size = "M";
// if(size == "XL"){
//     console.log(`Price of ${size} popcorn is: RS. 250.`);
// }   else if( size == "L"){
//     console.log(`Price of ${size} popcorn is: Rs. 200.`);
// }   else if(size == "M"){
//     console.log(`Price pf ${size} popcorn is: Rs. 100.`);
// }   else if(size == "S"){
//     console.log(`Price of ${size} popcorn is: Rs. 50.`);
// }   else{
//     console.log("You choose wrong size.");
// }



// let str = "abhay Singh";
// let len = str.length;
// if(str[0] == 'a' && len > 3){
//     console.log("Good String.");
// }   else{
//     console.log("Bad String");
// }


// let day = 9;

// switch(day){
//     case 1:{
//         console.log("Monday");
//         break;
//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     case 3:{
//         console.log("Wednesday");
//         break;
//     }
//     case 4:{
//         console.log("Thursday");
//         break;
//     }
//     case 5:{
//         console.log("Friday");
//         break;
//     }
//     case 6:{
//         console.log("Saturday");
//         break;
//     }
//     case 7:{
//         console.log("Sunday");
//         break;
//     }
//     default:{
//         console.log("You entered wrong choice.")
//     }


// }


// alert("Kuch toh Gadbad Hai Daya !");

// Practice Question 1
// let num = 1000;

// if( num % 10 == 0){
//     console.log("Good");
// }   else{
//     console.log("Bad");
// }

// Practice Question 2
// let name = prompt("Please enter your name:");
// let age = prompt("Please enter your age:");

// alert(`${name} is ${age} years old.`);


// Practice Question 3
// let quat = 10;

// switch(quat){
//     case 1:{
//         console.log("january");
//         console.log("Feburary");
//         console.log("March");
//         break;
//     }
//     case 2:{
//         console.log("April");
//         console.log("May");
//         console.log("June");
//         break;
//     }
//     case 3:{
//         console.log("July");
//         console.log("August");
//         console.log("September");
//         break;
//     }
//     case 4:{
//         console.log("October");
//         console.log("November");
//         console.log("December");
//         break;
//     }
//     default:{
//         console.log("Entered wrong choice.");
//     }
// }



// Practice Question 4
// let str = "Abhay Singh";

// if(str.length > 5 && (str[0] == "a" || str[0] == 'A')){
//     console.log("It is Golden String");
// }   else{
//     console.log("It is not Golden String.");
// }

// Practice Question 5
// let num1 = 30;
// let num2 = 50;
// let num3 = 10;

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is greater than ${num2} and ${num3}.`);
// }   else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is greater than ${num1} and ${num3}.`);
// }   else {
//     console.log(`${num3} is greater than ${num1} and ${num2}.`);
// }

// Practice Question 6
let num1 = 12332;
let num2 = 4561232;

if( num1%10 == num2%10 ){
    console.log(`The last of both the number is same i.e. ${num1%10}.`);
}   else{
    console.log(`Not same`);
}