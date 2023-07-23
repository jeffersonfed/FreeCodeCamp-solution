/*
    can run the same code multiple times using loop

    first type of loop : while loop while loop because it runs 
            while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
 the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

*/

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0){
  myArray.push(i);
  i--;
}