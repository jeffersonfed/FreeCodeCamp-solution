/*
A common task in JavaScript is to iterate through the contents of an array. 
One way to do that is with a for loop. 
This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

*/
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

console.log(myArr);