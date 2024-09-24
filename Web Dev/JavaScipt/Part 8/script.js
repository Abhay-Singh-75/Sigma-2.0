// forEach function
// arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach( (ele) => {
//     console.log(ele);
// })


// map function
// let num = [1,2,3,4,5];
// let newArr = num.map( (el) => {
//     return el*2;
// })


// Filter Function
// let num = [1,2,3,4,5,6,7,8,9];
// let even = num.filter( (el) => (el%2 == 0))
// console.log(num);
// console.log(even);


// Every Functio/n
//let num = [1,2,3,4];
// let num2 = [2,4,6];
// result = num.every( (el) => (el%2 == 0))
// result2 = num2.every( (el) => (el%2 == 0))


// Reduce Function
// let num = [1,2,3,4];
// let result = num.reduce( (res,el) => (res+el));
// console.log(result);


// Finding the maximum number from an array using reduce function
// let arr = [1,2,3,4,5,6,789,44,67];
// let maxNum = arr.reduce((max, num) => {
//     if(max < num){
//         return num;
//     }   else{
//         return max;
//     }
// })


// Checking the array the number in an array is a multiple of 10 or not.
// let num = [10,20,30,40,50];
// let check = num.every( (num) => (num%10 == 0))
// console.log(check);


// Finding the minimum number from an array
// let arr = [1,2,3,4,5];
// let min = arr.reduce( (acc, num) => {
//     if(acc < num){
//         return acc;
//     }   else{
//         return num;
//     }
// })
// console.log(min);


// Spread Methods
// console.log(..."Abhay");


// Spread Methoda with array literals 
// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// Combining Two arrays
// let odd = [1,3,5,7,9];
// let even = [2,4,6,8];
// let num = [...odd, ...even];


// Spread Methods with object literals 
// let data = {
//     name : "Abhay Singh",
//     email : "abhay@gmail.com",
//     mobNo : "7533981816",
// }
// let dataCopy = { ...data, Id : 123};


// Using Destructing
// let names = ["tony", "bruce", "peter", "steve", "thor"];
// let [winner , runner, ...others] = names;


// Desstructuring with literals
// let std = {
//     name : "Karan",
//     class : 9,
//     age : 14,
//     subject : ["hindi", "english", "math", "science", "social"],
//     username : "Karan123",
//     password : 7533
// };
// const {username : user, password : pass} = std;
// console.log(user, pass);