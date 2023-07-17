//Strict equality (===) is the counterpart to the equality operator (==). 

// === → for number (3) and string ('3')
// == → for number (3)

// 3 ===  3  // true
// 3 === '3' // false

//3 is a Number type and '3' is a String type.

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);