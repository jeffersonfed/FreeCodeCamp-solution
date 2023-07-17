// (||) returns true if either of the operands is true. 
//Otherwise, it returns false.

// if (num > 10) {
//     return "No";
//   }
//   if (num < 5) {
//     return "No";
//   }
//   return "Yes";

//This code will return Yes if num is between 5 and 10 (5 and 10 included). 
//The same logic can be written with the logical or operator.

// if (num > 10 || num < 5) {
//     return "No";
//   }
//   return "Yes";

function testLogicalOr(val) {
    // Only change code below this line
  
    if(val < 10 || val > 20){
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);