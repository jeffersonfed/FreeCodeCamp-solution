//The most basic operator is the equality operator ==. 
//The equality operator compares two values and returns true if they're equivalent or false if they are not. 
//Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.


// 1   ==  1  // true
// 1   ==  2  // false
// 1   == '1' // true
// "3" ==  3  // true
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
      //testEqual(12) should return the string Equal
    }
    return "Not Equal";
  }
  
// === → for number (3) and string ('3')
// == → for number (3)

  testEqual(10);
  //testEqual(10) should return the string Not Equal



  // This is known as Type Coercion. 