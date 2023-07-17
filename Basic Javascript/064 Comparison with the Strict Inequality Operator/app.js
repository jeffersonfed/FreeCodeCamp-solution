//The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
          //It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 

          
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);