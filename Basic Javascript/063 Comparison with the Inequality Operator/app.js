//The inequality operator (!=) is the opposite of the equality operator
        // means not equal and returns false where equality would return true and vice versa

        // 1 !=  2    // true
        // 1 != "1"   // false
        // 1 != '1'   // false
        // 1 != true  // false
        // 0 != false // false


// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);