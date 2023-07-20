// You may recall from 060 Comparison with the Equality Operator
    //that all comparison operators return a boolean true or false value.

    // function isEqual(a, b) {
    //     if (a === b) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }

    // there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

    // function isEqual(a, b) {
    //     return a === b;
    //   }

    function isLess(a, b) {
        // Only change code below this line
        // if (a < b) {
        //   return true;
        // } else {
        //   return false;
        // }
          return a <= b;
          
          
        
      
        // Only change code above this line
      }
      
      isLess(10, 15);