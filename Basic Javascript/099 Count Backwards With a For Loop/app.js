/*A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
*/
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i-=2){
  myArray.push(i);
}



console.log(myArray);