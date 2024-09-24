// About the Function

// function poem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wonder what you are");

// }
// poem();

// function dice() {
//     let num = Math.floor( Math.random() * 6) + 1;
//     console.log(num);
// }
// dice();

// Practice Question 3

// function average(a,b,c) {
//     let num = (a+b+c)/3;
//     console.log(num);
// }
// average(10,20,30);

// Practice Question 4

// function table(num) {
    // for(i = 1; i<=10; i++){
    //     console.log(`${num} X ${i} = ${num*i}`);
    // }
// }
// table(15);

// Practice Question 5

// function sum(range){
//     let sum = 0;
//     for(let i = 1; i<=range; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sum(10000));

// practice Question 6

function printArray(array) {
    let result = "";
    for(let i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}
let arr = ["I ", "am ", "Abhay ", "Singh."];
console.log(printArray(arr));

