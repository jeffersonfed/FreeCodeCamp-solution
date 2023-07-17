//he logical and operator (&&) returns true if and 
//only if the operands to the left and right of it are true.

//The same effect could be achieved by nesting an if statement inside another if.

// if (num > 5) {
//     if (num < 10) {
//       return "Yes";
//     }
//   }
//   return "No";
//-----------------------------------------------------------------------
// This code will return Yes if num is greater than 5 and less than 10. 

// if (num > 5 && num < 10) {
//     return "Yes";
//   }
//   return "No";


function testLogicalAnd(val) {
    // Only change code below this line
  
    if(val <= 50  && val >= 25){
      return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
