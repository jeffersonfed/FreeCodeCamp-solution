/*The next type of loop you will learn is called a do...while loop. 
It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, 
and then continue to run the loop while the specified condition evaluates to true. 

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

[0, 1, 2, 3, 4]. However, what makes the do...while different 
from other loops is how it behaves when the condition fails on the first check. 
Let's see this in action. Here is a regular 
while loop that will run the code in the loop as long as i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops
*/

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
  
} while (i < 5);