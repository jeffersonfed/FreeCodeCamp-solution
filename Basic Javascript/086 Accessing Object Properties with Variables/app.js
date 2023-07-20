/*Another use of bracket notation on objects
        is to access property which is stored as the value of a variable. 

Example:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

The string Doberman would be displayed in the console.

Note:
        do not use quotes around the variable name when using it to access the property
                    because we are using the value of the variable not the name

*/

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  console.log(player);