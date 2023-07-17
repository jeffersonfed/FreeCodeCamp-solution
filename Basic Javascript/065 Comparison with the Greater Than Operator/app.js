//>) compares the values of two numbers. 
//If the number to the left is greater than the number to the right, 
//it returns true. Otherwise, it returns false.

// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);